import { Box, Flex, Text } from "@chakra-ui/react";

interface SeatStatusIndicatorProp {
    bg: string;
    text: string;
}

const SeatStatusIndicator = ({ bg, text }: SeatStatusIndicatorProp) => {
    return (
        <Flex
            justifyContent={"center"}
            alignItems="center"
            border="1px solid #023562"
            p={".3rem"}
            borderRadius="5px"
        >
            <Box backgroundColor={bg} w="2rem" h="2rem" borderRadius="5px"></Box>
            <Text ml={".5rem"}>{text}</Text>
        </Flex>
    );
};

export default SeatStatusIndicator;
