import { Dispatch } from "redux";
import { GET_ALL_SEATS_ERROR, GET_ALL_SEATS_LOADING, GET_ALL_SEATS_SUCCESS } from "./seat.actionTypes";
import axios from "axios";


export const getAllSeats = () => async (dispatch: Dispatch) => {
    dispatch({ type: GET_ALL_SEATS_LOADING });
    try {
        const res = await axios('/seat/get_all');
        const data = res.data;
        dispatch({ type: GET_ALL_SEATS_SUCCESS, payload: data.seats });
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ALL_SEATS_ERROR });
    }
}
