import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return <Box>{count}</Box>;
};

export default Counter;
