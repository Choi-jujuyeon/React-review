import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState();

  //콘솔창 -> target -> value 값 확인 가능
  const onChangeNum1 = e => {
    // console.log(e);
    setNum1(e.target.value);
  };

  const onChangeNum2 = e => {
    setNum1(e.target.value);
  };

  return (
    <Box>
      <Flex>
        <Input value={num1} onChange={onChangeNum1} />
        <Input value={num2} onChange={onChangeNum2} ml={2} />
        {result && <Box ml={4}>{result}</Box>}
      </Flex>
      <Box mt={4}>
        <Button colorScheme="red">더하기</Button>
        <Button ml={4} colorScheme="blue">
          빼기
        </Button>
        <Button ml={4} colorScheme="green">
          곱하기
        </Button>
        <Button ml={4} colorScheme="blue">
          나누기
        </Button>
      </Box>
    </Box>
  );
};

export default Calculator;
