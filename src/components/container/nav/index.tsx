import { Badge, Box, Button, Flex, Hide, Show, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import styles from './nav.module.css'
import { Drawer } from "../../drawer";
import { useRouter } from "next/router";
import Link from "next/link";

export function Nav() {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Flex as={'nav'} h={'130px'} justify={'space-between'} alignItems={'center'} w={'100%'}>
      <Box display={'flex'} alignItems={'center'} gap={'4'}>
        <Hide breakpoint='(max-width: 760px)'>
          <Link href={'/'}>
            <Box className={styles.nav_item} _hover={{ bgColor }}>
              <Text fontWeight={router.pathname === '/' ? 'bold' : 'normal'}>Home</Text>
            </Box>
          </Link>

          <Link href={'/blog'}>
            <Box className={styles.nav_item} _hover={{ bgColor }}>
              <Text fontWeight={router.asPath === '/blog' ? 'bold' : 'normal'}>Blog</Text>
              <Badge fontSize={9} colorScheme={'orange'}>Soon</Badge>
            </Box>
          </Link>

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
                  <Box color={'gray.700'} className={styles.nav_item} _hover={{ bgColor }}>
                    <Text fontWeight={'bold'}>Home</Text>
                  </Box>
                  <Box color={'gray.700'} className={styles.nav_item} _hover={{ bgColor }}>
                    <Text>Blog</Text>
                    <Badge fontSize={9} colorScheme={'orange'}>Soon</Badge>
                  </Box>
                  <Box color={'gray.700'} className={styles.nav_item} _hover={{ bgColor }}>
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
