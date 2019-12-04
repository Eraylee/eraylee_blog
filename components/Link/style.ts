/*
 * @Author: ERAYLEE
 * @Date: 2019-12-03 14:07:46
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-03 23:44:19
 */
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ITheme } from "./types";

export const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    link: {
      color: theme.color || theme.palette.primary.main,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  })
);
