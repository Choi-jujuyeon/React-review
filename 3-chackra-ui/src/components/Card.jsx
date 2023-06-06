import { Box } from '@chakra-ui/react';

const Card = props => {
  console.log(props);

  return (
    <Box w={200} h={200} bgColor="yellow.100">
      A Card
    </Box>
  );
};
export default Card;
