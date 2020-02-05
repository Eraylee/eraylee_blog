import React, { useCallback, useState, useEffect } from 'react';
import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
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
import { HTMLRender } from '../HTMLRender';
const emoji = require('markdown-it-emoji');

const markdownIt = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  xhtmlOut: true,
  breaks: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return ''; // use external default escaping
  },
}).use(emoji);

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
  const { data, loading, run } = useAsync(__ => getComments(id));
  return { data, loading, run };
};

const Form: React.FC<FormProps> = ({
  replyInfo,
  articleId,
  isSub,
  onRefresh,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { register, handleSubmit, errors, setValue } = useForm<CommentInput>({
    validationSchema,
  });
  useEffect(() => {
    const commentDataJSON = localStorage.getItem('COMMENT_DATA');
    if (commentDataJSON) {
      const commentData: CommentInput = JSON.parse(commentDataJSON);
      setValue('authorName', commentData.authorName);
      setValue('authorMail', commentData.authorMail);
      setValue('authorUrl', commentData.authorUrl);
    }
  }, []);
  const onSubmit = useCallback(async (data: CommentInput) => {
    try {
      localStorage.setItem('COMMENT_DATA', JSON.stringify(data));
      if (data.authorUrl === '') {
        delete data.authorUrl;
      }
      data.articleId = articleId;
      data.parentId = replyInfo.parentId;
      const markdowned = markdownIt.render(data.content);
      data.content = isSub
        ? `回复@<a href='${replyInfo.authorUrl}' target="view_window"/>${replyInfo.authorName}</a>: ${markdowned}`
        : markdowned;
      await apiCreateComment(data);
      onRefresh();
    } catch (error) {
      console.error(error);
    }
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
              placeholder='请输入完整主页'
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
  onRefresh,
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
          <Box className={classes.userInfo}>
            <Typography variant='body1'>
              <Link href={data.authorUrl} target='view_window'>
                {data.authorName}:
              </Link>
            </Typography>
            <Typography variant='body2' className={classes.createdAt}>
              {toDateTime(data.createdAt)}
            </Typography>
            <Hidden xsDown>
              <Box className={classes.authorAgent}>
                <Chip
                  size='small'
                  color='secondary'
                  label={data.authorAgent.split('/')[0]}
                />{' '}
                <Chip
                  size='small'
                  color='secondary'
                  label={data.authorAgent.split('/')[1]}
                />
              </Box>
            </Hidden>
          </Box>
          <Button size='small' color='secondary' onClick={handleClick}>
            回复
          </Button>
        </Box>

        <Box className={classes.content}>
          {data.isDelete ? (
            <Box
              className={classes.deleted}
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          ) : (
            <HTMLRender html={data.content} />
          )}

          {activeId === data.id && (
            <>
              <Box className={classes.replyAction}>
                <Typography variant='overline'>添加新回复</Typography>
                <Button size='small' color='secondary' onClick={onCancle}>
                  取消
                </Button>
              </Box>
              <Form
                replyInfo={replyInfo}
                articleId={articleId}
                isSub={isSub}
                onRefresh={onRefresh}
              />
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
                onRefresh={onRefresh}
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
  const { data, loading, run } = useComments(id);
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
  const handleRefresh = useCallback(() => {
    run();
    setActiveId('');
    setReplyInfo({});
  }, []);
  return (
    <Container fixed>
      <Card className={classes.card}>
        <CardContent>
          <Typography>评论</Typography>
          <Divider />
          {loading ? (
            <Box className={classes.loading}>
              <CircularProgress color='primary' />
            </Box>
          ) : (
            <Box className={classes.main}>
              {!activeId && (
                <Form
                  replyInfo={replyInfo}
                  articleId={id}
                  onRefresh={handleRefresh}
                />
              )}
              {data && data.length ? (
                data.map(v => (
                  <Comment
                    data={v}
                    key={v.id}
                    activeId={activeId}
                    onClick={handleClick}
                    onCancle={handleCancle}
                    replyInfo={replyInfo}
                    articleId={id}
                    onRefresh={handleRefresh}
                  />
                ))
              ) : (
                <Box className={classes.nullData}>
                  <Typography
                    variant='subtitle2'
                    component='p'
                    color='textSecondary'
                  >
                    暂无评论,留下第一个评论吧
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};
