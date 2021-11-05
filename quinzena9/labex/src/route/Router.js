import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element= {<HomePage/>}/>
            </Routes>

            <Routes>
                <Route path= "/listtrips" element= {<ListTripsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;