import React from 'react';
import {
  Heading,
  useColorMode,
  useColorModeValue,
  Button,
  HStack,
  Avatar,
  Center,
  Text,
  NativeBaseProvider,FormControl,Input,Stack,ArrowForwardIcon
} from 'native-base';

function PseudoPropsUsage() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center flex={1} _dark={{ bg: 'coolGray.800' }} _light={{ bg: 'warmGray.50' }}>
      <Text fontSize="lg" display="flex" mb="20">
        The active color mode is{' '}
        <Text bold fontSize="lg">
          {colorMode}
        </Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
      <Button m="3" _light={{ bg: 'indigo', _text: { color: 'white' } }} _dark={{ bg: 'amber' }}>Sample</Button>

      <Stack space="4">
        <FormControl>
          <Input variant="filled" placeholder="Chat Room ID" />
        </FormControl>
        <Button
          colorScheme="indigo"
          endIcon={<ArrowForwardIcon size="4" />}
        >
          Join In
        </Button>
      </Stack>
    </Center>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <PseudoPropsUsage />
    </NativeBaseProvider>
  );
}
