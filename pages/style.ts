/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime: 2019-12-09 00:16:47
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
      paddingTop: theme.spacing() * 24,
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.main,
      // backgroundImage:
      //   'url("https://www.transparenttextures.com/patterns/dust.png")',
      // background: `linear-gradient( 180deg, ${theme.palette.secondary.main} 10%, #1D6FA3 100%)`,
      // boxShadow: theme.shadows[6],
      borderRadius: 8,
      boxSizing: "border-box"
    },
    container: {
      marginTop: -theme.spacing() * 20,
      padding: theme.spacing() * 2
    },
    main: {
      height: 800,
      backgroundColor: theme.palette.background.paper
      // padding: 8
    },
    welcome: {
      paddingBottom: theme.spacing() * 2
    },
    card: {
      // display: "flex"
    },
    media: {
      width: "100%",
      height: 200
    },
    content: {
      flex: 1
    },
    time: {
      padding: "8px 0",
      margin: 0
    },
    timeIcon: {
      marginRight: 8
    }
  })
);
