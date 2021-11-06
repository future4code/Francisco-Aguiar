import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import LoginPage from "../pages/LoginPage/LoginPage"



const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element= {<HomePage/>}/>
            </Routes>

            <Routes>
                <Route path= "/listtrips" element= {<ListTripsPage/>} />
            </Routes>

            <Routes>
                <Route path= "/applicationforme" element= {<ApplicationFormPage/>}/>
            </Routes>

            <Routes>
                <Route path= "login" element= {<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;