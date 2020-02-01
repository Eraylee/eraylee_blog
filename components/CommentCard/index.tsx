import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './style';
import {
  CommentCardProps,
  CommentProps,
  CommentItem,
  FormProps,
} from './types';
import { apiGetComments } from '../../api';
import { useAsync } from '../../lib/hooks';
import { toDateTime } from '../../lib/pipe';

const getComments = async (id: string) => {
  try {
    const res = await apiGetComments(id);
    const parents = res.data.filter(v => !v.parentId);
    const children = res.data.filter(v => v.parentId);
    const comments: CommentItem[] = parents.map(v => ({
      children: children
        .filter(i => i.parentId === v.id)
        .map(i => ({
          ...i,
        })),
      ...v,
    }));
    return comments;
  } catch (error) {
    console.error(error.message);
  }
};

const useComments = (id: string) => {
  const { data, loading } = useAsync(__ => getComments(id));
  return { data, loading };
};

const Form: React.FC<FormProps> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box className={classes.form}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            <TextField
              label='昵称'
              placeholder='请输入昵称'
              fullWidth
              variant='filled'
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              label='邮箱'
              placeholder='请输入邮箱'
              fullWidth
              variant='filled'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='主页'
              placeholder='请输入主页'
              fullWidth
              variant='filled'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='内容'
              placeholder='请输入内容'
              fullWidth
              multiline
              variant='filled'
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' size='small' color='secondary'>
              提交
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

const Comment: React.FC<CommentProps> = ({ data }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box className={classes.comment}>
      <Box className={classes.action}>
        <Typography variant='subtitle1'>
          <Typography variant='subtitle1' component='span' color='primary'>
            {data.authorName}
          </Typography>{' '}
          说：
        </Typography>
        <Button size='small' color='secondary'>
          回复
        </Button>
      </Box>

      <Typography variant='inherit' color='textSecondary'>
        {toDateTime(data.createdAt)}
      </Typography>
      <Box className={classes.content}>
        <Typography variant='inherit'>{data.content}</Typography>
        {data.children &&
          data.children.map(i => <Comment data={i} key={i.id} />)}
      </Box>
    </Box>
  );
};

export const CommentCard: React.FC<CommentCardProps> = ({ id }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { data } = useComments(id);
  return (
    <Container fixed>
      <Card className={classes.card}>
        <CardContent>
          <Typography>评论</Typography>
          <Divider />
          <Form />
          <Box className={classes.main}>
            {data ? (
              data.map(v => <Comment data={v} key={v.id} />)
            ) : (
              <Typography>暂无评论</Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
