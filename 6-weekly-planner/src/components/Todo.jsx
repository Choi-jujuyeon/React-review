import { Box, Flex } from '@chakra-ui/react';

const Todo = props => {
  return (
    <Box w={200} h={200} bgColor="white" mx={4} rounded="3xl">
      <Flex
        bgColor={props.bgColor}
        h="20%"
        roundedTop="3xl"
        alignItems="center"
        pl={4}
      >
        {props.day}
      </Flex>

      <Flex p={4}>
        {props.todos.map((v, i) => {
          return <Box key={i}>{v}</Box>;
        })}
      </Flex>
    </Box>
  );
};

export default Todo;
