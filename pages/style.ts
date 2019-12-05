/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime: 2019-12-06 00:26:07
 * @LastEditors: ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      width: "100%",
      height: "46vh",
      paddingTop: theme.spacing() * 7,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[6],
      borderRadius: 5,
      boxSizing: "border-box"
    },
    container: {
      marginTop: -theme.spacing() * 10,
      padding: -theme.spacing() * 2
    },
    main: {
      // maxWidth: 900,
      // width: "100%",
      // padding: 20,
      height: 800,
      backgroundColor: "rgba(255,255,255,.7)",
      backdropFilter: "blur(30px)",
      boxShadow: theme.shadows[10],
      borderRadius: 10
    },
    welcome: {
      paddingBottom: theme.spacing() * 2
    }
  })
);
