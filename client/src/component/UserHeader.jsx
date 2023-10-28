import { Avatar, Box, Flex, VStack,Text ,Menu, MenuButton, Portal, MenuList, MenuItem, Button} from '@chakra-ui/react'
import React from 'react'
import { Link  } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import {BsInstagram } from "react-icons/bs"
import { CiCircleMore} from "react-icons/ci"
import { useRecoilValue } from 'recoil'
import { userAtom } from '../atoms/userAtom'


const UserHeader = ({user}) => {
    const toast = useToast()
    const currentUser = useRecoilValue(userAtom);

    const copyUrl =()=>{
        const currentURL = window.location.href;
        // console.log(window);
        navigator.clipboard.writeText(currentURL).then(()=>{
            // console.log("URL is copied");
            toast({ description: 'Copied' })
        })

    }
  return (
    <VStack gap={4} alignItems={"start"}>
        <Flex justifyContent={"space-between"} w={"full"}>
            <Box>
                <Text fontSize={"2xl"} fontWeight={"bold"}>{user.name}</Text>
                <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"}>{user.username}</Text>
                <Text fontSize={"sm"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"} >threads.next</Text>
            </Flex>
            </Box>
            <Box>
                {user.profilePic && (
                    <Avatar name={user.name} scr= {user.profilePic} size={"xl"} /> 
                )}
                 {!user.profilePic && (
                    <Avatar name={user.name} scr= "/zuck-avatar.png" size={"xl"} /> 
                )}
            </Box>
        </Flex>
        <Text>{user.bio}</Text>

        {currentUser._id === user._id && (
    <Link to="/update">
        <Button size={"sm"}>
            Update Profile
        </Button>
    </Link>
)}
       {currentUser._id !== user._id && (
        <Button size={"sm"}>
            Follow
        </Button>
)}


        <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"}>{user.followers.length}</Text>
                <Box w={"1"} h={"1"} bg={"gray.light"} borderRadius={"full"}></Box>
                <Link color={'gray.light'}>instagram.com</Link>
            </Flex>
            <Flex gap={2} alignItems={"center"}>
                <Box _hover={{ bg: "white", svg: { fill: "black" } }}>
                    <BsInstagram size={24} cursor={"pointer"} />
                </Box>
                <Box _hover={{ bg: "white", svg: { fill: "black" } }}>
                <Menu>
                    <MenuButton>
                <CiCircleMore size={24} cursor={"pointer"}  />
                </MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem onClick={copyUrl}>Copu Link</MenuItem>
                    </MenuList>
                </Portal>
                </Menu>
                </Box>
            </Flex>
        </Flex>
        <Flex w={"full"}>
            <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb={3} cursor={"pointer"}>
                <Text fontWeight={"bold"}>Threads</Text>
            </Flex>
            <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb={3} cursor={"pointer"}>
            <Text fontWeight={"bold"}>Replies</Text>
            </Flex>
        </Flex>
    </VStack>
  )
}

export default UserHeader