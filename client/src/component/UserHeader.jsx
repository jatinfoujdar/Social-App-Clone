import { Avatar, Box, Flex, VStack,Text } from '@chakra-ui/react'
import React from 'react'

const UserHeader = () => {
  return (
    <VStack gap={4} alignItems={"start"}>
        <Flex justifyContent={"space-between"} w={"full"}>
            <Box>
                <Text fontSize={"2xl"}>Jatin Foujdar</Text>
                <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"}>jatinfoujdar</Text>
                <Text fontSize={"sm"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"} >threads.next</Text>
            </Flex>
            </Box>
            <Box>
                <Avatar name='Jatin Foujdar' scr= "./zuck-avatar.png" size={"xl"} />
            </Box>
        </Flex>
    </VStack>
  )
}

export default UserHeader