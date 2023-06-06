import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const min = () => {
    setCount(count - 1);
  };

  return (
    <Box>
      <Button onClick={min} mr={4} colorScheme="blue">
        -
      </Button>
      {count}
      <Button onClick={plus} ml={4} colorScheme="red">
        +
      </Button>
    </Box>
  );
};

export default Counter;
