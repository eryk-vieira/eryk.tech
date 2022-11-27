import { Badge, Box, Button, Flex, Hide, Show, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import styles from './nav.module.css'
import { Drawer } from "../../drawer";

export function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Flex as={'nav'} h={'130px'} justify={'space-between'} alignItems={'center'} w={'100%'}>
      <Box display={'flex'} alignItems={'center'} gap={'4'}>
        <Hide breakpoint='(max-width: 760px)'>
          <Box className={styles.nav_item} _hover={{ bgColor }}>
            <Text fontWeight={'bold'}>Home</Text>
          </Box>
          <Box className={styles.nav_item} _hover={{ bgColor }}>
            <Text>Blog</Text>
            <Badge fontSize={9} colorScheme={'orange'}>Soon</Badge>
          </Box>
          <Box className={styles.nav_item} _hover={{ bgColor }}>
            <Text>Snippets</Text>
            <Badge fontSize={9} colorScheme={'red'}>Soon</Badge>
          </Box>
        </Hide>

        <Show breakpoint='(max-width: 760px)'>
          <Drawer
            opener={(open) => <HamburgerIcon onClick={open} cursor={'pointer'} w={8} h={8} />}
            title={'Menu'}
            body={
              <>
                <Stack>
                  <Box className={styles.nav_item} _hover={{ bgColor }}>
                    <Text fontWeight={'bold'}>Home</Text>
                  </Box>
                  <Box className={styles.nav_item} _hover={{ bgColor }}>
                    <Text>Blog</Text>
                    <Badge fontSize={9} colorScheme={'orange'}>Soon</Badge>
                  </Box>
                  <Box className={styles.nav_item} _hover={{ bgColor }}>
                    <Text>Snippets</Text>
                    <Badge fontSize={9} colorScheme={'red'}>Soon</Badge>
                  </Box>
                </Stack>
              </>
            }
          />
        </Show>
      </Box>

      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  )
}