import { useCallback } from "react"
import { Dispatch } from "redux"
import { useDispatch, useSelector } from "react-redux"

import { Spinner, Stack } from "@chakra-ui/react"

import InputBox from "../components/booking/InputBox"

import { RootState } from "../redux/store"
import { bookSeats } from "../redux/seat/seat.action"

import UseToastMsg, { ToastType } from "../hooks/useToastMsg"
import SeatsLayout from "../components/seats/SeatsLayout"

export const Booking = () => {
    const { bookLoading, bookError, bookedSeats } = useSelector((store: RootState) => store.seatsManager)
    const dispatch: Dispatch<any> = useDispatch();
    const { Toast } = UseToastMsg();

    const handleBook = useCallback((seatCount: number) => {
        if (seatCount && seatCount < 7 && seatCount > 0) {
            dispatch(bookSeats(seatCount, Toast))
        } else Toast("Total seats must be less than 8 and atleast 1", ToastType.error);
    }, [dispatch, Toast]);

    return (
        <Stack w="max-content" m="1rem auto" gap="1rem" alignItems="center">
            <InputBox label={"Book"} action={handleBook} />
            <Stack>
                {bookLoading ?
                    // Show a spinner while booking
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        size="xl"
                        color="c_red"
                    />
                    : bookError ? <h1>Oops! something went wrong</h1>
                        : bookedSeats.length ? <SeatsLayout />
                            : null
                }
            </Stack>
        </Stack>

    )
}
