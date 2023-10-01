import { Avatar, Flex, Image, Text, Box, Divider } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import Reactions from '../component/Reactions';
import Comment from '../component/Comment';

const PostPage = () => {
  const [liked, setLiked] = useState(false)
  return (
    <>
    <Flex>
      <Flex w={"full"} alignItems={"center"} gap={3}>
        <Avatar src='/jf.jpg' size={"md"} name='Jatin Foujdar'/>
        <Flex >
          <Text fontSize={"sm"} fontWeight={"bold"} >jatinfoujdar</Text>
          <Image src='/verified.png' w={4} h={4} ml={1} />
        </Flex>
      </Flex>
      <Flex gap={4} alignItems={"center"}>
        <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
        <BsThreeDots/>
      </Flex>
    </Flex>
    <Text my={4}>Let's talk about Threads</Text>
    <Box borderRadius={6} overflow={"hidden"} border={"2px solid"} borderColor={"gray.light"}>
            <Image src="/jf.jpg" w={"full"}/>
           </Box>
           <Flex gap={3} my={3}>
            <Reactions liked={liked} setLiked={setLiked}/>
           </Flex>
           <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize={"sm"}>132 replies</Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize={"sm"}>{200 + (liked ? 1 : 0)} likes</Text>
           </Flex>
           <Divider/>
           <Comment/>
    </>
  )
}

export default PostPage;