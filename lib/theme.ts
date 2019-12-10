/*
 * @Author: ERAYLEE
 * @Date: 2019-12-04 17:34:03
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-10 09:02:12
 */
import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#004d40"
    },
    secondary: {
      main: "#00acc1"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fafafa",
      paper: "#fff"
    }
  }
});

export default theme;
