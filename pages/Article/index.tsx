import React from 'react';
import Error from 'next/error';
import { NextPage } from 'next';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CategoryIcon from '@material-ui/icons/Category';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { toDateTime } from '../../lib/pipe';
import { useStyles } from './style';
import { ArticleProps } from './types';
import { Article } from '../../api/types';
import { apiGetArticle } from '../../api';
// import "./index.css";
const BASE_URL = process.env.API;
const ArticlePage: NextPage<ArticleProps> = props => {
  if (props.error) {
    return <Error statusCode={props.error.code} title={props.error.message} />;
  }
  const article = props.article as Article;
  const theme = useTheme();
  const cover = BASE_URL + article.cover.path + article.cover.fileName;
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
                  分类：{article.category.name}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container className={classes.container} fixed>
        <Paper>
          <Box
            className={classes.html}
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </Paper>
      </Container>
    </>
  );
};
ArticlePage.getInitialProps = async ({ query }) => {
  try {
    const res = await apiGetArticle(query.id as string);
    const article = res.data;
    return { article };
  } catch (error) {
    return { error };
  }
};
export default ArticlePage;
