import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SeatsLayout from "../components/seats/SeatsLayout"
import { RootState } from "../redux/store"
import { Dispatch } from "redux"
import { getAllSeats } from "../redux/seat/seat.action"
import { Heading, Stack } from "@chakra-ui/react"

const Seats = () => {
    const { allSeats } = useSelector((store: RootState) => store.seatsManager);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(getAllSeats());
    }, [dispatch]);

    return (
        <Stack w={"max-content"} m={"2rem auto"} gap={"1rem"}>
            <Heading textAlign={"center"} fontSize={"3xl"} color="c_red">Status of Seats</Heading>
            {allSeats.length ? <SeatsLayout maxH={"80vh"} overflow="auto" /> : <h1>Loading...</h1>}
        </Stack >
    )
}

export default Seats