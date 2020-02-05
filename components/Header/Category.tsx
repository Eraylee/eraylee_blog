import React, { useCallback } from 'react';
import { Button } from '../Button';
import Router from 'next/router';
import { ICategoryProps } from './types';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './style';

const Category: React.FC<ICategoryProps> = ({ categorys }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );

  const handleClose = useCallback((categoryId?: string) => {
    setAnchorEl(null);
    categoryId && Router.push('/category/[id]', `/category/${categoryId}`);
  }, []);

  return categorys.length ? (
    <>
      <Button onClick={handleClick} variant='text'>
        <Typography variant='subtitle1' className={classes.link}>
          分类
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={__ => handleClose()}
      >
        {categorys.map(v => (
          <div key={v.key}>
            <Typography
              variant='caption'
              align='center'
              component='p'
              className={classes.headerCategorysTitle}
            >
              {v.name}
            </Typography>
            <Divider />
            {v.children &&
              v.children.map(i => (
                <React.Fragment key={i.key}>
                  <MenuItem onClick={__ => handleClose(i.key)}>
                    {i.name}
                  </MenuItem>
                  <Divider />
                </React.Fragment>
              ))}
          </div>
        ))}
      </Menu>
    </>
  ) : null;
};
export { Category };
