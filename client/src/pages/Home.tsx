import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { MdEventAvailable } from "react-icons/md";

const Home = () => {
    return (
        <>
            <Box
                backgroundImage={"/images/bg3.png"}
                width={"100%"}
                height={"50vh"}
                objectFit={"contain"}
                backgroundRepeat={"no-repeat"}
            >
                <Flex
                    align={"center"}
                    justify={"center"}
                    p={"1rem"}
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    h="inherit"
                    w="100vw"
                >
                    <Flex fontSize={"2rem"} fontWeight={"bold"} textAlign={"center"} flexDir={{ base: "column", md: "row" }}>
                        <Text color={"c_white"} mr=".5rem">
                            Welcome to
                        </Text>
                        <Text color={"c_red"}>Seat</Text>
                        <Text color={"c_white"}>Connect</Text>
                    </Flex>
                </Flex>
            </Box>
            <Stack
                shadow={"2xl"}
                w={"80%"}
                top={"48vh"}
                left={"10%"}
                height={"40vh"}
                borderRadius={"1rem"}
                position={"absolute"}
                backgroundImage={"/images/bg1.png"}
                justify={"center"}
                alignItems={"center"}
                gap="2rem"
                boxShadow={"0 0 40px rgb(0,0,0)"}
            >
                <Flex
                    w={"max-content"}
                    m={"auto"}
                    gap={"2rem"}
                    justify={"center"}
                    h={"100%"}
                    alignItems={"center"}
                    flexDir={{ base: "column", md: "row" }}
                    p="1rem"
                >
                    <Button size={"lg"} colorScheme="orange">
                        Book Seats
                    </Button>
                    <Button
                        size={"lg"}
                        leftIcon={<MdEventAvailable />}
                        colorScheme="facebook"
                    >
                        Check Seats Availability
                    </Button>
                </Flex>
            </Stack>
        </>
    );
};

export default Home;
