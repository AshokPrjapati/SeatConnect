import { Button, Flex, Text } from "@chakra-ui/react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { Dispatch } from "redux";
import { resetAllSeats } from "../redux/seat/seat.action";
import UseToastMsg from "../hooks/useToastMsg";

const Navbar = () => {
    const { Toast } = UseToastMsg();
    const { resetLoading, resetError } = useSelector(
        (store: RootState) => store.seatsManager
    );
    const dispatch: Dispatch<any> = useDispatch();

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
            <Flex as={Link} to="/" fontSize={"1.5rem"} fontWeight={"bold"}>
                <Text color={"c_red"}>Seat</Text>
                <Text color={"c_white"}>Connect</Text>
            </Flex>
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
