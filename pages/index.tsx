import React from 'react';
import { NextPage } from 'next';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Article } from '../api/types';
import { usePagination } from '../lib/hooks';
import { LoadMore } from '../components/LoadMore';
import { ArticleCard } from '../components/ArticleCard';

export interface IHomeProps {
  articles: Article[];
}

const Home: NextPage<IHomeProps> = () => {
  const { data, loadMore, loading, hasMore } = usePagination();
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box>
      <Box className={classes.banner}>
        <Typography variant='h4' color='secondary' className={classes.welcome}>
          ERAYLEE'S BLOG
        </Typography>
        <Typography variant='h6' color='secondary'>
          欢迎来访
        </Typography>
      </Box>
      <Container maxWidth='md' className={classes.container}>
        <Box>
          {data && data.map(v => <ArticleCard article={v} key={v.id} />)}
          <LoadMore onClick={loadMore} loading={loading} hasMore={hasMore} />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      width: '100%',
      height: '56vh',
      paddingTop: theme.spacing() * 24,
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: "center",
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      // backgroundImage:
      //   'url("https://www.transparenttextures.com/patterns/dust.png")',
      // background: `linear-gradient( 180deg, ${theme.palette.primary.main} 10%, #1D6FA3 100%)`,
      // boxShadow: theme.shadows[6],
      borderRadius: '0 0 12px 12px',
      borderTopLeftRadius: 0,
      boxSizing: 'border-box',
    },
    container: {
      marginTop: -theme.spacing() * 18,
      padding: 0,
      boxSizing: 'border-box',
    },
    welcome: {
      paddingBottom: theme.spacing() * 2,
    },
    card: {
      margin: theme.spacing() * 2,
      boxSizing: 'border-box',
      '&:hover': {
        boxShadow: theme.shadows[5],
      },
    },
    media: {
      width: '100%',
      height: 210,
    },
    content: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxSizing: 'border-box',
      height: '100%',
    },
    time: {
      padding: '8px 0',
    },
    timeIcon: {
      marginRight: 8,
    },
    timeText: {
      margin: 0,
      padding: 0,
    },
    tagContent: {
      paddingTop: 8,
    },
    tags: {
      marginRight: 8,
    },
  }),
);
