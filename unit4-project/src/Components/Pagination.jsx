import {Button,Flex} from "@chakra-ui/react";

export default function Pagination({total,setPage,page}){
    function changePage(current){
        console.log(current);
        setPage(Number(current));
    }
    return (
            <Flex justify="center" gap="20px">
            {new Array(Math.ceil(total)).fill(0).map((item,index) => (
                <Button key={index} bg="#000" _hover={{bg : "#e10068",transition: "0.5s all"}} color="#fff" borderRadius="100%" mb="50px" disabled={page === index+1} className="pageBtn" onClick={(current) => changePage(index+1)}>{index+1}</Button>
            ))}
            </Flex>
    )
}