import axios from "axios";
import { Dispatch } from "redux";

import { BOOK_SEATS_ERROR, BOOK_SEATS_LOADING, BOOK_SEATS_SUCCESS, GET_ALL_SEATS_ERROR, GET_ALL_SEATS_LOADING, GET_ALL_SEATS_SUCCESS } from "./seat.actionTypes";
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
export const bookSeats = (seatsCount: number, Toast: any) => async (dispatch: Dispatch) => {
    dispatch({ type: BOOK_SEATS_LOADING });
    try {
        const res = await axios.post("/seat/book", { seatsCount });
        const data = res.data;
        dispatch({ type: BOOK_SEATS_SUCCESS, payload: data.bookedSeats });
        Toast("Seats booked successfully", ToastType.success);
    } catch (error) {
        console.log(error);
        dispatch({ type: BOOK_SEATS_ERROR });
        Toast("Oops! something went wrong", ToastType.error);
    }
};
