import React from "react"
import {
  useColorMode,
  useColorModeValue,
  Center, Box, HStack, VStack, NativeBaseProvider, AspectRatio, Image, Text, Stack, MoreIcon, Heading,
  FormControl, Input, Radio, Checkbox, Divider, Button, AddIcon
} from "native-base"

export function Example() { 
  const sidebarItems = [];

  const DashboardTitle = () => { 
    return (<></>);
  };

  const UserProfile = () => { 
    return (<></>);
  };

  const DashboardTable = () => { 
    return (<></>);
  };
      
  return (
    <Center flex={1} p="4">
      <Stack
        m="4"
        w="100%"
        h="100%"
        direction={{ base: "column", md: "row" }}
        rounded="xl"
      >
        <VStack
          space={{ base: "2", md: "4" }}
          flex={{ base: 0, md: 1 }}
          p="4"
          bg="blueGray.500"
        >
          { }
          <VStack display={{ base: "none", md: "flex" }} space="6" mt="8">
            {sidebarItems.map((sidebarItem) => {
              return (
                { sidebarItem }
              );
            })}
          </VStack>
        </VStack>
        <Box flex={{ base: 1, md: 3 }} bg="blueGray.50">
          <VStack px="8" my="6" space="6">
            <DashboardTitle />
            <HStack mt="4" space="4">
              <UserProfile />
              <VStack flex={1}>
                <DashboardTable />
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Stack>
    </Center>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Example />
    </NativeBaseProvider>
  )
}
