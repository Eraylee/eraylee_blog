/*
 * @Author: your name
 * @Date: 2019-12-02 22:59:49
 * @LastEditTime: 2019-12-10 12:58:44
 * @LastEditors: ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\style.ts
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      width: "100%",
      height: "56vh",
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
      marginTop: -theme.spacing() * 18,
      padding: 0,
      boxSizing: "border-box"
    },
    welcome: {
      paddingBottom: theme.spacing() * 2
    },
    card: {
      margin: theme.spacing() * 2,
      boxSizing: "border-box",
      "&:hover": {
        boxShadow: theme.shadows[5]
      }
    },
    media: {
      width: "100%",
      height: 210
    },
    content: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: "border-box",
      height: "100%"
    },
    time: {
      padding: "8px 0"
    },
    timeIcon: {
      marginRight: 8
    },
    timeText: {
      margin: 0,
      padding: 0
    },
    tagContent: {
      paddingTop: 8
    },
    tags: {
      marginRight: 8
    }
  })
);
