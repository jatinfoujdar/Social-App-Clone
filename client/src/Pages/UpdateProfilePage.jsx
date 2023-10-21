import React from 'react'
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
  

const UpdateProfilePage = () => { 
      return (
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
                  <Avatar size="xl" src="https://bit.ly/sage-adebayo"/>

                </Center>
                <Center w="full">
                  <Button w="full">Change Avator</Button>
                </Center>
              </Stack>
            </FormControl>
            <FormControl  isRequired>
              <FormLabel>Full name</FormLabel>
              <Input
                placeholder="Posty"
                _placeholder={{ color: 'gray.500' }}
                type="text"
              />
            </FormControl>
            <FormControl  isRequired>
              <FormLabel>User name</FormLabel>
              <Input
                placeholder="Jatin foujdar"
                _placeholder={{ color: 'gray.500' }}
                type="text"
              />
            </FormControl>
            <FormControl  isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: 'gray.500' }}
                type="email"
              />
            </FormControl>
            <FormControl  isRequired>
              <FormLabel>Bio </FormLabel>
              <Input
                placeholder="Bio....!"
                _placeholder={{ color: 'gray.500' }}
                type="email"
              />
            </FormControl>
            
            <FormControl  isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="password"
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
                }}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
      )
    }
    
 

export default UpdateProfilePage