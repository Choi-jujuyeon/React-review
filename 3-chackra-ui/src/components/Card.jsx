import { Box } from '@chakra-ui/react';

const Card = props => {
  console.log(props);

  return (
    <Box w={200} h={200} bgColor={props.bgColor}>
      {props.name} Card
    </Box>
  );
};
export default Card;
