import { Box, Button, Flex, ChakraProvider } from '@chakra-ui/react';
import Card from './components/Card';

//cardData를 하나의 배열로 저장해준다.
//한 행 각각을 v라고 생각하면 된다.
const cardData = [
  { bgColor: 'blue.100', name: 'A' },
  { bgColor: 'blue.200', name: 'B' },
  { bgColor: 'blue.300', name: 'C' },
  { bgColor: 'blue.400', name: 'D' },
  { bgColor: 'blue.500', name: 'E' },
];

function App() {
  return (
    <ChakraProvider>
      <Flex
        bgColor="gray.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        {/* Box태그 == div 태그와 유사한 기능 */}

        {cardData.map((v, i) => {
          return <Card key={i} bgColor={v.bgColor} name={v.name} />;
        })}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
