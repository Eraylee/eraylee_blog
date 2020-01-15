import React, { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './style';

export const Layout = (props: PropsWithChildren<{}>) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <Header />
      <Toolbar id='back-to-top-anchor' />
      <Box className={classes.main}>{props.children}</Box>
      <Footer />
    </>
  );
};
