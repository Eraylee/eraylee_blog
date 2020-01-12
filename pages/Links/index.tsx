import React from 'react';
import Error from 'next/error';
import { NextPage } from 'next';
// import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

import { apiGetLinks } from '../../api';
import { LinksPageProps } from './types';
import { useStyles } from './style';
import { Link } from '../../api/types';
const BASE_URL = process.env.API;
const LinksPage: NextPage<LinksPageProps> = props => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const links = props.links as Link[];

  if (props.error) {
    return <Error statusCode={props.error.code} title={props.error.message} />;
  }

  return (
    <Container maxWidth='md' fixed>
      <Paper className={classes.content}>
        {links.map(v => (
          <Card key={v.id}>
            <Avatar
              alt='Remy Sharp'
              src={BASE_URL + v.avatar.path + v.avatar.fileName}
            />
          </Card>
        ))}
      </Paper>
    </Container>
  );
};

LinksPage.getInitialProps = async () => {
  try {
    const res = await apiGetLinks();
    const links = res.data.data;
    return { links };
  } catch (error) {
    return { error };
  }
};
export default LinksPage;
