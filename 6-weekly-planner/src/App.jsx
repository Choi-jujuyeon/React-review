import { Box, Flex, ChakraProvider } from '@chakra-ui/react';
import data from './data.json';
import Todo from './components/Todo';

function App() {
  return (
    <ChakraProvider>
      <Flex
        bgColor="red.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        {data.map((v, i) => {
          return (
            <Todo key={i} day={v.day} bgColor={v.bgColor} todos={v.todos} />
          );
        })}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
