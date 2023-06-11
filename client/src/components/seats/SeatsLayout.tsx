import { useSelector } from "react-redux";
import { Box, Divider, Flex, Grid, Stack } from "@chakra-ui/react";

import Seat from "./Seat";
import SeatStatusIndicator from "./SeatStatusIndicator";

import { RootState } from "../../redux/store";
import { SeatProps } from "../../types";

interface SeatsLayoutProps {
    maxH?: string;
    overflow?: string;
}

const SeatsLayout = ({ maxH, overflow }: SeatsLayoutProps) => {
    const { allSeats } = useSelector((store: RootState) => store.seatsManager);

    return (
        <>
            <Stack
                px="1rem"
                pb="1rem"
                gap="1rem"
                w={"max-content"}
                color="c_white"
                bg="c_purple"
                borderRadius="5px"
                boxShadow="0 0 10px rgb(0,0,0)"
                maxH={maxH || "auto"}
                overflow={overflow || "none"}
            >
                <Box position="sticky" top="0" zIndex={9}>
                    <Flex
                        fontWeight="bold"
                        gap=".5rem"
                        justifyContent={"center"}
                        backgroundColor="c_purple"
                        py="1rem"
                    >
                        <SeatStatusIndicator bg="#c3c3c3" text="Booked" />
                        <SeatStatusIndicator bg="#B5E61D" text="Available" />
                    </Flex>
                    <Divider />
                </Box>

                <Grid
                    templateColumns={"repeat(7,1fr)"}
                    width={"max-content"}
                    gap=".5rem"
                >
                    {allSeats.map((seat: SeatProps) => (
                        <Seat key={seat._id} {...seat} />
                    ))}
                </Grid>
            </Stack>
        </>
    );
};

export default SeatsLayout;
