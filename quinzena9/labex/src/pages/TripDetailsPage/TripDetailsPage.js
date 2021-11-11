import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { UrlBase } from "../../constants/constants";
import useProtectedPage from "../../hooks/useProtectedPage";

const TripDetailsPage = () => {
    useProtectedPage()
    const [tripDetails, setTripDetails] = useState()
    const pathParams = useParams()
    const token = localStorage.getItem("token")

    useEffect(() => {
        axios
        .get(`${UrlBase}/trip/${pathParams.idtrip}`, {headers: {"auth" : token}})
        .then((res) => {
            console.log("res",res.data.trip)
            setTripDetails(res.data.trip)
        })
        .catch((err) => {
            console.log("erro", err.response)
        })
    }, [])

    const candidatesPendingList = tripDetails && tripDetails.candidates.map((candidate) => {
        return(
            <div key={candidate.id}>
                <p><b>Nome:</b> {candidate.name}</p>
                <p><b>Idade:</b> {candidate.age}</p>
                <p><b>Texto de candidatura:</b> {candidate.applicationText}</p>
                <p><b>Profissão:</b> {candidate.profession}</p>
                <p><b>Nacionalidade:</b> {candidate.country}</p>
                <button>Aceitar</button>
                <button>Rejeitar</button>
            </div>
        )
    })
    
    const candidatesApprovedList = tripDetails && tripDetails.approved.map((candidate) => {
        return(
            <div key={candidate.id}>
                <p><b>Nome:</b> {candidate.name}</p>
                <p><b>Idade:</b> {candidate.age}</p>
                <p><b>Texto de candidatura:</b> {candidate.applicationText}</p>
                <p><b>Profissão:</b> {candidate.profession}</p>
                <p><b>Nacionalidade:</b> {candidate.country}</p>
                <button>Aceitar</button>
                <button>Rejeitar</button>
            </div>
        )
    })
    console.log("token", token)
    console.log("requ", tripDetails)
    console.log("params", pathParams)
    console.log("candidatos", candidatesPendingList)

    return(
        <>
            <header>
                <h2>Space Trips 🛸</h2>
                <button>Voltar</button>
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