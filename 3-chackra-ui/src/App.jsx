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
        {/* Box태그 == div 태그와 유사한 기능 */}

        <Box w={200} h={200} bgColor="yellow.100">
          Box1
        </Box>
        <Box w={200} h={200} bgColor="yellow.200">
          Box2
        </Box>
        <Box w={200} h={200} bgColor="yellow.300">
          Box3
        </Box>
        <Box w={200} h={200} bgColor="yellow.400">
          Box4
        </Box>
        <Box w={200} h={200} bgColor="yellow.500">
          Box5
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
