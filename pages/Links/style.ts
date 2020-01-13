/*
 * @Author: ERAYLEE
 * @Date: 2020-01-12 21:48:11
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-13 22:34:32
 */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: '60px 15px',
    },
    avatarPaper: {
      position: 'relative',
    },
    avatarCard: {
      // boxSizing: 'border-box',
      marginTop: theme.spacing() * 5,
    },
    avatar: {
      position: 'absolute',
      top: -theme.spacing() * 4,
      left: '50%',
      marginLeft: -theme.spacing() * 4,
      width: theme.spacing() * 8,
      height: theme.spacing() * 8,
      boxShadow: theme.shadows[5],
    },
  }),
);
