import { ChakraProvider, Flex } from '@chakra-ui/react';
import Three from './components/Three';

function App() {
  return (
    <ChakraProvider>
      <Flex
        bgColor="red.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Three />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
