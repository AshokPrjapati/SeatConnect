import { useCallback, useRef } from "react";
import { Button, Input, InputGroup } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface InputBoxProps {
    label: string;
    action: (value: number) => void;
}

const InputBox = ({ label, action }: InputBoxProps) => {
    const { bookLoading } = useSelector(
        (store: RootState) => store.seatsManager
    );
    // Reference to the input element
    const inputRef = useRef<HTMLInputElement>(null);

    // Callback function to handle button click
    const handleClick = useCallback(() => {
        // Check if input value is not empty
        if (inputRef?.current?.value) {
            // Call the action function with the input value (converted to a number)
            action(Number(inputRef.current.value));
        }
    }, [action]);

    return (
        <InputGroup w={"max-content"} position="relative">
            <Input
                pr="4.5rem"
                type={"number"}
                placeholder="Enter Number of Seats"
                _placeholder={{ opacity: 0.8, color: "c_purple" }}
                textAlign="center"
                focusBorderColor="c_red"
                ref={inputRef}
            />
            <Button
                colorScheme="orange"
                bg="c_red"
                borderRadius="0 .4rem .4rem 0"
                position="absolute"
                right="0"
                top="0"
                cursor="pointer"
                zIndex={9}
                border="1px solid"
                borderColor="c_red"
                onClick={handleClick}
                isLoading={bookLoading}
                loadingText={"Booking..."}
                disabled={bookLoading}
            >
                {label}
            </Button>
        </InputGroup>
    );
};

export default InputBox;
