import React from 'react';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import { HTMLRenderProps } from './types';
import { useStyles } from './style';
import { filterXSS } from 'xss';

const options = {
  onIgnoreTagAttr: (tag: string, name: string, value: string) =>
    tag === 'span' && name === 'class' ? `${name}='${value}'` : '',
};

export const HTMLRender: React.FC<HTMLRenderProps> = ({ html }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box
      className={classes.html}
      dangerouslySetInnerHTML={{ __html: filterXSS(html, options) }}
    />
  );
};
