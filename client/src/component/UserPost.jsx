import { Avatar, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const UserPost = () => {
  return (
    <Link to={"/jatinfoujdar/post/1"}>
        <Flex gap={3} mb={4} py={5}>
           <Flex flexDirection={"column"} alignItems={"center"}>
            <Avatar size={"md"} name='Jatin Foujdar' src='/zuck-avatar.png'/>
            <Box w="1px" h={"full"} bg= "gray.light" my={2}> </Box>
            <Box  position={"relative"} w={"full"}>
                <Avatar size={"xs"} name='jatin foujdar' src='/zuck-avatar.png' position={"absolute"} top={"0px"}left={"15px"} padding={"2px"}/>
                <Avatar size={"xs"} name='jatin foujdar' src='/zuck-avatar.png' position={"absolute"} bottom={"0px"}right="-5px" padding={"2px"}/>
                <Avatar size={"xs"} name='jatin foujdar' src='/zuck-avatar.png' position={"absolute"} bottom={"0px"}left={"4px"} padding={"2px"}/>
            </Box>
           </Flex>
           <Flex flex={1} flexDirection={"column"} gap={2}>
           <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"} >
                <Text fontSize={"sm"} fontWeight={"bold"}> Jatin Foujdar</Text>
            </Flex>
            <Flex ></Flex>
           </Flex>
           </Flex>
        </Flex>
    </Link>
  )
}

export default UserPost