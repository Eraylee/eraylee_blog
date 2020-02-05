/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime : 2020-02-05 19:00:53
 * @LastEditors  : ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {},
    content: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'inherit',
    },
    link: {
      color: '#fff',
      '& > a': {
        color: '#fff',
      },
      '& a:hover': {
        textDecoration: 'none',
      },
    },
    paper: {
      // backgroundColor: 'rgba(255,255,255,.5)',
      // backdropFilter: "blur(30px)",
      // "-webkit-backdrop-filter": "blur(30px)"
    },
    modal: {
      '& > .MuiBackdrop-root': {
        backgroundColor: 'rgba(0,0,0,0)',
      },
    },
    menu: {
      position: 'relative',
      width: 220,
      height: '100vh',
      '&:after': {
        position: 'absolute',
        width: 220,
        content: '""',
        top: 0,
        right: 0,
        bottom: 0,
        filter: 'blur(20px)',
        backgroundColor: 'rgba(255,255,255,.6)',
        // backgroundAttachment: "fixed",
        zIndex: -1,
      },
    },
    list: {
      width: 220,
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
    },

    listItem: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    headerCategorysTitle: {
      backgroundColor: theme.palette.primary.light,
      color: '#fff',
    },
    menuCategorys: {
      // marginTop: theme.spacing() * 6,
    },
    childListItem: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: theme.spacing() * 3,
    },
    grandChildListItem: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: theme.spacing() * 4,
    },
  }),
);
