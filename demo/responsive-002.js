import React from 'react';
import { NativeBaseProvider, Center } from 'native-base';
function BreakpointExample () {
  return (
    <Center bg="emerald.400" _text={{color: "white"}} rounded="xl" w={[24, 48, 72]} h={24}>
      This is a box
    </Center>
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