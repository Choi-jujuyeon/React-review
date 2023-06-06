import { Box, Button, Flex, ChakraProvider } from '@chakra-ui/react';
import Card from './components/Card';
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

        <Card bgColor="yellow.100" name="A" />
        <Card bgColor="yellow.200" name="B" />
        <Card bgColor="yellow.300" name="C" />
        <Card bgColor="yellow.400" name="D" />
        <Card bgColor="yellow.500" name="E" />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
