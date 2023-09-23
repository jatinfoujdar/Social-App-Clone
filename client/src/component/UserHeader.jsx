import { Avatar, Box, Flex, VStack,Text ,Menu, MenuButton, Portal, MenuList, MenuItem} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import {BsInstagram } from "react-icons/bs"
import { CiCircleMore} from "react-icons/ci"

const UserHeader = () => {
    const toast = useToast()

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
                <Text fontSize={"2xl"} fontWeight={"bold"}>Jatin Foujdar</Text>
                <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"}>jatinfoujdar</Text>
                <Text fontSize={"sm"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"} >threads.next</Text>
            </Flex>
            </Box>
            <Box>
                <Avatar name='Jatin Foujdar' scr= "/Zuck-avatar.png" size={"xl"} />
            </Box>
        </Flex>
        <Text>I'm a learner and always Ravenous for new Skills !</Text>
        <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"}>3.2k followers</Text>
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