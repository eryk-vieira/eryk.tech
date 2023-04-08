import { Stack } from '@chakra-ui/react';
import { Client } from '@notionhq/client'
import { ArticleCard } from '../../components/article-card';
import { Container } from '../../components/container'
import { Article } from '../../types/articles';



type NotionObject = {
  id: string;
  created_time: string;
  properties: {
    Description: {
      rich_text: Array<{
        plain_text: string;
      }>
    },
    Title: {
      title: Array<{
        plain_text: string;
      }>
    },
  }
}

export async function getStaticProps() {
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

  // @ts-ignore
  const articles: Array<Article> = results.map((data: NotionObject) => {
    return {
      id: data.id,
      title: data?.properties.Title.title[0].plain_text,
      description: data.properties.Description.rich_text[0].plain_text,
      created_at: data.created_time
    }
  })

  return { props: { articles }, revalidate: 60 }
}

export default function Blog({ articles }: { articles: Array<Article> }) {
  return (
    <Container>
      <Stack gap={4}>
        {articles.map(article => {
          return (
            <ArticleCard key={article.id} {...article} />
          )
        })}
      </Stack>
    </Container>
  )
}
