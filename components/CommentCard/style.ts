/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime : 2020-02-01 22:03:54
 * @LastEditors  : ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      boxSizing: 'border-box',
      marginBottom: theme.spacing() * 2,
    },
    main: {
      maxWidth: 1000,
    },
    comment: {
      padding: theme.spacing(),
      marginTop: theme.spacing(),
      background: 'rgba(51,51,51, .08)',
      borderRadius: '10px',
    },
    content: {
      paddingTop: theme.spacing(),
    },
    action: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    form: {
      padding: theme.spacing(),
      background: 'rgba(51,51,51, .08)',
      borderRadius: '10px',
    },
  }),
);
