import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Three = () => {
  const [num, setNum] = useState(0);

  const onClickPlus = () => {
    setNum(num + 1);
  };

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
