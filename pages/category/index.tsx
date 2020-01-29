import React from 'react';
import { NextPage } from 'next';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { ArticleCard } from '../../components/ArticleCard';
import { apiGetArticles } from '../../api';
import { Article } from '../../api/types';

export interface IHomeProps {
  articles: Article[];
}

// const FILE_API = process.env.API;

const Home: NextPage<IHomeProps> = props => {
  return (
    <Box>
      <Container maxWidth='md'>
        <Box>
          {props.articles &&
            props.articles.map(v => <ArticleCard article={v} key={v.id} />)}
        </Box>
      </Container>
    </Box>
  );
};
Home.getInitialProps = async ({ query }) => {
  try {
    const res = await apiGetArticles({ categoryId: query.categoryId as string });
    const articles = res.data.data;
    return { articles };
  } catch (error) {
    console.error(error);
    return { articles: [] };
  }
};
export default Home;
