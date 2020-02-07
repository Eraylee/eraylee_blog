import React, { useCallback, useEffect, useState } from 'react';
import * as yup from 'yup';
import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSnackbar } from 'notistack';

import { useStyles } from './style';
import { FormProps } from './types';
import { apiCreateComment } from '../../api';

import { CommentInput } from '../../api/types';

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

export const Form: React.FC<FormProps> = ({
  replyInfo,
  articleId,
  isSub,
  onRefresh,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [disabled, setDisabled] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
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
      setValue('content', '');
    }
  }, [disabled]);
  const onSubmit = useCallback(async (data: CommentInput) => {
    try {
      setDisabled(true);
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
      setDisabled(false);
      onRefresh();
    } catch (error) {
      setDisabled(false);
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
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
              InputLabelProps={{
                shrink: true,
              }}
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
              InputLabelProps={{
                shrink: true,
              }}
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
              InputLabelProps={{
                shrink: true,
              }}
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
              disabled={disabled}
            >
              提交
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
