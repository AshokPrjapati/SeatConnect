import { Image, Stack, Text } from "@chakra-ui/react";
import { SeatProps } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type SafeSeatProps = SeatProps & { showLatestBooking?: boolean };

const Seat = ({ seatNumber, isBooked, showLatestBooking }: SafeSeatProps) => {
    const { bookedSeats } = useSelector((store: RootState) => store.seatsManager);
    let isPresent;

    if (showLatestBooking) {
        isPresent = bookedSeats?.some(
            (seat: SeatProps) => seat.seatNumber === seatNumber
        );
    }

    return (
        <>
            <Stack
                textAlign={"center"}
                border="1px solid"
                borderRadius="5px"
                p=".2rem"
                fontWeight={"600"}
                userSelect="none"
                _hover={{
                    bg: "#fff",
                    color: "#000",
                    cursor: "pointer",
                }}
                transition=".3s ease-in-out"
            >
                <Image
                    width={"2rem"}
                    src={
                        isPresent
                            ? "/images/latestBooked.png"
                            : isBooked
                                ? "/images/booked.png"
                                : "/images/unbooked.png"
                    }
                    alt={isBooked ? "B" : "A"}
                />
                <Text>{seatNumber}</Text>
            </Stack>
        </>
    );
};

export default Seat;
