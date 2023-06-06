import { ChakraProvider, Flex } from '@chakra-ui/react';
import Counter from './components/Counter';
import Another from './components/Another';

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
        <Another />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
