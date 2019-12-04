/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime: 2019-12-05 00:42:08
 * @LastEditors: ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      width: "100%",
      height: "60vh",
      paddingTop: theme.spacing() * 7,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[6],
      borderRadius: 5,
      boxSizing: "border-box"
      // backgroundImage: `url("/static/wallhaven-lmrqdl.jpg")`,
      // backgroundSize: "cover",
      // backgroundPosition: "center"
    },
    main: {
      margin: "-100px auto 0 auto",
      maxWidth: 900,
      width: "100%",
      padding: 20,
      height: 800,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[10],
      borderRadius: 10
    }
  })
);
