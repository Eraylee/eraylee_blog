import React from 'react';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './style';

export const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box className={classes.footer}>
      <Box className={classes.copyright}>
        <Typography color='primary'>鄂ICP备18019320号-2</Typography>
        <Divider orientation='vertical' />
        <Typography color='primary'>2020-2020</Typography>
      </Box>
    </Box>
  );
};
