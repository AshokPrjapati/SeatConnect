import { Routes as AllRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Seats from "../pages/Seats";
import { Booking } from "../pages/Booking";

const Routes = () => {
    return (
        <>
            {/* Define routes for different pages */}
            <AllRoutes>
                <Route path="/" element={<Home />} /> {/* Route for the home page */}
                <Route path="/seats" element={<Seats />} /> {/* Route for the seats page */}
                <Route path="/booking" element={<Booking />} /> {/* Route for the booking page */}
            </AllRoutes>
        </>
    )
}

export default Routes;
