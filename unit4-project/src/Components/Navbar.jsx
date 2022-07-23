import {Flex,Image,Box,Input,UnorderedList,ListItem,Text} from "@chakra-ui/react"
import {Link} from "react-router-dom";
export const IconStyles={fontSize:"22px", color : "#005699"}
export default function Navbar(){
    const borderBottomStyles={borderBottom : "3px solid #005699"}
    function handleFocus(e){
        e.target.parentNode.style.width="100%";
    }
    function handleBlur(e){
        e.target.parentNode.style.width="70%";
    }
    return (
        <Box boxShadow="md" pb="10px">
        <Flex w="100%" bgImage="url('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/en_US/v1658310375937/css/images/gingham-pattern.svg?yocs=o_s_')" bgPosition="left top" bgRepeat="repeat" h="50px"></Flex>
        <Flex borderTopWidth="30px" pt="15px" borderColor="#f2f2f2" pr="50px" pl="50px" align="center">
        <Flex w="60%" justify="flex-end">
            <Image maxW={320} src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwe188b42c/images/svg-icons/Logos-main.svg?yocs=o_s_" alt="logo"/>
        </Flex>
        <Flex w="40%" justify="flex-end" gap="15px" h="40px" align="center" pos="relative">
            <Flex borderWidth="1px" gap="15px" h="40px" align="center" pr="10px" w="70%" ml="20px">
                <Input onBlur={(e) => handleBlur(e)} onFocus={(e) => handleFocus(e)} _focusVisible={{outline:"none"}} borderWidth="0px" placeholder="Search by fragrance or products"/>
                <i style={IconStyles} className="fa-solid fa-magnifying-glass"></i>
            </Flex>
            <Link to="/signup&login"><i style={IconStyles} className="fa-solid fa-circle-user"></i></Link>
            <Link to="/cart"><i style={IconStyles} className="fa-solid fa-bag-shopping"></i></Link>
        </Flex>
        </Flex>
        <Flex pt="20px">
            <UnorderedList w="100%" className="menu">
                <Flex gap="50px" justify="center">
                <ListItem><Link _hover={borderBottomStyles} pb="10px" to="/">TOP OFFERS</Link></ListItem>
                <ListItem><Link _hover={borderBottomStyles} pb="10px" to="/">BODY CARE</Link></ListItem>
                <ListItem><Link _hover={borderBottomStyles} pb="10px" to="/">CANDLES</Link></ListItem>
                <ListItem><Link _hover={borderBottomStyles} pb="10px" to="/">HOME FRAGRANCE</Link></ListItem>
                <ListItem><Link _hover={borderBottomStyles} pb="10px" to="/">HAND SOAPS & SANITIZERS</Link></ListItem>
                <ListItem><Link _hover={borderBottomStyles} pb="10px" to="/">MEN'S</Link></ListItem>
                <ListItem><Link _hover={borderBottomStyles} pb="10px" to="/">GIFTS</Link></ListItem>
                <ListItem><Link _hover={borderBottomStyles} pb="10px" to="/">NEW & NOW</Link></ListItem>
                </Flex>
            </UnorderedList>
        </Flex>
        </Box>
    )
}