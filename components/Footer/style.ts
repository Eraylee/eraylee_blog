/*
 * @Author: ERAYLEE
 * @Date: 2020-01-12 21:48:11
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-13 23:21:11
 */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      widh: '100%',
      padding: theme.spacing() * 5,
      height: theme.spacing() * 5,
      backgroundColor: theme.palette.grey[50],
      boxShadow: theme.shadows[1],
    },
    copyright: {
      display: 'flex',
    },
  }),
);
