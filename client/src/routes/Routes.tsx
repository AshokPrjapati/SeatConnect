import { Routes as AllRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Seats from "../pages/Seats";

const Routes = () => {
    return (
        <>
            <AllRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/seats" element={<Seats />} />
            </AllRoutes>
        </>
    )
}

export default Routes