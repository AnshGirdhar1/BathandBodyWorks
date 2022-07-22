import { Heading, Select,Flex,Box} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";


export default function FilterSort({products1,setProducts1}){
    const filterChange = async (e) => {
       if(e.target.value === "default"){
          let res = await axios.get("http://localhost:5006/products");
          return setProducts1(res.data);
       }
       let updatedData = products1.filter((product) =>(
         product.category === e.target.value
       ))
       setProducts1(updatedData);
    }

    const sortChange = (e) => {
        if(e.target.value !== "default") {
        if(e.target.value === "htl"){
            let sortedlist = products1.sort((a,b) => {
                return b.price - a.price;
        })
            setProducts1([...sortedlist]);
        } else if(e.target.value === "lth"){
            let sortedlist = products1.sort((a,b) => {
                return a.price - b.price;
        })
            setProducts1([...sortedlist]);
        }
    }
    }

    return (
        <Box bg="#005699" p="20px 0" mt="50px">
        <Flex gap="20px" w="90%" m="0 5%">
            <Flex w="100%" align="center">
                <Heading as="h2" w="110px" fontFamily="'Source Sans Pro', sans-serif" color="#fff" fontSize="20px" fontWeight="400">Filter By :</Heading>
                <Select bg="#fff" onChange={(e) => filterChange(e)}>
                    <option value="default">Product Type</option>
                    <option value="body cream">Body Cream</option>
                    <option value="body oil">Body Oil</option>
                    <option value="body scrub">Body Scrub</option>
                    <option value="body spray & mist">Body Spray & Mist</option>
                    <option value="body lotion">Body Lotion</option>
                    <option value="bar soap">Bar Soap</option>
                </Select>
            </Flex>
            <Flex w="100%" align="center">
                <Heading as="h2" w="100px" fontFamily="'Source Sans Pro', sans-serif" color="#fff" fontSize="20px" fontWeight="400">Sort By :</Heading>
                <Select bg="#fff" onChange={(e) => sortChange(e)} >
                    <option value="default">Price</option>
                    <option value="htl">Price High To Low</option>
                    <option value="lth">Price Low To High</option>
                    <option>Bestseller</option>
                    <option>New</option>
                    <option>Exclusive</option>
                </Select>
            </Flex>       
        </Flex>
        </Box>
    )
}