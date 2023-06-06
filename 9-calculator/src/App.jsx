import { ChakraProvider, Flex } from '@chakra-ui/react';
import Calculator from './components/Calculator';

function App() {
  return (
    <ChakraProvider>
      <Flex
        bgColor="gray.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Calculator />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
