import { SeatReducerProps } from "../../types";
import { BOOK_SEATS_ERROR, BOOK_SEATS_LOADING, BOOK_SEATS_SUCCESS, GET_ALL_SEATS_ERROR, GET_ALL_SEATS_LOADING, GET_ALL_SEATS_SUCCESS, RESET_SEATS_ERROR, RESET_SEATS_LOADING, RESET_SEATS_SUCCESS } from "./seat.actionTypes";

// Initial state for the seat reducer
const initialState: SeatReducerProps = {
    fetchLoading: false,
    fetchError: false,
    updateLoading: false,
    updateError: false,
    bookLoading: false,
    bookError: false,
    resetLoading: false,
    resetError: false,
    allSeats: [],
    bookedSeats: []
}

// Seat reducer function
export const reducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case GET_ALL_SEATS_LOADING:
            return { ...state, fetchLoading: true, fetchError: false }; // Set fetchLoading to true when loading all seats
        case GET_ALL_SEATS_SUCCESS:
            return { ...state, fetchLoading: false, allSeats: payload, fetchError: false }; // Set fetchLoading to false and update allSeats with the loaded data
        case GET_ALL_SEATS_ERROR:
            return { ...state, fetchLoading: false, fetchError: true }; // Set fetchLoading to false on error while loading all seats
        case BOOK_SEATS_LOADING:
            return { ...state, bookLoading: true, bookError: false }; // Set bookLoading to true when booking seats
        case BOOK_SEATS_SUCCESS:
            return { ...state, bookLoading: false, bookedSeats: payload, bookError: false }; // Set bookLoading to false and update bookedSeats with the booked seats data
        case BOOK_SEATS_ERROR:
            return { ...state, bookLoading: false, bookError: true }; // Set bookLoading to false on error while booking seats
        case RESET_SEATS_LOADING:
            return { ...state, resetLoading: true, resetError: false };
        case RESET_SEATS_SUCCESS:
            return { ...state, ...initialState };
        case RESET_SEATS_ERROR:
            return { ...state, resetLoading: false, resetError: true };
        default:
            return state;
    }
}