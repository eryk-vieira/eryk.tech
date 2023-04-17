import { Container } from '../../components/container';
import { GetServerSideProps } from 'next';
import Image from 'next/image'
import { NotionRenderer } from 'react-notion-x';
import dynamic from 'next/dynamic'
import { Box, SkeletonCircle, SkeletonText, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { getArticlePage, getArticles } from '../../services/articles';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code),
  { ssr: false }
)

export async function getStaticPaths() {
  const articles = await getArticles()

  const paths = articles.map(article => {

    return {
      params: { slug: article.page.id }
    }
  })

  console.log(paths)

  return {
    paths: paths,
    fallback: true, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetServerSideProps = async (context) => {
  const { slug }: any = context.params

  const { page, engPage } = await getArticlePage(slug)


  return { props: { page: page, englishPage: engPage }, revalidate: 30 }
}

export default function Slug({ page, englishPage }: any) {
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
        rootDomain='https://eryk.tech/blog'
      />
    </Container>
  )
}
