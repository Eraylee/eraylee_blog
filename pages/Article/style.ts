/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime: 2019-12-15 22:30:13
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
      padding: theme.spacing() * 4,
      backdropFilter: "blur(30px)",
      WebkitBackdropFilter: "blur(30px)",
      backgroundColor: "rgba(255,255,255,.5)"
    },
    meta: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing()
    },
    bottomItem: {
      display: "flex",
      alignItems: "center",
      marginRight: theme.spacing() * 2
    },
    icon: {
      marginRight: 4,
      fontSize: 12
    },
    text: {
      margin: 0,
      padding: 0,
      lineHeight: 1,
      fontSize: 12
    },
    container: {
      // maxWidth:960px
    }
  })
);
