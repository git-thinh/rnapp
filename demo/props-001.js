import React from 'react';
import { Text as NBText, NativeBaseProvider, Center } from 'native-base';

const Text = (props) => {
  return <NBText m="2" {...props} />
}

function Component() {
  return (
    <>
      { /* font-size of `theme.fontSizes.2xl` */ }
      <Text fontSize="2xl" fontWeight="bold" >Thank You </Text>
      { /* text decoration `underline` */ }
      <Text textDecoration='underline'>Merci Beaucoup</Text>
      { /* font-size `'2em'` */ }
      { /* font-weight of `theme.fontWeights.semibold i.e. 600` */ }
      <Text fontWeight='bold'>Danke sehr </Text>
      { /* letter-spacing `0.1 em` */ }
      <Text letterSpacing="2xl" >Arigatou </Text>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
