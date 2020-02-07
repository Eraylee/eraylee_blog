import React from 'react';
import { LoadMoreProps } from './types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './style';

export const LoadMore: React.FC<LoadMoreProps> = ({
  loading,
  onClick,
  hasMore,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  if (loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress color='primary' />
      </Box>
    );
  }
  return (
    <Box className={classes.loadMore}>
      {hasMore && (
        <Button size='small' variant='text' onClick={onClick}>
          加载更多
        </Button>
      )}
    </Box>
  );
};
