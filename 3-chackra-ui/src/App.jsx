import { Box, Button, Flex, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Flex
        bgColor="gray.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box>Hello REACT~~!~</Box>
        <Button ml={4} colorScheme="purple">
          버튼
        </Button>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
