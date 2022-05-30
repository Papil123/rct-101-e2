import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";

const AddProduct = ( props) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formdata, setFormdata] = useState({});
  const handlesubmit = (e) => {
    let { name, value } = e.target;
   
    setFormdata({ ...formdata, [name]: value });
    // console.log(formdata)
     props.setData(...props.data,formdata)
  };

  return (
    <>
      <Button
        onClick={onOpen}
        margin="auto"
        width="100px"
        my={4}
        data-cy="add-product-button"
      >
        Add Product
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody pb={6}>
            <Input
              onChange={handlesubmit}
              name="title"
              data-cy="add-product-title"
              placeholder="Title"
            />
            <Select data-cy="add-product-category">
              <option
                onChange={handlesubmit}
                name="category"
                value="shirt"
                type="option"
                data-cy="add-product-category-shirt"
              >
                shirt
              </option>
              <option
                 type="option"
                onChange={handlesubmit}
                name="category"
                value="pant"
                data-cy="add-product-category-pant"
              >
                pant
              </option>
              <option
                type="option"
                onChange={handlesubmit}
                name="category"
                value="jeans"
                data-cy="add-product-category-jeans"
              >
                jeans
              </option>
            </Select>
            <RadioGroup data-cy="add-product-gender">
              <Radio
                 type="radio"
                onChange={handlesubmit}
                name="gender"
                value='male'
                data-cy="add-product-gender-male"
              >
                male
              </Radio>
              <Radio
                type="radio"
                onChange={handlesubmit}
                name="gender"
                value='female'
                data-cy="add-product-gender-female"
              >
                female
              </Radio>
              <Radio
                type="radio"
                onChange={handlesubmit}
                name="gender"
                value='unisex'
                data-cy="add-product-gender-unisex"
              >
                unisex
              </Radio>
            </RadioGroup>
            <Input
              onChange={handlesubmit}
              name="price"
              data-cy="add-product-price"
              placeholder="Price"
            />
            <Button onClick={handlesubmit} data-cy="add-product-submit-button">
              Submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
