import { Link } from "react-router-dom";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { MdEventAvailable } from "react-icons/md";

// Home component for the landing page
const Home = () => {
    return (
        <>
            {/* Background image section */}
            <Box
                backgroundImage={"/images/bg3.png"}
                width={"100%"}
                height={"50vh"}
                objectFit={"contain"}
                backgroundRepeat={"no-repeat"}
            >
                {/* Overlay section */}
                <Flex
                    align={"center"}
                    justify={"center"}
                    p={"1rem"}
                    style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                    h="inherit"
                    w="100vw"
                >
                    {/* Text section */}
                    <Flex
                        fontSize={"2rem"}
                        fontWeight={"bold"}
                        textAlign={"center"}
                        flexDir={{ base: "column", md: "row" }}
                    >
                        <Text
                            color={"c_white"}
                            mr=".5rem"
                            filter="drop-shadow(0 0 5px black)"
                        >
                            Welcome to
                        </Text>
                        <Text color={"c_red"} filter="drop-shadow(0 0 5px black)">
                            Seat
                        </Text>
                        <Text color={"c_white"} filter="drop-shadow(0 0 5px black)">
                            Connect
                        </Text>
                    </Flex>
                </Flex>
            </Box>

            {/* Button section */}
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
                    {/* Button for booking seats */}
                    <Button
                        as={Link}
                        to="/booking"
                        size={"lg"}
                        colorScheme="orange"
                        boxShadow="0 10px 10px rgba(2,2,2,.8)"
                        _hover={{
                            boxShadow: "0 10px 20px rgba(2,2,2,.8)",
                            transform: "scale(105%)"
                        }}
                        transition=".3s ease-in-out"
                    >
                        Book Seats
                    </Button>

                    {/* Button for checking seat availability */}
                    <Button
                        as={Link}
                        to="/seats"
                        size={"lg"}
                        leftIcon={<MdEventAvailable />}
                        colorScheme="facebook"
                        boxShadow="0 10px 10px rgba(2,2,2,.8)"
                        _hover={{
                            boxShadow: "0 10px 20px rgba(2,2,2,.8)",
                            transform: "scale(105%)"
                        }}
                        transition=".3s ease-in-out"
                    >
                        Check Seats Availability
                    </Button>
                </Flex>
            </Stack>
        </>
    );
};

export default Home;
