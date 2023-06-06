import { Box, Button, Flex, ChakraProvider } from '@chakra-ui/react';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import D from './components/D';
import E from './components/E';

function App() {
  return (
    <ChakraProvider>
      <Flex
        bgColor="gray.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        {/* Box태그 == div 태그와 유사한 기능 */}

        <A />
        <B />
        <C />
        <D />
        <E />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
