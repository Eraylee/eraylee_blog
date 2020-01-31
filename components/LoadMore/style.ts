/*
 * @Author: ERAYLEE
 * @Date: 2019-12-03 14:07:46
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-31 13:36:59
 */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface LoadMoreProps {}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing() * 2,
      boxSizing: 'border-box',
      // padding: 16,
    },
    card: {
      padding: theme.spacing() * 2,
      textAlign: 'center',
    },
    content: {
      height: '100%',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
  }),
);
