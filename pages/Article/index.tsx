import React from 'pages/Article/node_modules/react';
import Error from 'pages/Article/node_modules/next/error';
import { NextPage } from 'pages/Article/node_modules/next';
import Box from 'pages/Article/node_modules/@material-ui/core/Box';
import Paper from 'pages/Article/node_modules/@material-ui/core/Paper';
import Divider from 'pages/Article/node_modules/@material-ui/core/Divider';
import { Theme } from 'pages/Article/node_modules/@material-ui/core/styles';
import { useTheme } from 'pages/Article/node_modules/@material-ui/core/styles';
import Container from 'pages/Article/node_modules/@material-ui/core/Container';
import Typography from 'pages/Article/node_modules/@material-ui/core/Typography';
import CategoryIcon from 'pages/Article/node_modules/@material-ui/icons/Category';
import AccessTimeIcon from 'pages/Article/node_modules/@material-ui/icons/AccessTime';
import { makeStyles, createStyles } from 'pages/Article/node_modules/@material-ui/core/styles';

import { toDateTime } from '../../lib/pipe';
import { Article } from '../../api/types';
import { apiGetArticle } from '../../api';

export interface ArticleProps {
  article?: Article;
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
    html: {
      boxSizing: 'border-box',
      padding: theme.spacing() * 3,
      wordWrap: 'break-word',
      '& h1,h2,h3,h4,h5,h6': {
        color: theme.palette.primary.light,
      },
      '& blockquote': {
        // width: '100%',
        margin: 5,
        boxSizing: 'border-box',
        borderLeft: '2px solid #009688',
        padding: 8,
        quotes: 'none',
        background: 'none repeat scroll 0 0 rgba(102, 128, 153, 0.08)',
      },
      '& a': {
        color: '#0052d9',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '& img': {
        width: '60%',
        display: 'block',
        margin: '0 auto',
        boxShadow: theme.shadows[2],
      },
      '& pre': {
        padding: theme.spacing() * 2,
        overflow: 'auto',
        borderRadius: '4px',
        backgroundColor: '#272c34',
        boxShadow: theme.shadows[15],
      },
      '& code': {
        fontFamily:
          "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        color: ' #fff',
        fontSize: theme.typography.caption.fontSize,
      },
      '& strong,b': {
        color: '#bf360c',
      },
      '& ul,ol': {
        margin: 0,
        paddingLeft: theme.spacing() * 2,
      },
      '& table': {
        borderCollapse: 'collapse',
        margin: '0 auto',
        '& thead': {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.text.primary,
        },
        '& tr': {
          borderTop: '1px solid #ccc',
          '& th ,td': {
            border: '1px solid #ccc',
            padding: ' 5px 10px',
          },
        },
      },
    },
  }),
);
