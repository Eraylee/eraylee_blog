import React, { useCallback, useState } from 'react';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import * as yup from 'yup';
import { useStyles } from './style';
import {
  CommentCardProps,
  CommentProps,
  CommentItem,
  FormProps,
  ReplyInfo,
} from './types';
import { apiGetComments, apiCreateComment } from '../../api';
import { useAsync } from '../../lib/hooks';
import { toDateTime } from '../../lib/pipe';
import { CommentInput } from '../../api/types';

const validationSchema = yup.object().shape({
  authorName: yup.string().required('昵称必填'),
  authorMail: yup
    .string()
    .required('邮箱必填')
    .email('不是合法邮箱'),
  authorUrl: yup.string().url('不是合法链接'),
  content: yup.string().required('内容必填'),
});

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

const Form: React.FC<FormProps> = ({ replyInfo, articleId }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { register, handleSubmit, errors } = useForm<CommentInput>({
    validationSchema,
  });
  const onSubmit = useCallback(async (data: CommentInput) => {

    Object.assign(
      data,
      {
        articleId,
        content : '回复@' + replyInfo.authorName + ':' + data.content
      },
      replyInfo,
    );
    console.log(data)
    await apiCreateComment(data);
  }, []);
  return (
    <Box className={classes.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            <TextField
              label='昵称'
              placeholder='请输入昵称'
              fullWidth
              name='authorName'
              variant='filled'
              error={!!errors.authorName}
              helperText={errors.authorName && errors.authorName.message}
              inputRef={register}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              label='邮箱'
              placeholder='请输入邮箱'
              fullWidth
              name='authorMail'
              variant='filled'
              error={!!errors.authorMail}
              helperText={errors.authorMail && errors.authorMail.message}
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label='主页'
              placeholder='请输入主页'
              fullWidth
              name='authorUrl'
              error={!!errors.authorUrl}
              helperText={errors.authorUrl && errors.authorUrl.message}
              inputRef={register}
              variant='filled'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='内容'
              placeholder={
                replyInfo.authorName
                  ? '回复@' + replyInfo.authorName + '：'
                  : '请输入内容'
              }
              fullWidth
              multiline
              name='content'
              error={!!errors.content}
              helperText={errors.content && errors.content.message}
              inputRef={register}
              variant='filled'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} className={classes.submit}>
            <Button
              variant='contained'
              type='submit'
              size='small'
              color='secondary'
            >
              提交
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

const Comment: React.FC<CommentProps> = ({
  data,
  activeId,
  onClick,
  onCancle,
  replyInfo,
  isSub,
  articleId,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const handleClick = useCallback(() => {
    onClick(data.id, {
      authorName: data.authorName,
      authorUrl: data.authorUrl,
      parentId: isSub ? data.parentId : data.id,
    });
  }, [data]);
  return (
    <>
      <Box className={classes.comment}>
        <Box className={classes.action}>
          <Typography variant='subtitle1'>
            <Typography variant='subtitle1' component='span' color='primary'>
              <Link href={data.authorUrl}>{data.authorName}</Link>
            </Typography>{' '}
            说：
          </Typography>
          <Button size='small' color='secondary' onClick={handleClick}>
            回复
          </Button>
        </Box>
        <Typography variant='inherit' color='textSecondary'>
          {toDateTime(data.createdAt)}
        </Typography>
        <Box className={classes.content}>
          <Typography variant='inherit'>{data.content}</Typography>
          {activeId === data.id && (
            <>
              <Box className={classes.replyAction}>
                <Typography variant='overline'>添加新回复</Typography>
                <Button size='small' color='secondary' onClick={onCancle}>
                  取消
                </Button>
              </Box>
              <Form replyInfo={replyInfo} articleId={articleId} />
            </>
          )}
          {data.children &&
            data.children.map(i => (
              <Comment
                data={i}
                key={i.id}
                activeId={activeId}
                onClick={onClick}
                onCancle={onCancle}
                replyInfo={replyInfo}
                isSub
                articleId={articleId}
              />
            ))}
        </Box>
      </Box>
    </>
  );
};

export const CommentCard: React.FC<CommentCardProps> = ({ id }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { data } = useComments(id);
  const [replyInfo, setReplyInfo] = useState<ReplyInfo>({});
  const [activeId, setActiveId] = useState('');
  const handleClick = useCallback((id, info) => {
    setActiveId(id);
    setReplyInfo(info);
  }, []);
  const handleCancle = useCallback(() => {
    setActiveId('');
    setReplyInfo({});
  }, []);
  return (
    <Container fixed>
      <Card className={classes.card}>
        <CardContent>
          <Typography>评论</Typography>
          <Divider />
          <Box className={classes.main}>
            {!activeId && <Form replyInfo={replyInfo} articleId={id} />}
            {data ? (
              data.map(v => (
                <Comment
                  data={v}
                  key={v.id}
                  activeId={activeId}
                  onClick={handleClick}
                  onCancle={handleCancle}
                  replyInfo={replyInfo}
                  articleId={id}
                />
              ))
            ) : (
              <Typography>暂无评论</Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
