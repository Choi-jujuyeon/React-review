import { Box, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Three = () => {
  const [num, setNum] = useState(0);

  const onClickPlus = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    if (num !== 0 && num % 3 === 0) {
      alert('3의 배수입니다!');
    }
  }, [num]);

  return (
    <Box>
      {num}
      <Button ml={4} colorScheme="red" onClick={onClickPlus}>
        +
      </Button>
    </Box>
  );
};
export default Three;
