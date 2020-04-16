import React from 'react';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CategoryIcon from '@material-ui/icons/Category';
import Visibility from '@material-ui/icons/Visibility';
import CardContent from '@material-ui/core/CardContent';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CardActionArea from '@material-ui/core/CardActionArea';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import { Link } from '../Link';
import { useStyles } from './style';
import { toDate } from '../../lib/pipe';
import { ArticleCardProps } from './types';

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Card className={classes.card}>
      <Grid container>
        {article.cover && (
          <Grid item xs={12} sm={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={article.cover.path}
                title='Contemplative Reptile'
              />
            </CardActionArea>
          </Grid>
        )}
        <Grid item xs={12} sm={8}>
          <CardContent className={classes.content}>
            <Box>
              <Typography gutterBottom variant='h5'>
                <Link
                  prefetch
                  href='/article/[id]'
                  as={`/article/${article.id}`}
                >
                  {article.title}
                </Link>
              </Typography>

              <Typography variant='body2' color='textPrimary' component='p'>
                {article.description}
              </Typography>
            </Box>

            <Box>
              <Box className={classes.tagContent}>
                {article.tags &&
                  article.tags.map(v => (
                    <Chip
                      className={classes.tags}
                      size='small'
                      key={v.id}
                      label={v.name}
                    />
                  ))}
              </Box>
              <Box className={classes.meta}>
                <Box className={classes.bottomItem}>
                  <AccessTimeIcon color='primary' className={classes.icon} />
                  <Typography variant='body2' className={classes.text}>
                    {toDate(article.createdAt)}
                  </Typography>
                </Box>
                <Box className={classes.bottomItem}>
                  <ChatBubbleOutlineIcon
                    color='primary'
                    className={classes.icon}
                  />
                  <Typography variant='body2' className={classes.text}>
                    {article.meta.comments}
                  </Typography>
                </Box>
                <Box className={classes.bottomItem}>
                  <Visibility color='primary' className={classes.icon} />
                  <Typography variant='body2' className={classes.text}>
                    {article.meta.views}
                  </Typography>
                </Box>
                <Box className={classes.bottomItem}>
                  <CategoryIcon color='primary' className={classes.icon} />
                  <Typography variant='body2' className={classes.text}>
                    {article.category && article.category.name}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
