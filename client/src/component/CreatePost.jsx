import { AddIcon } from '@chakra-ui/icons'
import { Button, useColorModeValue } from '@chakra-ui/react'

import React from 'react'

const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button position={'fixed'} bottom={10} right={10} leftIcon={<AddIcon/>} bg={useColorModeValue("gray.300","gray.dark")}></Button>
   
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePost