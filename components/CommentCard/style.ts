/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime : 2020-02-03 13:36:13
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
    },
    content: {
      paddingTop: theme.spacing(),
    },
    loading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing() * 2,
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
    html: {
      boxSizing: 'border-box',
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
