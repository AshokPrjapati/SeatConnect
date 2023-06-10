import { Routes as AllRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
    return (
        <>
            <AllRoutes>
                <Route path="/" element={<Home />} />
            </AllRoutes>
        </>
    )
}

export default Routes