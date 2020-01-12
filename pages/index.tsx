import React from 'react';
import { NextPage } from 'next';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './style';
import { IHomeProps } from './types';
import { ArticleCard } from '../components/ArticleCard';
import { apiGetArticles } from '../api';

// const FILE_API = process.env.API;

const Home: NextPage<IHomeProps> = props => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box>
      <Box className={classes.banner}>
        <Typography variant='h4' color='primary' className={classes.welcome}>
          ERAYLEE'S BLOG
        </Typography>
        {/* <Typography variant="h6" color="primary">
          记录博客，分享生活
        </Typography> */}
      </Box>
      <Container maxWidth='md' className={classes.container}>
        <Box>
          {props.articles &&
            props.articles.map(v => <ArticleCard article={v} key={v.id} />)}
        </Box>
      </Container>
    </Box>
  );
};
Home.getInitialProps = async () => {
  try {
    const res = await apiGetArticles({});
    const articles = res.data.data;
    return { articles };
  } catch (error) {
    console.error(error);
    return { articles: [] };
  }
};
export default Home;
