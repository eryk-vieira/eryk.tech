import { Drawer as ChakraDrawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"

type DrawerType = {
  title: string;
  body: JSX.Element;
  opener(onOpen: () => void): JSX.Element;
}

export function Drawer({ title, body, opener }: DrawerType) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<any>()

  return (
    <>
      {opener(onOpen)}

      <ChakraDrawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>
            {body}
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  )
}
