import React from "react"
import {
  Circle,
  Square,
  Box,
  HStack,
  Icon,
  Center,
  NativeBaseProvider, CheckIcon
} from "native-base"

export function Example() {
  return (
    <HStack space={3}>
      <Circle size={98} bg="secondary.400">
        <CheckIcon size="8" mt="0.5" color="white" />
      </Circle>
      <Square size="lg" bg="primary.400">
        <Box
          _text={{
            fontWeight: "bold",
            fontSize: "lg",
            color: "white",
          }}
        >
          20
        </Box>
      </Square>
    </HStack>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
