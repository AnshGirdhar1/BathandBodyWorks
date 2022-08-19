import {Box,Image,Text,Flex,Stack,Input,Button,useToast} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";


const initialSignup= {firstname : "", lastname : "",email : "",password : ""}
const initialSigin = {email : "",password : ""}


export default function SignupLogin(){
    const [signupData,setSignupData] = useState(initialSignup);
    const toast = useToast();
    const [signinData,setSigninData] = useState(initialSigin);

    function handleSignup(e){
        const {name,value} = e.target;
        const updatedSignup = {...signupData,[name] : value};
        setSignupData(updatedSignup);
    }

    async function signupSubmit(e){
        e.preventDefault();
        let accountExists = false;
        let res = await axios.get("https://bathandbodyworksclone.herokuapp.com/signup");
        res.data.map((user) => {
            if(user.email === signupData.email){
                toast({
                    title: 'Your Account Already Exists Please SignIn To Your Account',
                    status: 'info',
                    duration: 4000,
                    isClosable: true,
                    position : 'top'
                })
                accountExists = true;
            }
        })

        if(accountExists === false){
            axios({
                method : "POST",
                url : "https://bathandbodyworksclone.herokuapp.com/signup",
                data : signupData
            })
        }
    }

    function handleSignin(e){
        const {name,value} = e.target;
        const updatedSignin = {...signinData,[name] : value};
        setSigninData(updatedSignin);
    }

    async function signinSubmit(e){
        e.preventDefault();
        let accountExists = false;
        let res = await axios.get("https://bathandbodyworksclone.herokuapp.com/signup");
        res.data.map((user) => {
            if(user.email === signinData.email && user.password === signinData.password){
                toast({
                    title: 'SignIn Successful!',
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                    position : 'top'
                })
                accountExists = true;
            } else if(user.email === signinData.email){
                toast({
                    title: 'Oops Password Does Not Match!',
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                    position : 'top'
                })
                accountExists = true;
            }
        })

        if(accountExists === false){
            toast({
                    title: 'No Account Found!',
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                    position : 'top'
                })
                accountExists = true;
        }
    }

    return (
        <Box w="80%" m="0 10%" p="80px 0">
            <Box>
            <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_" alt="banner-image"/>
            </Box>
            <Box p="50px 0 30px 0" borderBottomWidth="2px" borderColor="#f2f2f2">
            <Text fontSize="30px">Sign In or Sign Up</Text>
            </Box>
            <Flex mt="50px">
                <Stack w="50%" borderRightWidth="1px" borderColor="#f2f2f2" pr="90px">
                    <form onSubmit={(e) => signinSubmit(e)}>
                        <Stack spacing="20px">
                        <Text>SIGN IN</Text>
                        <Text>If you already have an account with us, sign in below</Text>
                        <Box>
                            <Text mb="10px">Email Address</Text>
                            <Input required w="90%"  name ="email" type="email" value={signinData.email} onChange={(e) => handleSignin(e)} />
                        </Box>
                        <Box>
                            <Text mb="10px">Password</Text>
                            <Input required w="90%" name="password" value={signinData.password} type="password" onChange={(e) => handleSignin(e)} />
                        </Box>
                        <Input style={{cursor : "pointer"}} bg="#000" color="#fff" type="submit" value="SIGN IN" w="90%"/>
                        <Image maxW="100%" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf946a6ac/images/loyalty/July19/nonloyalty_5thmkt_signuptile_D.png?yocs=s_" />
                        </Stack>
                    </form>
                </Stack>
                <Stack w="40%" ml="10%">
                <form onSubmit={(e) => signupSubmit(e)}>
                <Stack spacing="15px">
                        <Text>SIGN UP</Text>
                        <Text>Create an account to access the best of your favorite store</Text>
                        <Box>
                            <Text mb="10px">First Name</Text>
                            <Input name="firstname" value={signupData.firstname} required onChange={(e) => handleSignup(e)}  />
                        </Box>
                        <Box>
                            <Text mb="10px">Last Name</Text>
                            <Input name="lastname" value={signupData.lastname} required onChange={(e) => handleSignup(e)}  />
                        </Box>
                        <Box>
                            <Text mb="10px">Email Address</Text>
                            <Input name="email" value={signupData.email} type="email" required onChange={(e) => handleSignup(e)} />
                        </Box>
                        <Box>
                            <Text mb="10px">Password</Text>
                            <Input name="password" value={signupData.password} type="password" required onChange={(e) => handleSignup(e)}   />
                        </Box>
                        <Input style={{cursor : "pointer"}} type="submit" value="SIGN UP" bg="#000" color="#fff" />
                         </Stack>
                    </form>
                    </Stack>
            </Flex>
        </Box>
    )
}