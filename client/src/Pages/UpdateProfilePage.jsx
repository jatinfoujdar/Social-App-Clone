import React, { useRef, useState } from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Avatar,
    Center,
  } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { userAtom } from '../atoms/userAtom'
import usePreview from '../hooks/usePreview'
import useShowToast from '../hooks/useShowToast'

  

 const UpdateProfilePage =() =>{
    const [user , setUser] = useRecoilState(userAtom)
    const fileRef = useRef(null);
    const[updating,setUpdating] = useState(false)
    const showToast = useShowToast();

    const {handleImageChange , imgUrl} = usePreview();
    
    const handleSubmit = async(e)=>{
      e.preventDefault();
      if(updating){
        return;
      }
      setUpdating(true);
      try {
        const res = await fetch(`/api/users/update/${user._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...input, profilePic: imgUrl }),
        });
        const data = await res.json(); // updated user object
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        showToast("Success", "Profile updated successfully", "success");
        setUser(data);
        localStorage.setItem("user-data", JSON.stringify(data));
      } catch (error) {
        showToast("Error",error.message,"error")
      }finally{
        setUpdating(false)
      }
    }

    const [input, setInput] = useState({
        name: user.name,
        username: user.username,
        email: user.email,
        bio : user.bio,
        password: ""
    }) 
    // console.log(user,"user");
    
   
      return (
        <form onSubmit={handleSubmit}>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            >
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
              User Profile Edit
            </Heading>
            <FormControl >
             
              <Stack direction={['column', 'row']} spacing={6}>
                <Center>
                  <Avatar size="xl" src={imgUrl || user.profilePic}  />

                </Center>
                <Center w="full">
                  <Button w="full" onClick={()=> fileRef.current.click()}>Change Avator</Button>
                  <Input type='file' hidden ref={fileRef} onChange={handleImageChange}/>
                </Center>
              </Stack>
            </FormControl>

            <FormControl  >
              <FormLabel>Full name</FormLabel>
              <Input
                placeholder="Posty"
                value={input.name}
                onChange={(e)=> setInput((input)=>({...input,name: e.target.value}))}
                _placeholder={{ color: 'gray.500' }}
                type="text"
              />
            </FormControl>


            <FormControl  log>
              <FormLabel>User name</FormLabel>
              <Input
                placeholder="Jatin foujdar"
                value={input.username}
                onChange={(e)=> setInput((input)=>({...input,username: e.target.value}))}
                _placeholder={{ color: 'gray.500' }}
                type="text"
              />
            </FormControl>


            <FormControl  log>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                value={input.email}
                  onChange={(e)=> setInput((input)=>({...input,email: e.target.value}))}
                _placeholder={{ color: 'gray.500' }}
                type="email"
              />
            </FormControl>


            <FormControl  log>
              <FormLabel>Bio </FormLabel>
              <Input
                placeholder="Bio....!"
                value={input.bio}
                  onChange={(e)=> setInput((input)=>({...input,bio: e.target.value}))}
                _placeholder={{ color: 'gray.500' }}
                type="text"
              />
            </FormControl>
            

            <FormControl  log>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="password"
                value={input.password}
                onChange={(e)=> setInput((input)=>({...input,password: e.target.value}))}
                _placeholder={{ color: 'gray.500' }}
                type="password"
              />
            </FormControl>


            <Stack spacing={6} direction={['column', 'row']}>
              <Button
                bg={'red.400'}
                color={'white'}
                w="full"
                _hover={{
                  bg: 'red.500',
                }}>
                     Cancel
              </Button>
              <Button
                bg={'blue.400'}
                color={'white'}
                w="full"
                _hover={{
                  bg: 'blue.500',
                }}type='submit' isLoading={updating} >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
        </form>
      )
    }
    
    
 

export default UpdateProfilePage