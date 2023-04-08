import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./footer";
import { Nav } from "./nav";


type ContainerProps = {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <>
      <Head>
        <title>Eryk Vieira | Site</title>
        <link rel="shortcut icon" href="https://ui-avatars.com/api/?name=Eryk+Vieira&background=1a202c&color=fff" />
      </Head>

      <Flex flexDir={'column'} maxW="850" justify={'center'} margin={'0 auto'} pl={12} pr={12}>
        <Flex as={'header'} w="100%" justifyItems={'center'}>
          <Nav />
        </Flex>

        <Box as="main" pb="16" flex={1}>
          {children}
        </Box>

        <Footer />
      </Flex>
    </>
  )
}
