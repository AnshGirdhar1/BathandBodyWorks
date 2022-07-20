import {Flex, ListItem, UnorderedList,Text,Box,Button,Input,Tooltip,Image,Stack} from "@chakra-ui/react";
import {IconStyles} from "./Navbar"
export default function Footer(){
    return (
        <Box borderWidth="3px" borderColor="#f2f2f2">
        <Flex p="50px" gap="50px">
            <Box>
            <Text>Get email offers & the latest news from Bath & Body Works!</Text>
            <Text mt="15px">Enter Email</Text>
            <Flex gap={2} mb="15px" mt="10px">
                <Input borderRadius="0px"/>
                <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                    <Text fontSize="25px" fontWeight={900} bg="#f2f2f2" p=" 0 16px" borderRadius="100%">i</Text>
                </Tooltip>
            </Flex>
            <Text>Confirm Email</Text>
            <Flex mt="10px">
            <Input borderRadius="0px"/>
            <Button bg="#000" borderRadius="0px" color="#fff">SUBMIT</Button>
            </Flex>
            <Box>
                <UnorderedList className="menu">
                <Flex gap="20px" fontSize="25px" mt="10px">
                    <ListItem><i style={IconStyles} className="fa-brands fa-facebook"></i></ListItem>
                    <ListItem><i style={IconStyles} className="fa-brands fa-instagram"></i></ListItem>
                    <ListItem><i style={IconStyles} className="fa-brands fa-linkedin-in"></i></ListItem>
                    <ListItem><i style={IconStyles} className="fa-brands fa-twitter"></i></ListItem>
                </Flex>
                </UnorderedList>
            </Box>
            </Box>
            <Box>
                <UnorderedList className="menu">
                <Stack spacing="10px">
                <ListItem><Text fontWeight={600}>CUSTOMER CARE</Text></ListItem>
                <ListItem><Text>Help & FAQs</Text></ListItem>
                <ListItem><Text>Shipping</Text></ListItem>
                <ListItem><Text>Return & Exchanges</Text></ListItem>
                <ListItem><Text>Order Tracking</Text></ListItem>
                <ListItem><Text>Corporate Sales & Gifts</Text></ListItem>
                <ListItem><Text>Contact Us</Text></ListItem>
                </Stack>
                </UnorderedList>
            </Box>
            <Box>
                <UnorderedList className="menu">
                <Stack spacing="10px">
                <ListItem><Text fontWeight={600}>MY ACCOUNT</Text></ListItem>
                <ListItem><Text>Sign In or Sign Up</Text></ListItem>
                <ListItem><Text>Order Tracking</Text></ListItem>
                <ListItem><Text>My Auto Refresh</Text></ListItem>
                <ListItem><Text>My Love-It List</Text></ListItem>
                </Stack>
                </UnorderedList>
            </Box>
            <Box>
                <UnorderedList className="menu">
                <Stack spacing="10px">
                <ListItem><Text fontWeight={600}>DISCOVER</Text></ListItem>
                <ListItem><Text>About Us</Text></ListItem>
                <ListItem><Text>Careers</Text></ListItem>
                <ListItem><Text>Gift Cards</Text></ListItem>
                <ListItem><Text>Shop by Fragrance</Text></ListItem>
                <ListItem><Text>Product Ingredients</Text></ListItem>
                <ListItem><Text>Get Inspired</Text></ListItem>
                <ListItem><Text>Diversity, Equity & Inclusion</Text></ListItem>
                </Stack>
                </UnorderedList>
            </Box>
            <Box>
                <UnorderedList className="menu">
                <Stack>
                <ListItem><Text fontWeight={600}>FIND US</Text></ListItem>
                <ListItem><Text>Store Locator</Text></ListItem>
                <ListItem><Text>Global Locations</Text></ListItem>
                </Stack>
                </UnorderedList>
            </Box>
        </Flex>
        <Flex justify="center" mb="50px">
            <Image w="500px" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_" alt="footer-img" />
        </Flex>
        <Box bg="#f2f2f2" textAlign="center" p="60px 0"> 
            <UnorderedList className="menu">
                <Flex gap="20px" justify="center">
                <ListItem><Text>Terms Of Use |</Text></ListItem>
                <ListItem><Text>Privacy Policy |</Text></ListItem>
                <ListItem><Text>Security Bug Report |</Text></ListItem>
                <ListItem><Text>California |</Text></ListItem>
                <ListItem><Text>Shop by Fragrance |</Text></ListItem>
                <ListItem><Text>Product Ingredients |</Text></ListItem>
                <ListItem><Text>Get Inspired |</Text></ListItem>
                <ListItem><Text>Diversity, Equity & Inclusion |</Text></ListItem>
                 </Flex>
                </UnorderedList>
                <Text mt="15px">© 2022 Bath & Body Works Direct, Inc. All Rights Reserved.</Text>
        </Box>
        </Box>
    )
}