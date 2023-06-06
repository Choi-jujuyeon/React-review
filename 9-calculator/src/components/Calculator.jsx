import { Box, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';
const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState();

  return (
    <Box>
      <Flex>
        <Input />
        <Input ml={2} />
      </Flex>
    </Box>
  );
};

export default Calculator;
