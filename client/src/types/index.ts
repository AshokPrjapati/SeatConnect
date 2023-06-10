export interface SeatProps {
    _id:string,
    seatNumber:string,
    isBooked:boolean
}

export interface SeatReducerProps {
    fetchLoading: boolean,
    bookLoading: boolean,
    updateLoading: boolean,
    allSeats: SeatProps[],
    bookedSeats: SeatProps[],
}