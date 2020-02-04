import React from 'react';
import Error from 'next/error';
import { NextPage } from 'next';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { Theme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CategoryIcon from '@material-ui/icons/Category';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { HTMLRender } from '../../components/HTMLRender';
import { Article } from '../../api/types';
import { toDateTime } from '../../lib/pipe';
import { CommentCard } from '../../components/CommentCard';
import { apiGetArticle } from '../../api';

export interface ArticleProps {
  article?: Article;
  id: string;
  error?: {
    code: number;
    message: string;
  };
}

export interface ITheme extends Theme {
  cover: string;
}

const BASE_URL = process.env.API;
const ArticlePage: NextPage<ArticleProps> = props => {
  if (props.error) {
    return <Error statusCode={props.error.code} title={props.error.message} />;
  }
  const article = props.article as Article;
  const theme = useTheme();
  const cover =
    article.cover && BASE_URL + article.cover.path + article.cover.fileName;
  Object.assign(theme, { cover });
  const classes = useStyles(theme);
  return (
    <>
      <Box className={classes.cover}>
        <Container fixed>
          <Box className={classes.header}>
            <Typography variant='h4' color='primary' align='center'>
              {article.title}
            </Typography>
            <Typography
              variant='subtitle1'
              color='primary'
              className={classes.discription}
              align='center'
            >
              {article.description}
            </Typography>
            <Divider />
            <Box className={classes.meta}>
              <Box className={classes.bottomItem}>
                <AccessTimeIcon color='primary' className={classes.icon} />
                <Typography variant='body2' className={classes.text}>
                  创建时间：{toDateTime(article.createdAt)}
                </Typography>
              </Box>
              <Box className={classes.bottomItem}>
                <CategoryIcon color='primary' className={classes.icon} />
                <Typography variant='body2' className={classes.text}>
                  分类：{article.category && article.category.name}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container className={classes.container} fixed>
        <Paper className={classes.paper}>
          <HTMLRender html={article.html} />
        </Paper>
      </Container>
      {article.allowComment && <CommentCard id={props.id} />}
    </>
  );
};
ArticlePage.getInitialProps = async ({ query }) => {
  const id = query.id as string;
  try {
    const res = await apiGetArticle(id);
    const article = res.data;
    return { article, id };
  } catch (error) {
    return { error, id };
  }
};
export default ArticlePage;

export const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    cover: {
      display: 'flex',
      alignItems: 'flex-end',
      width: '100%',
      height: 400,
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `url(${theme.cover})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    header: {
      padding: theme.spacing() * 3,
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255,255,255,.7)',
    },
    discription: {
      paddingTop: theme.spacing(),
    },
    meta: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(),
    },
    bottomItem: {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing() * 3,
    },
    icon: {
      marginRight: 4,
      fontSize: 10,
    },
    text: {
      margin: 0,
      padding: 0,
      lineHeight: 1,
      fontSize: 10,
      color: theme.palette.secondary.main,
    },
    container: {
      boxSizing: 'border-box',
    },
    paper: {
      marginBottom: theme.spacing() * 2,
      padding: theme.spacing() * 3,
    },
  }),
);
