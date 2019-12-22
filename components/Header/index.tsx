/*
 * @Author: your name
 * @Date: 2019-12-02 12:50:13
 * @LastEditTime : 2019-12-21 17:55:15
 * @LastEditors  : ERAYLEE
 * @Description: In User Settings Edit
 * @FilePath: \eraylee-blog\components\Header\index.tsx
 */
import React, { useState, useCallback, useEffect } from 'react';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';

import { Menu } from './Menu';
import { Link } from '../Link';
import { Button } from '../Button';
import { useStyles } from './style';
import { Category } from './Category';
import { menuConfig } from './menuConfig';
import { useStoreActions, useStoreState } from '../../store';

export const Header = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });
  Object.assign(theme, { trigger });
  const classes = useStyles(theme);
  const [open, setOpen] = useState(false);
  const categorys = useStoreState(state => state.header.categorys);
  const getCategorys = useStoreActions(action => action.header.getCategorys);
  useEffect(() => {
    getCategorys();
  }, []);
  const handleToTop = useCallback(event => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);
  return (
    <>
      <AppBar
        position='fixed'
        color='primary'
        elevation={trigger ? 4 : 0}
        className={classes.appBar}
      >
        <Toolbar className={classes.content}>
          <Typography variant='h6' className={classes.link}>
            <Link href='/'>ERAYLEE</Link>
          </Typography>
          <Hidden implementation='css' xsDown>
            <Category categorys={categorys} />
            {menuConfig.map(v => (
              <Button variant='text' key={v.key}>
                <Typography variant='subtitle1' className={classes.link}>
                  <Link href={v.href}>{v.label}</Link>
                </Typography>
              </Button>
            ))}
          </Hidden>
          <Hidden implementation='css' smUp>
            <IconButton
              edge='end'
              color='inherit'
              size='medium'
              onClick={__ => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              onClose={__ => setOpen(false)}
              open={open}
              categorys={categorys}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Box position='fixed' bottom={26} right={26} role='presentation'>
        <Zoom in={trigger}>
          <Fab color='secondary' size='small' onClick={handleToTop}>
            <KeyboardArrowUpIcon color='primary' />
          </Fab>
        </Zoom>
      </Box>
    </>
  );
};
