/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime: 2019-12-16 23:57:24
 * @LastEditors: ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ITheme } from "./types";

export const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    cover: {
      display: "flex",
      alignItems: "flex-end",
      width: "100%",
      height: 400,
      backgroundColor: theme.palette.secondary.main,
      backgroundImage: `url(${theme.cover})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    },
    header: {
      padding: theme.spacing() * 3,
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      backgroundColor: "rgba(255,255,255,.7)"
    },
    discription: {
      paddingTop: theme.spacing()
    },
    meta: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing()
    },
    bottomItem: {
      display: "flex",
      alignItems: "center",
      marginRight: theme.spacing() * 3
    },
    icon: {
      marginRight: 4,
      fontSize: 14
    },
    text: {
      margin: 0,
      padding: 0,
      lineHeight: 1,
      fontSize: 14
    },
    container: {
      boxSizing: "border-box"
    },
    html: {
      boxSizing: "border-box",
      padding: theme.spacing() * 2,
      wordWrap: "break-word",
      "& pre": {
        padding: theme.spacing() * 2,
        overflow: "auto",
        borderRadius: "4px",
        backgroundColor: "#272c34",
        boxShadow: theme.shadows[15]
      },
      "& code": {
        fontFamily:
          "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        color: " #fff",
        fontSize: theme.typography.caption.fontSize
      }
    }
  })
);
