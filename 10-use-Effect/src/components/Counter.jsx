import { Box, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('useEffect 실행');

    return () => {
      console.log('컴포넌트 제거');
    };
  }, []);
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
