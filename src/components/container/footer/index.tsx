import { Box, Divider, Flex, Grid, Link } from "@chakra-ui/react";
import { github_url, linkedin_url, twitter_url } from "../../../utils/socials";

export function Footer() {
  return (
    <Box as="footer" pb={8}>
      <Divider mb={8} />

      <Grid templateColumns="repeat(2, 1fr)">
        <Flex flexDir={'column'}>
          <Link>Home</Link>
          {/* <Link>Blog</Link>
          <Link>Snippets</Link> */}
        </Flex>
        <Flex flexDir={'column'}>
          <Link onClick={() => window.open(linkedin_url, '_blank')}>Linkedin</Link>
          <Link onClick={() => window.open(github_url, '_blank')}>Github</Link>
          <Link onClick={() => window.open(twitter_url, '_blank')}>Twitter</Link>
        </Flex>
      </Grid>
    </Box>
  )
}