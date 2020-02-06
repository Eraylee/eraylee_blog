import React from 'react';
import { NextPage } from 'next';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { useArticles } from '../../lib/hooks';
import { LoadMore } from '../../components/LoadMore';
import { ArticleCard } from '../../components/ArticleCard';

export interface IHomeProps {
  id: string;
}

const Home: NextPage<IHomeProps> = ({ id }) => {
  const { data, loadMore, loading, hasMore } = useArticles(id);
  return (
    <Container maxWidth='md'>
      <Box>{data && data.map(v => <ArticleCard article={v} key={v.id} />)}</Box>
      <LoadMore onClick={loadMore} loading={loading} hasMore={hasMore} />
    </Container>
  );
};
Home.getInitialProps = async ({ query }) => {
  return {
    id: query.id as string,
  };
};
export default Home;
