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
    setNum2(e.target.value);
  };

  const onClickSum = () => {
    //문자 값이 들어가지 않도록 설정하기
    if (isNaN(num1) || isNaN(num2)) {
      return;
    }
    //각 input값은 문자열로 들어오기 때문에 형변환 과정이 필요하다.
    setResult(parseInt(num1) + parseInt(num2));
  };

  //빼기
  const onClickSubtract = () => {
    if (isNaN(num1) || isNaN(num2)) {
      return;
    }
    setResult(parseInt(num1) - parseInt(num2));
  };

  //곱하기
  const onClickMultiply = () => {
    if (isNaN(num1) || isNaN(num2)) {
      return;
    }
    setResult(parseInt(num1) * parseInt(num2));
  };

  //나누기
  const onClickDivide = () => {
    if (isNaN(num1) || isNaN(num2)) {
      return;
    }
    setResult(parseInt(num1) / parseInt(num2));
  };

  return (
    <Box>
      <Flex alignItems="center">
        <Input value={num1} onChange={onChangeNum1} />
        <Input value={num2} onChange={onChangeNum2} ml={2} />
        {result && <Box ml={4}>{result}</Box>}
      </Flex>
      <Box mt={4}>
        <Button colorScheme="red" onClick={onClickSum}>
          더하기
        </Button>
        <Button ml={4} colorScheme="blue" onClick={onClickSubtract}>
          빼기
        </Button>
        <Button ml={4} colorScheme="green" onClick={onClickMultiply}>
          곱하기
        </Button>
        <Button ml={4} colorScheme="blue" onClick={onClickDivide}>
          나누기
        </Button>
      </Box>
    </Box>
  );
};

export default Calculator;
