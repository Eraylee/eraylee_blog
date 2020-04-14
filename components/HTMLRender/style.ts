/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime: 2020-04-14 16:37:56
 * @LastEditors: ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    html: {
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      '& h1,h2,h3,h4,h5,h6': {
        color: theme.palette.primary.light,
      },
      '& p': {
        padding: 0,
        margin: 0,
        '& code': {
          fontFamily:
            "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          color: theme.palette.text.primary,
          padding: '0 4px',
          background: 'none repeat scroll 0 0 rgba(102, 128, 153, 0.08)',
          fontSize: theme.typography.caption.fontSize,
        },
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
        color: theme.palette.secondary.light,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '& img': {
        width: '60%',
        display: 'block',
        margin: '8px auto',
        boxShadow: theme.shadows[2],
      },
      '& pre': {
        padding: theme.spacing() * 2,
        overflow: 'auto',
        borderRadius: '4px',
        backgroundColor: '#2d2d2d',
        boxShadow: theme.shadows[2],
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
