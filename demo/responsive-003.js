import React from 'react';
import { Text, NativeBaseProvider, Center } from 'native-base';
function BreakpointExample () {
  return (
    <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
      This is responsive text
    </Text>
  );
};

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BreakpointExample />
      </Center>
    </NativeBaseProvider>
  );
}