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

        <Card test="test" />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
