import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { UrlBase } from "../../constants/constants";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router"




const TripDetailsPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [tripDetails, setTripDetails] = useState()
    const pathParams = useParams()
    const token = localStorage.getItem("token")
    const [updatePage, setUpdatePage] = useState(false)

    useEffect(() => {
        axios
        .get(`${UrlBase}/trip/${pathParams.idtrip}`, {headers: {"auth" : token}})
        .then((res) => {
            setTripDetails(res.data.trip)
        })
        .catch((err) => {
            console.log("erro", err.response)
        })
    }, [updatePage])

    const onClickDecideCandidate = (candidateId, response) => {
        if(response === "acepted"){
            axios
                .put(`${UrlBase}/trips/${pathParams.idtrip}/candidates/${candidateId}/decide`, 
                {"approve": true},
                {headers: {
                    "Content-Type": "application/json",
                    "auth" : token
                }} )
                .then((res) => {
                    alert("Candidato aprovado com sucesso!")
                    setUpdatePage(!updatePage)
                })
                .catch((err) => {
                    alert("Ocorreu um erro! Tente novamente.")
                })
        }
        else if(response === "rejected"){
            axios
                .put(`${UrlBase}/trips/${pathParams.idtrip}/candidates/${candidateId}/decide`, 
                {"approve": false},
                {headers: {
                    "Content-Type": "application/json",
                    "auth" : token
                }} )
                .then((res) => {
                    alert("Candidato rejeitado com sucesso!")
                    setUpdatePage(!updatePage)
                })
                .catch((err) => {
                    alert("Ocorreu um erro! Tente novamente.")
                })            
        }

    }

    const candidatesPendingList = tripDetails && tripDetails.candidates.map((candidate) => {
        return(
            <div key={candidate.id}>
                <p><b>Nome:</b> {candidate.name}</p>
                <p><b>Idade:</b> {candidate.age}</p>
                <p><b>Profissão:</b> {candidate.profession}</p>
                <p><b>Nacionalidade:</b> {candidate.country}</p>
                <p><b>Texto de candidatura:</b> {candidate.applicationText}</p>
                <div>
                    <button onClick = {() => onClickDecideCandidate(candidate.id, "acepted")}>Aceitar</button>
                    <button onClick = {() => onClickDecideCandidate(candidate.id, "rejected")}>Rejeitar</button>
                </div>
            </div>
        )
    })
    
    const candidatesApprovedList = tripDetails && tripDetails.approved.map((candidate) => {
        return(
            <div key={candidate.id}>
                <ul>
                    <li>{candidate.name}</li>
                </ul>
            </div>
        )
    })


    return(
        <>
            <header>
                <h2>Space Trips 🛸</h2>
                <button onClick = {() => navigate(-1)}>Voltar</button>
            </header>
            <main>
                <div>
                    {tripDetails && (
                        <>
                            <h2>{tripDetails.name}</h2>
                            <p><b>Descrição:</b> {tripDetails.description}</p>
                            <p><b>Planeta:</b> {tripDetails.planet}</p>
                            <p><b>Duração:</b> {tripDetails.durationInDays} dias</p>
                            <p><b>Data:</b> {tripDetails.date}</p>                            
                        </>
                    )}
                </div>
                <div>
                    <h2>Candidatos Pendentes</h2>
                    {tripDetails && candidatesPendingList}
                </div>
                <div>
                    <h2>Candidatos Aprovados</h2>
                    {tripDetails && candidatesApprovedList}
                </div>
            </main>
        </>
    )
}

export default TripDetailsPage