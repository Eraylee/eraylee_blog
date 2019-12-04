import React from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import { IMenuProps } from "./types";
import { menuConfig } from "./menuConfig";
import { useStyles } from "./style";

export const Menu = (props: IMenuProps) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Drawer {...props} anchor="right">
      <List className={classes.menu}>
        <Box p={1}>
          <IconButton
            edge="end"
            size="small"
            onClick={props.onClose as React.MouseEventHandler}
          >
            <CloseOutlinedIcon color="secondary" />
          </IconButton>
        </Box>
        {menuConfig.map(v => (
          <ListItem button divider key={v.key} className={classes.listItem}>
            <Typography color="secondary" variant="overline">
              {v.label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
