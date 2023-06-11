import { Box, Flex, Stack, Text } from "@chakra-ui/react";

interface SeatStatusIndicatorProp {
    bg: string;
    text: string;
    seatCount?: number
}

const SeatStatusIndicator = ({ bg, text, seatCount }: SeatStatusIndicatorProp) => {
    return (
        <Flex
            justifyContent={"center"}
            alignItems="center"
            border="1px solid #023562"
            p={".3rem"}
            borderRadius="5px"
            fontWeight={500}
        >
            <Box backgroundColor={bg} w="2rem" h="2rem" borderRadius="5px"></Box>
            <Flex>
                <Text ml={".5rem"}>{text}:</Text>
                <Text ml={".5rem"}>{seatCount || ""}</Text>
            </Flex>
        </Flex>
    );
};

export default SeatStatusIndicator;
