import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import { useStyles } from "./style";

const Home: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box>
      <Box className={classes.banner}>
        <Typography variant="h4" color="primary" className={classes.welcome}>
          ERAYLEE'S BLOG
        </Typography>
        {/* <Typography variant="h6" color="textSecondary">
          记录博客，分享生活
        </Typography> */}
      </Box>
      <Container maxWidth="md" className={classes.container}>
        <Box className={classes.main}>
          <Card>
            <CardActionArea className={classes.card}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <CardMedia
                    className={classes.media}
                    image="../../static/wallhaven-lmrqdl.jpg"
                    title="Contemplative Reptile"
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5">
                      测试文章标题
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.time}
                    >
                      <AccessTimeIcon
                        color="primary"
                        fontSize="small"
                        className={classes.timeIcon}
                      />
                      <Typography gutterBottom variant="body2">
                        2018-12-12
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
