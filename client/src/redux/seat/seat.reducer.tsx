import { SeatReducerProps } from "../../types";
import { BOOK_SEATS_ERROR, BOOK_SEATS_LOADING, BOOK_SEATS_SUCCESS, GET_ALL_SEATS_ERROR, GET_ALL_SEATS_LOADING, GET_ALL_SEATS_SUCCESS } from "./seat.actionTypes";

// Initial state for the seat reducer
const initialState: SeatReducerProps = {
    fetchLoading: false,
    updateLoading: false,
    bookLoading: false,
    allSeats: [],
    bookedSeats: []
}

// Seat reducer function
export const reducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case GET_ALL_SEATS_LOADING:
            return { ...state, fetchLoading: true }; // Set fetchLoading to true when loading all seats
        case GET_ALL_SEATS_SUCCESS:
            return { ...state, fetchLoading: false, allSeats: payload }; // Set fetchLoading to false and update allSeats with the loaded data
        case GET_ALL_SEATS_ERROR:
            return { ...state, fetchLoading: false }; // Set fetchLoading to false on error while loading all seats
        case BOOK_SEATS_LOADING:
            return { ...state, bookLoading: true }; // Set bookLoading to true when booking seats
        case BOOK_SEATS_SUCCESS:
            return { ...state, bookLoading: false, bookedSeats: payload }; // Set bookLoading to false and update bookedSeats with the booked seats data
        case BOOK_SEATS_ERROR:
            return { ...state, bookLoading: false }; // Set bookLoading to false on error while booking seats
        default:
            return state;
    }
}