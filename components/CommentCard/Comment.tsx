import React, { useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './style';
import { CommentProps } from './types';
import { toDateTime } from '../../lib/pipe';
import { Form } from './Form';
import { HTMLRender } from '../HTMLRender';

export const Comment: React.FC<CommentProps> = ({
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
