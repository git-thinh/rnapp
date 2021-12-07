import React from "react"
import { Center, Box, HStack, Icon, NativeBaseProvider, CheckIcon } from "native-base"

export function Example() {
  return (
    <HStack space={1}>
      <Center w="40px" h="40px" bg="primary.400">
        <CheckIcon size="6" mt="0.5" color="white" />
      </Center>
      <Center w="40px" h="40px" bg="secondary.400">
        <Box
          _text={{
            fontWeight: "bold",
            fontSize: "lg",
            color: "white",
          }}
        >
          20
        </Box>
      </Center>
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
