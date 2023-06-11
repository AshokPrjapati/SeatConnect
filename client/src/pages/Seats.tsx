import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { Box, Heading, Spinner, Stack } from "@chakra-ui/react";

import { RootState } from "../redux/store";
import { getAllSeats } from "../redux/seat/seat.action";

import SeatsLayout from "../components/seats/SeatsLayout";

const Seats = () => {
    const { fetchLoading, fetchError } = useSelector(
        (store: RootState) => store.seatsManager
    );

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(getAllSeats());
    }, [dispatch]);

    return (
        <Stack w={"max-content"} m={"2rem auto"} gap={"1rem"}>
            <Heading textAlign={"center"} fontSize={"3xl"} color="c_red">
                Status of Seats
            </Heading>
            <Box textAlign="center">
                {fetchLoading ? (
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        size="xl"
                        color="c_red"
                    />
                ) : fetchError ? (
                    <h1>Oops! Something went wrong</h1>
                ) : (
                    <SeatsLayout maxH="80vh" overflow="auto" />
                )}
            </Box>
        </Stack>
    );
};

export default Seats;
