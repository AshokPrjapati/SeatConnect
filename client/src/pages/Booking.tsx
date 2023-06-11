import { useCallback, useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import InputBox from "../components/booking/InputBox";
import SeatsLayout from "../components/seats/SeatsLayout";

import { RootState } from "../redux/store";
import { bookSeats, getAllSeats } from "../redux/seat/seat.action";

import UseToastMsg, { ToastType } from "../hooks/useToastMsg";
import { SeatProps } from "../types";

// Component for booking seats
export const Booking = () => {
    const { bookedSeats, allSeats } = useSelector(
        (store: RootState) => store.seatsManager
    );
    const dispatch: Dispatch<any> = useDispatch();
    const { Toast } = UseToastMsg();

    // Function to handle seat booking
    const handleBook = useCallback(
        (seatCount: number) => {
            if (seatCount && seatCount <= 7 && seatCount > 0) {
                dispatch(bookSeats(seatCount, Toast));
            } else
                Toast("Total seats must be less than 8 and at least 1", ToastType.error);
        },
        [dispatch, Toast]
    );

    useEffect(() => {
        if (!allSeats.length) dispatch(getAllSeats());
    }, [allSeats])

    return (
        // Booking component layout
        <Flex
            width={{ base: "90vw", md: "70vw" }}
            maxW={{ base: "95vw", md: "90vw" }}
            m="2rem auto"
            gap="2rem"
            alignItems="center"
            justifyContent={{ base: "center", md: "space-around" }}
            p="1rem"
            flexDir={{ base: "column", md: "row" }}
        >
            <Stack textAlign={{ base: "center", md: "left" }} w={"max-content"} m={"auto"}>
                {/* Input box for entering seat quantity */}
                <InputBox
                    actionLabel={"Book"}
                    placeholder="Enter Number of Seats"
                    action={handleBook}
                    label={"Enter the seat quantity"}
                />

                {/* Display recently booked seats */}
                {bookedSeats.length !== 0 && (
                    <>
                        <Text fontWeight={"bold"} pt={"1rem"}>
                            Recently Booked Seats:
                        </Text>
                        <Flex
                            wrap={"wrap"}
                            gap={".5rem"}
                            justifyContent={{ base: "center", md: "flex-start" }}
                        >
                            {/* Display each booked seat */}
                            {bookedSeats.map((seat: SeatProps) => (
                                <Box
                                    key={seat._id}
                                    p=".5rem .8rem"
                                    bg="c_green"
                                    borderRadius={".4rem"}
                                    color="c_white"
                                    fontWeight={"bold"}
                                >
                                    {seat.seatNumber}
                                </Box>
                            ))}
                        </Flex>
                    </>
                )}
            </Stack>

            {/* Component for displaying seat layout */}
            <Stack>
                <SeatsLayout maxH="80vh" overflow="auto" showLatestBooking={true} />
            </Stack>
        </Flex>
    );
};
