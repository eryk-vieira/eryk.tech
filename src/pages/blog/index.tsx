import { Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { ArticleCard } from '../../components/article-card';
import { Container } from '../../components/container'
import { getArticles } from '../../services/articles';
import { Article } from '../../types/articles';

export async function getStaticProps() {
  const articles = await getArticles()


  return { props: { articles }, revalidate: 30 }
}

export default function Blog({ articles }: { articles: Array<Article> }) {
  const [lang] = useState(true)

  return (
    <Container>
      <Stack gap={4}>
        {articles.map(article => {
          return lang ? (
            <ArticleCard key={article.page.id} {...article?.page} />
          ) :
            <ArticleCard key={article.englishPage.id} {...article?.englishPage} />
        })}
      </Stack>
    </Container>
  )
}
