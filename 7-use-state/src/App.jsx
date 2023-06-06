import { ChakraProvider, Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  //const [호출할 변수명, 업데이트할 변수명] = useState(초기값 넣어주기);
  const [name, setName] = useState('ABC');

  const onClickUpdate = () => {
    //setName(업데이트할 값을 넣어준다);
    setName('DEF');
  };

  return (
    <ChakraProvider>
      <Flex
        bgColor="red.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        {name}
        <Button ml={4} onClick={onClickUpdate}>
          Update
        </Button>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
