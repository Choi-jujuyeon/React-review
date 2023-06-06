import { ChakraProvider, Flex } from '@chakra-ui/react';
import Counter from './components/Counter';

function App() {
  return (
    <ChakraProvider>
      <Flex
        bgColor="gray.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Counter />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
