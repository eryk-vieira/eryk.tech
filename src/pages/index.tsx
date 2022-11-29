import { Box, Text, Flex, Heading, useColorMode, Avatar, Img, Badge, Link, Card, CardHeader, CardBody, useBreakpointValue } from '@chakra-ui/react'
import { useCallback } from 'react';
import { Container } from '../components/container';
import AvatarImage from '../assets/avatar/avatar.png';

export default function Home() {
  const { colorMode } = useColorMode();

  const ecsaRedirect = useCallback(() => {
    window.open('https://kapstar.com.br', '_blank')
  }, [])

  return (
    <Container>
      <Box w={'100%'}>
        <Flex align={'center'} gap="12" mb={16} flexDir={{ base: 'column', sm: 'column', md: 'row' }}>
          <Avatar src={AvatarImage.src} size={'xl'} />
          <Box>
            <Heading as="h1">Eryk Luiz Vieira</Heading>
            <Text colorScheme={'gray'}>Co-founder and Software engineer at <Badge onClick={ecsaRedirect} cursor={'pointer'}>ECSA Finance</Badge></Text>
          </Box>
        </Flex>

        <Box mb={8}>
          <Card variant={'outline'}>
            <CardHeader>
              <Heading size={'md'}>About Me</Heading>
            </CardHeader>

            <CardBody>
              <Text>An enthusiast in disruptive technologies, through the development of applications working as e Fullstack Software Engineer for 5 years. Having worked on several fronts software development teams and scalable environments. Currently studying Blockchain and Web 3.0.</Text>
            </CardBody>
          </Card>
        </Box>


        <Box>
          <Card variant={'outline'}>
            <CardHeader>
              <Heading size={'md'}>Github Contributions</Heading>
            </CardHeader>

            <CardBody>
              <Img src={`https://github-readme-streak-stats.herokuapp.com?user=&theme=${colorMode}&background=DD272700&border=DD272700&user=eryk-vieira`} width="100%" />
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Container>
  )
}
