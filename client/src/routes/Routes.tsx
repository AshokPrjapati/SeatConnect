import { Routes as AllRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Seats from "../pages/Seats";
import { Booking } from "../pages/Booking";

const Routes = () => {
    return (
        <>
            <AllRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/seats" element={<Seats />} />
                <Route path="/booking" element={<Booking />} />
            </AllRoutes>
        </>
    )
}

export default Routes