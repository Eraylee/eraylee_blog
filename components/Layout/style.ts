/*
 * @Author: ERAYLEE
 * @Date: 2020-01-12 21:48:11
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-15 18:02:54
 */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      minHeight: `calc(100vh - ${theme.spacing() * 16}px)`,
    },
  }),
);
