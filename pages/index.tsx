import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./style";

const Home: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box>
      <Box className={classes.banner}>
        <Typography variant="h4" color="primary" className={classes.welcome}>
          ERAYLEE'S WEBSITE
        </Typography>
        <Typography variant="h6" color="textSecondary">
          记录博客，分享生活
        </Typography>
      </Box>
      <Container maxWidth="md" className={classes.container}>
        <Box className={classes.main}></Box>
      </Container>
    </Box>
  );
};

export default Home;
