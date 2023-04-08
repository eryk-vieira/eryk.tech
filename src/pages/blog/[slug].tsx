import { Container } from '../../components/container';
import { GetServerSideProps } from 'next';
import Image from 'next/image'
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import dynamic from 'next/dynamic'
import { Box, SkeletonCircle, SkeletonText, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Client } from '@notionhq/client';
import { useRouter } from 'next/router'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code),
  { ssr: false }
)

export async function getStaticPaths() {
  const notion_secret = process.env.NOTION_SECRET
  const notion = new Client({ auth: notion_secret });

  const { results } = await notion.databases.query({
    database_id: '4b68f1e1b1f2446ebe2c8c7ea781108e', filter: {
      or: [
        {
          property: 'Status',
          select: {
            equals: 'PUBLISHED',
          }
        }
      ]
    }
  })

  const paths = results.map(r => {
    return {
      params: { slug: r.id }
    }
  })

  return {
    paths: paths,
    fallback: true, // can also be true or 'blocking'
  }
}


export const getStaticProps: GetServerSideProps = async (context) => {
  const { slug }: any = context.params

  const notion = new NotionAPI({ authToken: process.env.NOTION_TOKEN_V2, activeUser: process.env.NOTION_USER_ID })

  const page = await notion.getPage(slug, { fetchCollections: false })

  return { props: { page: page }, revalidate: 120 }
}

export default function Slug({ page }: any) {
  const router = useRouter()
  const colorMode = useColorMode()

  if (router.isFallback) {
    return <Container>
      <Box padding='6' boxShadow='lg'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    </Container>
  }

  return (
    <Container>
      <NotionRenderer
        isLinkCollectionToUrlProperty={false}
        components={{ Code, nextImage: Image, Collection: () => { } }}
        recordMap={page}
        darkMode={colorMode.colorMode === 'light' ? false : true}
        disableHeader
        fullPage
        className='notion-renderer-custom'
      />
    </Container>
  )
}
