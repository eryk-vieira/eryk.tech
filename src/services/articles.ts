import { Article } from "../types/articles";
import { Client } from '@notionhq/client'
import { NotionAPI } from "notion-client";

type NotionObject = {
  id: string;
  created_time: string;
  properties: {
    english_version: {
      relation: Array<{
        id: string
      }>
    };
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


export async function getArticles(): Promise<Array<Article>> {
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
  const articles: Array<Article> = Promise.all(results.map(async (data: NotionObject) => {
    // @ts-ignore
    const englishPage: NotionObject = await notion.pages.retrieve({ page_id: data.properties.english_version.relation[0]?.id })

    return {
      page: {
        id: data.id,
        title: data?.properties.Title.title[0].plain_text,
        description: data.properties.Description.rich_text[0].plain_text,
        created_at: data.created_time,
      },
      englishPage: {
        id: englishPage.id,
        title: englishPage?.properties.Title.title[0].plain_text,
        description: englishPage.properties.Description.rich_text[0].plain_text,
        created_at: englishPage.created_time,
      }
    }
  }))

  return articles
}

export async function getArticlePage(slug: string) {
  const notion = new NotionAPI({ authToken: process.env.NOTION_TOKEN_V2, activeUser: process.env.NOTION_USER_ID })

  const page = await notion.getPage(slug, { fetchCollections: false })
  const blockKeys = Object.keys(page.block)

  let relation
  for (const key of blockKeys) {
    const block = page.block[key];

    if (block.value.type === 'page') {
      relation = block.value
    }
  }


  const engPage = await notion.getPage(relation?.id || '', { fetchCollections: false })


  return {
    page,
    engPage
  }
}
