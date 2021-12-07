import React from "react"
import {
  useColorMode,
  useColorModeValue,
  Center, Box, HStack,VStack, NativeBaseProvider, AspectRatio, Image, Text, Stack, MoreIcon, Heading,
  FormControl, Input, Radio, Checkbox, Divider, Button, AddIcon
} from "native-base"

export function Example() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box alignItems="flex-start" p="8">
      <VStack alignItems="flex-start" space="5">
        <FormControl>
          <FormControl.Label mb="3">What's your event called?</FormControl.Label>
          <Input placeholder="Event's Name" />
        </FormControl>
        <FormControl>
          <FormControl.Label mb="3">When is your Event?</FormControl.Label>
          <Radio.Group nativeID="patani" name="day_night">
            <VStack space="3" alignItems="flex-start">
              <Radio value="day">Day</Radio>
              <Radio value="night">Night</Radio>
            </VStack>
          </Radio.Group>
        </FormControl>
        <Divider />
        <Checkbox size="sm" value="tnc" justifyContent="center" mb="4">
          I agree to Terms and conditions
        </Checkbox>
      </VStack>
      <Button mt="2" endIcon={<AddIcon size="3" />}>Create Event</Button>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
        <Example />
    </NativeBaseProvider>
  )
}
