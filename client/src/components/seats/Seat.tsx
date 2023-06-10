import { Image, Stack, Text } from "@chakra-ui/react";
import { SeatProps } from "../../types";

const Seat = ({ seatNumber, isBooked }: SeatProps) => {
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
                    cursor: "pointer"
                }}
                transition=".3s ease-in-out"
            >
                <Image
                    width={"2rem"}
                    src={isBooked ? "/images/booked.png" : "/images/unbooked.png"}
                    alt={isBooked ? "B" : "A"}
                />
                <Text>{seatNumber}</Text>
            </Stack>
        </>
    );
};

export default Seat;
