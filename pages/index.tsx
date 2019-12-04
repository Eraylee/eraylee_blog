import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./style";

const Home: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box>
      <Box className={classes.banner}>
        <Typography variant="h4" color="primary">
          ERAYLEE'S WEBSITE
        </Typography>
        <Typography variant="subtitle1" color="textPrimary">
          欢迎来到本网站
        </Typography>
      </Box>
      <Box className={classes.main}></Box>
    </Box>
  );
};

export default Home;
