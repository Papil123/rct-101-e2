import React from "react";
import { Tag ,Text,Image,Box,Stack,Heading,TagLabel, Flex} from "@chakra-ui/react";

const Product = (props) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  let card= props.card
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={card.imageSrc} />
      <Flex justifyContent='space-between' > <Text data-cy="product-category">{card.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{card.gender}</TagLabel>
      </Tag></Flex>
      
      <Heading data-cy="product-title">{card.title}</Heading>
      <Box data-cy="product-price">{card.price}</Box>
    </Stack>
  );
};

export default Product;
