import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { Box, Heading, Spinner, Stack } from "@chakra-ui/react";

import { RootState } from "../redux/store";
import { getAllSeats } from "../redux/seat/seat.action";

import SeatsLayout from "../components/seats/SeatsLayout";

const Seats = () => {
    // Select necessary data from the Redux store
    const { fetchLoading, fetchError } = useSelector(
        (store: RootState) => store.seatsManager
    );

    const dispatch: Dispatch<any> = useDispatch();

    // Memoized callback function to dispatch the action
    const getSeats = useCallback(() => {
        dispatch(getAllSeats());
    }, [dispatch]);

    // Fetch seats when the component mounts or the getSeats function changes
    useEffect(() => {
        getSeats();
    }, [getSeats]);

    return (
        <Stack w={"max-content"} m={"2rem auto"} gap={"1rem"}>
            <Heading textAlign={"center"} fontSize={"3xl"} color="c_red">
                Status of Seats
            </Heading>
            <Box textAlign="center">
                {fetchLoading ? (
                    // Show a spinner while fetching
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        size="xl"
                        color="c_red"
                    />
                ) : fetchError ? (
                    // Show an error message if there's an error
                    <h1>Oops! Something went wrong</h1>
                ) : (
                    // Render the seats layout
                    <SeatsLayout maxH="80vh" overflow="auto" showLatestBooking={false} />
                )}
            </Box>
        </Stack>
    );
};

export default Seats;
