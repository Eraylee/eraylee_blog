import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useTheme } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

import { useStyles } from './style';
import { LoadMoreProps } from './types';

export const LoadMore = ({ onClick, loading, hasMore }: LoadMoreProps) => {
  const theme = useTheme();

  const classes = useStyles(theme);
  if (loading) {
    return (
      <Card className={classes.skeletonRoot}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Skeleton variant='rect' height={theme.spacing() * 22} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent className={classes.content}>
              <Box className={classes.box}>
                <Skeleton variant='text' height={36} />
                <Skeleton variant='text' />
                <Skeleton variant='text' height={24} width='25%' />
                <Skeleton variant='text' height={14} width='50%' />
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    );
  }
  return (
    <Box className={classes.root}>
      <Card>
        {hasMore ? (
          <CardActionArea className={classes.card} onClick={onClick}>
            加载更多...
          </CardActionArea>
        ) : (
          <CardActionArea className={classes.card}>暂无更多...</CardActionArea>
        )}
      </Card>
    </Box>
  );
};
