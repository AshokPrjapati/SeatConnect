import { Box } from "@chakra-ui/react"
import InputBox from "../components/booking/InputBox"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { bookSeats } from "../redux/seat/seat.action"
import UseToastMsg, { ToastType } from "../hooks/useToastMsg"

export const Booking = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { Toast } = UseToastMsg();

    const handleBook = useCallback((seatCount: number) => {
        if (seatCount && seatCount < 7 && seatCount > 0) {
            dispatch(bookSeats(seatCount, Toast))
        } else Toast("Total seats must be less than 8 and atleast 1", ToastType.error);
    }, [dispatch, Toast]);

    return (
        <Box w="max-content" m="1rem auto">
            <InputBox label={"Book"} action={handleBook} />
        </Box>
    )
}
