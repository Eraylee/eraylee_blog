import React from 'react';
import _ from 'lodash';
import Error from 'next/error';
import { NextPage } from 'next';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
        <Typography variant='h5' color='primary'>
          欢迎各位大佬与我互加友链
        </Typography>

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
      padding: theme.spacing() * 2,
      margin: theme.spacing() * 2,
      boxSizing: 'border-box',
      textAlign: 'center',
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
