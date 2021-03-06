import React from 'react';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from '../Link';
import { useStyles } from './style';

export const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box className={classes.footer}>
      <Box className={classes.copyright}>
        <Typography variant='caption' color='primary'>
          ©eraylee.com.
        </Typography>
        <Divider orientation='vertical' />
        <Typography variant='caption' color='primary'>
          ❤ Made by ERAYLEE
        </Typography>
      </Box>
      <Link href='http://www.beian.miit.gov.cn'>鄂ICP备18019320号-2</Link>
    </Box>
  );
};
