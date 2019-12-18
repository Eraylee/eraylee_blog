/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime : 2019-12-18 21:18:16
 * @LastEditors  : ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: theme.spacing() * 2,
      boxSizing: 'border-box',
      '&:hover': {
        boxShadow: theme.shadows[5],
      },
    },
    media: {
      width: '100%',
      height: theme.spacing() * 22,
    },
    content: {
      // flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      height: theme.spacing() * 22,
    },
    meta: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(),
    },
    bottomItem: {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing() * 2,
    },
    icon: {
      marginRight: 4,
      fontSize: 12,
    },
    text: {
      margin: 0,
      padding: 0,
      lineHeight: 1,
      fontSize: 12,
    },
    tagContent: {
      paddingTop: theme.spacing(),
    },
    tags: {
      marginRight: theme.spacing(),
    },
  }),
);
