import { useEffect, useState } from "react"
import {Box,Image,Flex,Text,Button,Stack,Heading,Input,Spacer, useToast} from "@chakra-ui/react";
import axios from "axios";

export default function CartList(){
    const [cartProducts,setCartProducts] = useState([]);
    const [subtotal,setSubTotal] = useState(0);
    const [total,setTotal] = useState(0);
    const toast1 = useToast();
    async function getCartProducts(){
        const res = await axios.get("http://localhost:5006/cart");
        setCartProducts(res.data);
    }

    useEffect(() => {
        getCartProducts();
    },[cartProducts])

    function deleteFromCart(id){
        axios({
            method : "DELETE",
            url : `http://localhost:5006/cart/${id}`
        })
        getCartProducts();

        toast1({
          position : 'top',
          render : () => (
            <Flex w="370px" bg="#e10068" color="#fff" h="50px" borderRadius="10px" align="center" justify="center">1 Item Has Been Removed From Your Bag</Flex>
          ),
          duration: 2000,
          isClosable: true,
        })
    }

    function qtyChange(id,change){
        cartProducts.map((product) => {
            if(product.id === id){
                axios({
                method : "PATCH",
                url : `http://localhost:5006/cart/${id}`,
                data : {...product, qty : product.qty + change}
                })
            }
        })
        getCartProducts();
    }

    useEffect(() => {
        priceChange();
    },[cartProducts]);

    function priceChange(){
        let sum = cartProducts.reduce((acc,elem) =>  {
            return acc + Number(elem.price)*Number(elem.qty);
        },0)
        setSubTotal(sum);
        setTotal(sum);
    }
    return (
        <Stack w="80%" m="0 10%" spacing="20px" p="80px 0">
            {cartProducts.length === 0 && 
            <Flex width="100%" justify="center" align="center" gap="20px">
            <Heading fontSize="40px" color="#e10068" fontFamily="'Source Sans Pro', sans-serif" fontWeight="600">Your Bag is Empty</Heading>
            <i className="fas fa-shopping-bag" style={{color:"#e10068",fontSize:"40px"}}></i>
            </Flex>}
            {cartProducts.map((product) => (
                <Flex key = {product.id} gap="60px" w="100%" h="100%" align="center" bg="#f7f7f7" borderWidth="2px" borderColor="#f2f2f2">
                <Box width="150px">
                <Image src = {product.image} maxW="100%"alt="product-image" />
                </Box>
                <Box>
                    <Text fontWeight="600">{product.title}</Text>
                    <Text>{product.description}</Text>
                    <Text color="#e10068">Mix & Match Full-Size: Buy 3, Get 3 Free or Buy 2, Get 1 Free</Text>
                </Box>
                <Box width="40px">
                    <Text fontSize="20px" fontWeight="600">$ {product.price}</Text>
                </Box>
                <Flex align="center">
                <Button onClick={(id) => qtyChange(product.id,-1)} _hover={{bg : "#e10068"}} disabled = {product.qty === 1} bg="#005699" color="#fff" fontSize="20px" borderRadius="100%" p="10px 0">-</Button>
                <Flex m="0 10px" fontWeight="600" width="20px" justify="center">{product.qty}</Flex>
                <Button onClick={(id) => qtyChange(product.id,1)} _hover={{bg : "#e10068"}} bg="#005699" color="#fff" fontSize="20px" borderRadius="100%" p="10px 0">+</Button>
                <i className="fas fa-trash" style={{color : "#e10068",fontSize : "20px", marginLeft : "20px", backgroundColor : "#fff", width : "40px", padding:"10px 0",display:"flex",justifyContent:"center",alignItems : "center",borderRadius:"100%",cursor:"pointer"}} onClick={(id) => deleteFromCart(product.id)}></i>
                </Flex>
                <Box>
                    <Text fontWeight={600} fontSize="20px">${product.qty*product.price}</Text>
                </Box>
                </Flex>
            ))}
            <Flex pt="50px">
            <Stack w="35%" borderWidth="2px" borderColor="#f2f2f2" p="30px" spacing="10px">
                <Text fontWeight="600">PROMOTION CODE</Text>
                <Text>Only one code can be applied per order.</Text>
                <Flex>
                    <Input borderRadius="0px"/>
                    <Button bg="#000" color="#fff" _hover={{bg : "#e10068"}} borderRadius="0px">Apply</Button>
                </Flex>
            </Stack>
            <Stack w="50%" ml="15%" borderWidth="2px" borderColor="#f2f2f2" p="30px">
                <Flex>
                    <Text>Subtotal</Text>
                    <Spacer />
                    <Text>{subtotal}</Text>
                </Flex>
                 <Flex>
                    <Text>Coupon Code Discount</Text>
                    <Spacer />
                    <Text>- 0</Text>
                </Flex>
                 <Flex>
                    <Text fontSize="25px">Total</Text>
                    <Spacer />
                    <Text fontSize="25px">{total}</Text>
                </Flex>
            </Stack>
            </Flex>
        </Stack>
    )
}