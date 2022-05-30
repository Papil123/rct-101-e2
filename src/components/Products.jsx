import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Flex, Grid } from "@chakra-ui/react";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div style={{ display: "flex" }} />;
  // const Grid = () => <div style={{ display: "grid" }} />;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/products/?page=1&?limit=3").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Flex direction="column">
      {/*  AddProduct */}
      <AddProduct data={data} setData={setData} />
      <Grid margin='auto' templateColumns="repeat(3 ,300px)" gap="20px">
        {/* List of Products */}
        {data.map((card) => (
          <Product key={card.id} card={card} />
        ))}
      </Grid>
      {/* Pagination */}
      <Pagination setData={setData} />
    </Flex>
  );
};

export default Products;
