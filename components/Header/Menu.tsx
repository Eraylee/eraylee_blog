import React, { useState, useEffect, useCallback } from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

import { Link } from '../Link';

import { useStyles } from './style';
import { IMenuProps } from './types';
import { menuConfig } from './menuConfig';

export const Menu = ({ categorys, ...props }: IMenuProps) => {
  const [expand, setExpand] = useState<boolean[]>([]);
  const theme = useTheme();
  const classes = useStyles(theme);
  useEffect(() => {
    setExpand([false, ...categorys.map(__ => false)]);
  }, [categorys]);
  const handleClick = useCallback(
    (index: number) => {
      const originalExpand = [...expand];
      originalExpand.splice(index, 1, !originalExpand[index]);
      setExpand(originalExpand);
    },
    [expand],
  );
  return (
    <Drawer
      {...props}
      anchor='right'
      transitionDuration={380}
      classes={{ paper: classes.paper, modal: classes.modal }}
    >
      <Box className={classes.menu}>
        <List className={classes.list}>
          <Box p={1} display='flex' justifyContent='flex-end'>
            <IconButton
              edge='end'
              size='small'
              onClick={props.onClose as React.MouseEventHandler}
            >
              <CloseOutlinedIcon color='primary' />
            </IconButton>
          </Box>
          {menuConfig.map(v => (
            <ListItem button divider key={v.key} className={classes.listItem}>
              <Typography color='primary' variant='overline'>
                <Link href={v.href}> {v.label}</Link>
              </Typography>
            </ListItem>
          ))}
          <ListItem
            button
            divider
            onClick={__ => handleClick(0)}
            className={classes.listItem}
          >
            <Typography color='primary' variant='overline'>
              分类
            </Typography>
            {expand[0] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={expand[0]} timeout='auto' unmountOnExit>
            {categorys.map((v, k) => (
              <div key={v.key}>
                <ListItem
                  button
                  divider
                  key={v.key}
                  onClick={__ => handleClick(k + 1)}
                  className={classes.childListItem}
                >
                  <Typography color='primary' variant='overline'>
                    {v.name}
                  </Typography>
                  {expand[k + 1] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {v.children &&
                  v.children.map(i => (
                    <Collapse
                      in={expand[k + 1]}
                      key={i.key}
                      timeout='auto'
                      unmountOnExit
                    >
                      <ListItem
                        button
                        divider
                        className={classes.grandChildListItem}
                      >
                        <Typography color='primary' variant='overline'>
                          {i.name}
                        </Typography>
                      </ListItem>
                    </Collapse>
                  ))}
              </div>
            ))}
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};
