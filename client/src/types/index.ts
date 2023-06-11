export interface SeatProps {
    _id:string,
    seatNumber:string,
    isBooked:boolean
}

export interface SeatReducerProps {
    fetchLoading: boolean,
    fetchError: boolean,
    bookLoading: boolean,
    bookError: boolean,
    updateLoading: boolean,
    updateError: boolean,
    resetLoading: boolean,
    resetError: boolean,
    allSeats: SeatProps[],
    bookedSeats: SeatProps[],
}