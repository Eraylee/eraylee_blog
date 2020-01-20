import React from 'pages/links/node_modules/react';
import _ from 'pages/links/node_modules/lodash';
import Error from 'pages/links/node_modules/next/error';
import { NextPage } from 'pages/links/node_modules/next';
import Paper from 'pages/links/node_modules/@material-ui/core/Paper';
import Grid from 'pages/links/node_modules/@material-ui/core/Grid';
import Card from 'pages/links/node_modules/@material-ui/core/Card';
import Box from 'pages/links/node_modules/@material-ui/core/Box';
import Link from 'pages/links/node_modules/@material-ui/core/Link';
import { useTheme } from 'pages/links/node_modules/@material-ui/core/styles';
import Container from 'pages/links/node_modules/@material-ui/core/Container';
import Avatar from 'pages/links/node_modules/@material-ui/core/Avatar';
import Typography from 'pages/links/node_modules/@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from 'pages/links/node_modules/@material-ui/core/styles';

import { apiGetLinks } from '../../api';
import { Link as LinkRes } from '../../api/types';

export interface LinksPageProps {
  links?: LinkRes[][];
  error?: {
    code: number;
    message: string;
  };
}

const BASE_URL = process.env.API;

const LinksPage: NextPage<LinksPageProps> = props => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const links = props.links as LinkRes[][];

  if (props.error) {
    return <Error statusCode={props.error.code} title={props.error.message} />;
  }

  return (
    <Container maxWidth='md' fixed>
      <Paper className={classes.content}>
        {links.map((v, k) => (
          <Grid container key={k} spacing={2}>
            {v.map(i => (
              <Grid item xs={12} md={3} key={i.id}>
                <Paper className={classes.avatarPaper}>
                  <Card key={i.id} className={classes.avatarCard}>
                    <Avatar
                      src={BASE_URL + i.avatar.path + i.avatar.fileName}
                      className={classes.avatar}
                    />
                    <Box
                      display='flex'
                      alignItems='center'
                      flexDirection='column'
                      pt={5}
                      pb={2}
                    >
                      <Link href={i.url}>{i.owner}</Link>
                      <Typography variant='overline' component='p'>
                        {i.description}
                      </Typography>
                    </Box>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ))}
      </Paper>
    </Container>
  );
};

LinksPage.getInitialProps = async () => {
  try {
    const res = await apiGetLinks();
    const links = _.chunk(res.data.data, 4);
    return { links };
  } catch (error) {
    return { error };
  }
};
export default LinksPage;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: '60px 15px',
    },
    avatarPaper: {
      position: 'relative',
    },
    avatarCard: {
      // boxSizing: 'border-box',
      marginTop: theme.spacing() * 5,
    },
    avatar: {
      position: 'absolute',
      top: -theme.spacing() * 4,
      left: '50%',
      marginLeft: -theme.spacing() * 4,
      width: theme.spacing() * 8,
      height: theme.spacing() * 8,
      boxShadow: theme.shadows[5],
    },
  }),
);
