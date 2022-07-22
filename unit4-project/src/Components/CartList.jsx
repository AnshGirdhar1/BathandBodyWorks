import { useEffect, useState } from "react"
import {Box,Image,Flex,Text,Button,Stack} from "@chakra-ui/react";
import axios from "axios";

export default function CartList(){
    const [cartProducts,setCartProducts] = useState([])
    async function getCartProducts(){
        const res = await axios.get("http://localhost:5006/cart");
        setCartProducts(res.data);
    }
    useEffect(() => {
        getCartProducts();
    },[])
    return (
        <Stack w="60%" m="0 20%" spacing="20px">
            {cartProducts.map((product) => (
                <Flex gap="40px" w="100%" h="100%" align="center">
                <Box width="150px">
                <Image src = {product.image} maxW="100%"alt="product-image" />
                </Box>
                <Box>
                    <Text>{product.title}</Text>
                    <Text>{product.description}</Text>
                    <Text>Mix & Match Full-Size: Buy 3, Get 3 Free or Buy 2, Get 1 Free</Text>
                </Box>
                <Flex>
                <Button bg="#000" color="#fff" fontSize="25px">-</Button>
                <Box>{product.qty}</Box>
                <Button bg="#000" color="#fff" fontSize="25px">+</Button>
                </Flex>
                <Box>
                    <Text>subtotal</Text>
                </Box>
                </Flex>
            ))}
        </Stack>
    )
}