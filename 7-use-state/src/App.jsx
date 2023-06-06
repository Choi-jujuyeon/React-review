import { ChakraProvider, Flex } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Flex
        bgColor="red.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        Hello REACT~!~
      </Flex>
    </ChakraProvider>
  );
}

export default App;
