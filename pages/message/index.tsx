import React from 'react';
import Error from 'next/error';
import { NextPage } from 'next';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import { Theme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { SpecialPage } from '../../api/types';
import { apiGetSpecialPage } from '../../api';
import { toFromNow, toDateTime } from '../../lib/pipe';
import { HTMLRender } from '../../components/HTMLRender';
import { CommentCard } from '../../components/CommentCard';

export interface MessageProps {
  article?: SpecialPage;
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
const MessagePage: NextPage<MessageProps> = props => {
  if (props.error) {
    return <Error statusCode={props.error.code} title={props.error.message} />;
  }
  const article = props.article as SpecialPage;
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
            <Divider />
            <Box className={classes.meta}>
              <Box className={classes.bottomItem}>
                <AccessTimeIcon color='primary' className={classes.icon} />
                <Tooltip title={toDateTime(article.createdAt)} placement='top'>
                  <Typography variant='body2' className={classes.text}>
                    创建时间：{toFromNow(article.createdAt)}
                  </Typography>
                </Tooltip>
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
MessagePage.getInitialProps = async () => {
  try {
    const res = await apiGetSpecialPage('message');
    const article = res.data;
    return { article, id: res.data.id };
  } catch (error) {
    return { error, id: '' };
  }
};
export default MessagePage;

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
