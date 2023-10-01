import { Avatar, Divider, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import Reactions from './Reactions';

const Comment = () => {
    const [liked,setLiked] = useState(false);
  return (
    <>
    <Flex gap={4} py={2} my={2} w={'full'}>
        <Avatar src='/jf.jpg' size={"sm"}/>
        <Flex gap={1} w={"full"} flexDirection={"column"}>
            <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={"sm"} fontWeight={"bold"}>jatinfoujdar</Text>
                <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"} color={"gray.light"}>2d</Text>
                  <BsThreeDots/>
                </Flex>
            </Flex>
            <Text>Hello World!</Text>
            <Reactions liked={liked} setLiked={setLiked}/>
            <Text fontSize={"sm"} color={"gray.light"}>
                {100 + liked ? 1 : 0}likes
            </Text>
        </Flex>
    </Flex>
    <Divider/>
    </>
  )
}

export default Comment