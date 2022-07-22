import axios from "axios";
import { useEffect, useState } from "react"
import { Grid,GridItem,Box,Image,Heading,Button,Text,Flex,Select} from "@chakra-ui/react";
import FilterSort from "./FilterSort";

export default function ProductList(){
    const [products1,setProducts1] = useState([]);
    const getProducts = async () => {
       let res = await axios.get("http://localhost:5006/products");
       setProducts1(res.data);
    }
    useEffect(() => {
        getProducts();
    },[])

    async function addToBag(id){
        let flag = false;
        const response = await axios.get("http://localhost:5006/cart");
        const cartData = response.data;
        cartData.map((singleProduct) => {
            if(singleProduct.id === id){
                flag = true;
                axios({
                    method : "PATCH",
                    url : `http://localhost:5006/cart/${id}`,
                    data : {...singleProduct, qty : singleProduct.qty + 1}
                })
            }
        })
        if(flag === false) {
        products1.map((product) => {
            if(id === product.id){
            axios({
            method : "POST",
            url : "http://localhost:5006/cart",
            data : {...product, qty : 1}
            })
            }
        })
        }
    }
    
    return (
        <Box>
        <FilterSort products1={products1} setProducts1={setProducts1} /> 
        <Grid templateColumns='repeat(4, 1fr)' gap="25px"  w="90%" m="0px 5%" p="50px 0">
            {products1.map((product) => {
                return <GridItem w="100%" textAlign="center" p="20px" borderWidth="2px" borderColor="#f2f2f2" _hover={{boxShadow : "lg", transition : "0.5s all"}} key={product.id}>
                    <Box>
                        <Image maxW="100%" maxH="300px" src={product.image} alt="product-img" />
                        <Heading as="h4" color="#005699" fontSize="20px" fontFamily="'Source Sans Pro', sans-serif" fontStyle="italic" pt="20px">{product.tag}</Heading>
                        <Heading as="h3" p="10px 0" fontWeight={600} size="md" fontFamily="'Source Sans Pro', sans-serif">{product.title}</Heading>
                        <Heading as="h4" size="md" pb="5px" fontFamily="'Source Sans Pro', sans-serif">{`$ ${product.price}`}</Heading>
                        <Text color="#e10068" pb="10px" fontSize="14px">Mix & Match Full-Size: Buy 3, Get 1 Free</Text>
                        <Button p="20px" bg="#005699" w="100%" color="#fff" borderRadius="0px" _hover={{bg : "#e10068",transition : "0.5s all"}} onClick={(id) => addToBag(product.id)}>Add to Bag</Button>
                    </Box>
                </GridItem>
            })}
        </Grid>
        </Box>
    )
}