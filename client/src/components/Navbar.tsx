import { Button, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Flex
            w={"100%"}
            justifyContent={"space-between"}
            align={"center"}
            shadow={"xl"}
            bg={"c_white"}
            p={".8rem 2rem"}
        >
            <Flex fontSize={"1.5rem"} fontWeight={"bold"}>
                <Text color={"c_red"}>Seat</Text>
                <Text color={"c_purple"}>Connect</Text>
            </Flex>
            <Button size={"sm"} shadow={"2xl"} colorScheme="orange">Admin Panel</Button>
        </Flex>
    );
};

export default Navbar;
