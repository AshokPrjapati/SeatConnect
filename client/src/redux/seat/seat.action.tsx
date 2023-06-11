import axios from "axios";
import { Dispatch } from "redux";

import { BOOK_SEATS_ERROR, BOOK_SEATS_LOADING, BOOK_SEATS_SUCCESS, GET_ALL_SEATS_ERROR, GET_ALL_SEATS_LOADING, GET_ALL_SEATS_SUCCESS, RESET_SEATS_ERROR, RESET_SEATS_LOADING, RESET_SEATS_SUCCESS } from "./seat.actionTypes";
import { ToastType } from "../../hooks/useToastMsg";

// Action creator to fetch all seats
export const getAllSeats = () => async (dispatch: Dispatch) => {
    dispatch({ type: GET_ALL_SEATS_LOADING });
    try {
        const res = await axios("/seat/get_all");
        const data = res.data;
        dispatch({ type: GET_ALL_SEATS_SUCCESS, payload: data.seats });
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ALL_SEATS_ERROR });
    }
};

// Action creator to book seats
export const bookSeats = (seatsCount: number, Toast: any) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: BOOK_SEATS_LOADING });
    try {
        const res = await axios.post("/seat/book", { seatsCount });
        const data = res.data;
        dispatch(getAllSeats());
        dispatch({ type: BOOK_SEATS_SUCCESS, payload: data.bookedSeats });
        Toast("Seats booked successfully", ToastType.success);
    } catch (error: any) {
        console.log(error);
        dispatch({ type: BOOK_SEATS_ERROR });
        Toast(error?.response?.data?.message || "Oops! something went wrong", ToastType.error);
    }
};

// Action creator to reset all seats
export const resetAllSeats = (Toast: any) => async (dispatch: Dispatch) => {
    dispatch({ type: RESET_SEATS_LOADING });
    try {
        await axios("/seat/reset");
        dispatch({ type: RESET_SEATS_SUCCESS });
        Toast("All seats are reseted to unbooked", ToastType.success);
    } catch (error) {
        console.log(error);
        dispatch({ type: RESET_SEATS_ERROR });
        Toast(error?.response?.data?.message || "Oops! something went wrong", ToastType.error);
    }
};
