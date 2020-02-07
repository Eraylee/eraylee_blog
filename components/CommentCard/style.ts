/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime : 2020-02-07 10:39:57
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
      margin: `${theme.spacing()}px auto`,
    },
    comment: {
      padding: theme.spacing(),
      marginTop: theme.spacing(),
      background: 'rgba(51,51,51, .08)',
      borderRadius: '10px',
      '&:hover': {
        boxShadow: theme.shadows[1],
      },
    },
    action: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    createdAt: {
      color: theme.palette.text.secondary,
      fontSize: 10,
      marginLeft: theme.spacing(),
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
    },
    authorAgent: {
      marginLeft: theme.spacing(),
    },
    form: {
      padding: theme.spacing(),
      background: 'rgba(51,51,51, .08)',
      borderRadius: '10px',
    },
    replyAction: {
      padding: theme.spacing(),
      display: 'flex',
      justifyContent: 'space-between',
    },
    submit: {
      display: 'flex',
      justifyContent: 'center',
    },
    nullData: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: theme.spacing() * 2,
    },
    deleted: {
      '&>p': {
        color: theme.palette.text.secondary,
        fontSize: 10,
      },
      '& a': {
        color: theme.palette.secondary.light,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
    loadMore: {
      display: 'flex',
      justifyContent: 'center',
      background: 'rgba(51,51,51, .08)',
      borderRadius: '10px',
    },
    loading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);
