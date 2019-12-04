/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime: 2019-12-04 17:24:48
 * @LastEditors: ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.secondary.main
    },
    content: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "inherit"
    },
    link: {
      "& > a": {
        color: "#fff"
      },
      "& a:hover": {
        textDecoration: "none"
      }
    },
    menu: {
      width: 220
    },
    listItem: {
      display: "flex",
      justifyContent: "center"
    }
  })
);
