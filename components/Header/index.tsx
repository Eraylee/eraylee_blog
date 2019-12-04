/*
 * @Author: your name
 * @Date: 2019-12-02 12:50:13
 * @LastEditTime: 2019-12-04 22:25:53
 * @LastEditors: ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\index.tsx
 */
import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import { Menu } from "./Menu";
import { Link } from "../Link";
import { Button } from "../Button";
import { useStyles } from "./style";
import { menuConfig } from "./menuConfig";

export const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.content}>
        <Typography variant="h6" className={classes.link}>
          <Link href="/">ERAYLEE</Link>
        </Typography>
        <Hidden implementation="css" xsDown>
          {menuConfig.map(v => (
            <Button variant="text" key={v.key}>
              <Typography variant="subtitle1" className={classes.link}>
                <Link href={v.href}>{v.label}</Link>
              </Typography>
            </Button>
          ))}
        </Hidden>
        <Hidden implementation="css" smUp>
          <IconButton
            edge="end"
            color="inherit"
            size="medium"
            onClick={__ => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Menu onClose={__ => setOpen(false)} open={open} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
