import { AddIcon , BsFillImageFill} from "@chakra-ui/icons";
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

import React, { useRef, useState } from 'react'
import usePreview from "../hooks/usePreview";
import { userAtom } from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";



const MAX_CHAR = 500;

const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {PostText,setPostText} = useState("")
    const {handleImageChange,imgUrl,setImgUrl} = usePreview();
    const imageRef = useRef(null);
    const [remainingChar, setRemainingChar] = useState(MAX_CHAR);
    const user = useRecoilValue(userAtom);
    const showToast = useShowToast()

    handleTextChange=(e)=>{
      const inputText = e.target.value;
        
      if(inputText.length > MAX_CHAR){
        const truncatedText = inputText.slice(0, MAX_CHAR);
        setPostText(truncatedText);
        setRemainingChar(0);
      }else{
        setPostText(inputText);
        setRemainingChar(MAX_CHAR - inputText.length);
      }
    }

    handleCreatePost= async()=>{
      const res = await fetch("/api/posts/create",{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({postedBy: user._id,text: PostText,img: imgUrl})
      })
      const data = await res.json()
      if(data.error){
      showToast("Error",data.error,"error")
      return
      }
      showToast("Success","Post created successfully", "success")
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
                {remainingChar}/{MAX_CHAR}
            </Text>
            <Input type="file" hidden ref={imageRef} onChange={handleImageChange}/>
            <BsFillImageFill  
            style={{marginLeft:"5px", cursor: "pointer"}} size={16} onClick={()=> imageRef.current.click()}
            />
          </FormControl>
           {imgUrl && (
            <Flex mt={5} w={"full"} position={"relative"}>
             <Image src={imgUrl} alt="Select img"/>
             <CloseButton onClick={()=>{setImgUrl("")}} bg={"gray.800"} position={"absolute"} top={2} right={2} />
            </Flex>
           )}


          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCreatePost}>
             Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePost