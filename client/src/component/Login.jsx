import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authScreenAtom } from '../atoms/authAtoms'
import { useState } from 'react'
import useShowToast from '../hooks/useShowToast'
import { userAtom } from '../atoms/userAtom'

export default function Login() {
  const setAuthScreen = useSetRecoilState(authScreenAtom)
  const setUser = useSetRecoilState(userAtom)
  const [input, setInput] = useState({  
    username: "",
    password: "",
  })
  const showToast = useShowToast();
  const handleLogin = async () => {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await res.json();
      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }
      localStorage.setItem("user-data", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> 
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>User Name</FormLabel>
                  <Input type="text" value={input.username}
                  onChange={(e)=> setInput((input)=>({...input,username: e.target.value}))}
                />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={input.password}
                  onChange={(e)=> setInput((input)=>({...input,password: e.target.value}))}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}
                >
               Login
              </Button>
            </Stack>
            <Stack align={'center'}>
            <Text fontSize={'lg'} color={'gray.600'}>
            Don't have account <Link color={'blue.400'}
            onClick={()=> setAuthScreen("signup")}
            >Sign up</Link> 
          </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
