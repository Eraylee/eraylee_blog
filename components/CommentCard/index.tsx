import React, { useCallback, useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import { useStyles } from './style';
import { CommentCardProps, ReplyInfo } from './types';
import { Form } from './Form';
import { Comment } from './Comment';
import { LoadMore } from './LoadMore';
import { useComments } from '../../lib/hooks';

export const CommentCard: React.FC<CommentCardProps> = ({ id }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { data, loading, refresh, loadMore, hasMore } = useComments(id);
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
    refresh();
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
          <LoadMore loading={loading} onClick={loadMore} hasMore={hasMore} />
        </CardContent>
      </Card>
    </Container>
  );
};
