import { useCallback } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button, Flex, Text } from "@chakra-ui/react";

import { RootState } from "../redux/store";
import { resetAllSeats } from "../redux/seat/seat.action";

import UseToastMsg from "../hooks/useToastMsg";

const Navbar = () => {
    const { Toast } = UseToastMsg();
    const { resetLoading } = useSelector(
        (store: RootState) => store.seatsManager
    );
    const dispatch: Dispatch<any> = useDispatch();

    // Callback function to handle the reset button click
    const handleReset = useCallback(() => {
        dispatch(resetAllSeats(Toast));
    }, [dispatch, Toast]);

    return (
        <Flex
            w={"100%"}
            justifyContent={"space-between"}
            align={"center"}
            shadow={"xl"}
            bg={"c_purple"}
            p={".8rem 2rem"}
            position={"sticky"}
            top={0}
            zIndex={99}
        >
            {/* Logo */}
            <Flex as={Link} to="/" fontSize={"1.5rem"} fontWeight={"bold"}>
                <Text color={"c_red"}>Seat</Text>
                <Text color={"c_white"}>Connect</Text>
            </Flex>

            {/* Reset button */}
            <Button
                isLoading={resetLoading}
                loadingText="...resetting"
                size={"sm"}
                shadow={"2xl"}
                colorScheme="orange"
                onClick={handleReset}
            >
                Reset
            </Button>
        </Flex>
    );
};

export default Navbar;
