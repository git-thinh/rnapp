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
  NativeBaseProvider,
} from 'native-base';

function PseudoPropsUsage() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center flex={1} _dark={{bg:'coolGray.800'}} _light={{bg:'warmGray.50'}}>
      <Text fontSize="lg" display="flex" mb="20">
        The active color mode is{' '}
        <Text bold fontSize="lg">
          {colorMode}
        </Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
      <Button _light={{ bg: 'teal', _text: { color: 'white' } }} _dark={{ bg: 'amber' }}>Sample</Button>
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
