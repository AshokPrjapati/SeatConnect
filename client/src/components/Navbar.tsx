import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Flex
            w={"100%"}
            justifyContent={"space-between"}
            align={"center"}
            shadow={"xl"}
            bg={"c_purple"}
            p={".8rem 2rem"}
        >
            <Flex as={Link} to="/" fontSize={"1.5rem"} fontWeight={"bold"}>
                <Text color={"c_red"}>Seat</Text>
                <Text color={"c_white"}>Connect</Text>
            </Flex>
            <Button size={"sm"} shadow={"2xl"} colorScheme="orange">Admin Panel</Button>
        </Flex>
    );
};

export default Navbar;
