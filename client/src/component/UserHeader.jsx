import { Avatar, Box, Flex, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const UserHeader = () => {
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
                <Avatar name='Jatin Foujdar' scr= "/zuck-avatar.png" size={"xl"} />
            </Box>
        </Flex>
        <Text>I'm a learner and always Ravenous for new Skills !</Text>
        <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"}>3.2k followers</Text>
                <Box w={"1"} h={"1"} bg={"gray.light"} borderRadius={"full"}></Box>
                <Link color={'gray.light'}>instagram.com</Link>
            </Flex>
            <Flex gap={2} alignItems={"center"}></Flex>
        </Flex>
    </VStack>
  )
}

export default UserHeader