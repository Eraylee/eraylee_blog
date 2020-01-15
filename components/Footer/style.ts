/*
 * @Author: ERAYLEE
 * @Date: 2020-01-12 21:48:11
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-15 18:03:04
 */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      widh: '100%',
      height: theme.spacing() * 8,
      backgroundColor: theme.palette.grey[50],
      boxShadow: theme.shadows[4],
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    copyright: {
      display: 'flex',
      alignItems: 'center',
      '& > span': {
        marginRight: 8,
        marginLeft: 8,
      },
      '& > hr': {
        height: 20,
      },
    },
  }),
);
