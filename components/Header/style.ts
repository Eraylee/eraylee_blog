/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime: 2019-12-06 00:24:13
 * @LastEditors: ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    appBar: {},
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
    paper: {
      backgroundColor: "rgba(255,255,255,.8)",
      backdropFilter: "blur(30px)"
    },
    modal: {
      "& > .MuiBackdrop-root": {
        backgroundColor: "rgba(0,0,0,0)"
      }
    },
    listItem: {
      display: "flex",
      justifyContent: "center"
    }
  })
);
