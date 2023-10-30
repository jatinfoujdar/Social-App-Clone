import { AddIcon } from '@chakra-ui/icons'
import { Button, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const CreatePost = () => {
  return (
    <>
    <Button position={'fixed'} bottom={10} right={10} leftIcon={<AddIcon/>} bg={useColorModeValue("gray.300","gray.dark")}></Button>
    </>
  )
}

export default CreatePost