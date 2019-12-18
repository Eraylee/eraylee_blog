/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime : 2019-12-18 08:48:41
 * @LastEditors  : ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ITheme } from './types';

export const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    cover: {
      display: 'flex',
      alignItems: 'flex-end',
      width: '100%',
      height: 400,
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `url(${theme.cover})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    header: {
      padding: theme.spacing() * 3,
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255,255,255,.7)',
    },
    discription: {
      paddingTop: theme.spacing(),
    },
    meta: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(),
    },
    bottomItem: {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing() * 3,
    },
    icon: {
      marginRight: 4,
      fontSize: 10,
    },
    text: {
      margin: 0,
      padding: 0,
      lineHeight: 1,
      fontSize: 10,
      color: theme.palette.secondary.main,
    },
    container: {
      boxSizing: 'border-box',
    },
    html: {
      boxSizing: 'border-box',
      padding: theme.spacing() * 3,
      wordWrap: 'break-word',
      '& h1,h2,h3,h4,h5,h6': {
        color: theme.palette.primary.light,
      },
      '& blockquote': {
        // width: '100%',
        margin: 5,
        boxSizing: 'border-box',
        borderLeft: '2px solid #009688',
        padding: 8,
        quotes: 'none',
        background: 'none repeat scroll 0 0 rgba(102, 128, 153, 0.08)',
      },
      '& a': {
        color: '#0052d9',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '& img': {
        width: '60%',
        display: 'block',
        margin: '0 auto',
        boxShadow: theme.shadows[2],
      },
      '& pre': {
        padding: theme.spacing() * 2,
        overflow: 'auto',
        borderRadius: '4px',
        backgroundColor: '#272c34',
        boxShadow: theme.shadows[15],
      },
      '& code': {
        fontFamily:
          "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        color: ' #fff',
        fontSize: theme.typography.caption.fontSize,
      },
      '& strong,b': {
        color: '#bf360c',
      },
      '& ul,ol': {
        margin: 0,
        paddingLeft: theme.spacing() * 2,
      },
      '& table': {
        borderCollapse: 'collapse',
        margin: '0 auto',
        '& thead': {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.text.primary,
        },
        '& tr': {
          borderTop: '1px solid #ccc',
          '& th ,td': {
            border: '1px solid #ccc',
            padding: ' 5px 10px',
          },
        },
      },
    },
  }),
);
