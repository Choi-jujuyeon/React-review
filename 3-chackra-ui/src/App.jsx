import { Box, Button, Flex, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Flex>
        <Box>Hello REACT~~!~</Box>
        <Button>버튼</Button>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
