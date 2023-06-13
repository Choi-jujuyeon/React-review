import { ChakraProvider, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import ToDoList from './components/ToDoList';

function App() {
  const [toDoArray, setToDoArray] = useState([
    { title: '🫡9시 수업 지각 안하기', isDone: false },
    { title: '🫡9시 수업 지각 안하기', isDone: true },
  ]);

  return (
    <ChakraProvider>
      <Flex
        bgColor="gray.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <ToDoList toDoArray={toDoArray} setToDoArray={setToDoArray} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
