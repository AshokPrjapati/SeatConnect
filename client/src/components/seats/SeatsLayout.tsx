import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Box, Divider, Flex, Grid, Stack } from "@chakra-ui/react";

import Seat from "./Seat";
import SeatStatusIndicator from "./SeatStatusIndicator";

import { RootState } from "../../redux/store";
import { SeatProps } from "../../types";
import { wrap } from "framer-motion";

interface SeatsLayoutProps {
    maxH?: string;
    overflow?: string;
}

const SeatsLayout = ({ maxH, overflow }: SeatsLayoutProps) => {
    const { allSeats, bookedSeats } = useSelector((store: RootState) => store.seatsManager);

    // calculate total booked seats counts
    const bookedSeatCount = useMemo(() => {
        const bookedSeats = allSeats?.filter((seat: SeatProps) => seat.isBooked);
        return bookedSeats?.length || 0;
    }, [allSeats]);

    // calculate available booked seats counts
    const availbaleSeatCount = useMemo(() => {
        const availableSeats = allSeats?.filter((seat: SeatProps) => !seat.isBooked);
        return availableSeats?.length || 0;
    }, [allSeats]);



    return (
        <>
            <Stack
                px="1rem"
                pb="1rem"
                w={"max-content"}
                color="c_white"
                bg="c_purple"
                borderRadius="5px"
                boxShadow="0 0 10px rgb(0,0,0)"
                maxH={maxH || "auto"}
                overflow={overflow || "none"}
                rowGap={".5rem"}
            >
                <Stack gap=".5rem" position="sticky" top="0" zIndex={9} backgroundColor="c_purple">
                    <Flex
                        gap=".5rem"
                        justifyContent={"center"}
                        pt="1rem"
                    >
                        <SeatStatusIndicator bg="#c3c3c3" text="Booked" seatCount={bookedSeatCount} />
                        <SeatStatusIndicator bg="#B5E61D" text="Available" seatCount={availbaleSeatCount} />
                    </Flex>
                    {bookedSeats.length !== 0 && <SeatStatusIndicator bg="red" text="Recent Booked" seatCount={availbaleSeatCount} />}
                    <Divider />
                </Stack>

                <Grid
                    templateColumns={"repeat(7,1fr)"}
                    width={"max-content"}
                    gap=".5rem"
                >
                    {allSeats.map((seat: SeatProps) => (
                        <Seat key={seat._id} {...seat} />
                    ))}
                </Grid>
            </Stack >
        </>
    );
};

export default SeatsLayout;
