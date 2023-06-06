import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  return (
    <Box>
      {count}

      <Button ml={4} onClick={onClickPlus} colorScheme="red">
        +
      </Button>
    </Box>
  );
};
export default Counter;
