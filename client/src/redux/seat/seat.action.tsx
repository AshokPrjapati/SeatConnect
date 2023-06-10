import { Dispatch } from "redux";
import { GET_ALL_SEATS_LOADING, GET_ALL_SEATS_SUCCESS } from "./seat.actionTypes";
import axios from "axios";


export const getAllSeats = () => async (dispatch: Dispatch) => {
    dispatch({ type: GET_ALL_SEATS_LOADING });
    try {
        const res = await axios('/seat/get_all');
        const seats = res.data;
        console.log(seats);
        dispatch({ type: GET_ALL_SEATS_SUCCESS, payload: seats });
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ALL_SEATS_LOADING });
    }
}
