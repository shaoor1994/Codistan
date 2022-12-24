import {
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  StatusBar,
  HStack,
  MaterialIcons,
  Box,
} from "native-base";

function AppBar() {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        bg="violet.800"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="340"
      >
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon size="sm" as={MaterialIcons} name="menu" color="white" />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="bell" size="sm" color="white" />
            }
          />
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="sm" color="white" />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}

export default HeaderCustom = () => {
  return (
    <NativeBaseProvider>
      <Center>
        <AppBar />
      </Center>
    </NativeBaseProvider>
  );
};
