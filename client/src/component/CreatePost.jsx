import { AddIcon } from "@chakra-ui/icons";
import {
	Button,
	CloseButton,
	Flex,
	FormControl,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Textarea,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";

import React, { useState } from 'react'
import usePreview from "../hooks/usePreview";

const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {PostText,setPostText} = useState("")
    const{handleImageChange,imgUrl} = usePreview();


    handleTextChange=()=>{
     
    }
    
  return (
    <>
    <Button position={'fixed'} bottom={10} right={10} leftIcon={<AddIcon/>} bg={useColorModeValue("gray.300","gray.dark")}
    onClick={open}
    ></Button>
   
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl>
            <Textarea placeholder={"What's on your Mind...."} onChange={handleTextChange} value={PostText}/>
            <Text fontSize={"sm"} fontWeight={"bold"} textAlign={"right"} m={1} color={"gray.800"}>
                500/500
            </Text>
            <Input type="file" hidden ref={fileRef} onChange={handleImageChange}/>
          </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePost