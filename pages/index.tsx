import React from "react";
import { NextPage } from "next";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "../components/Link";
import { useStyles } from "./style";
import { IHomeProps } from "./types";
import { apiGetArticles } from "../api";
// import { useStoreState, useStoreActions } from "../store";

// const data = [
//   {
//     title: "测试标题",
//     description:
//       "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
//     crreateAt: "2018-12-21",
//     tags: ["前端", "react"]
//   },
//   {
//     title: "测试标题",
//     description:
//       "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
//     crreateAt: "2018-12-21",
//     tags: ["前端", "react"]
//   }
// ];

const Home: NextPage<IHomeProps> = props => {
  const theme = useTheme();
  const classes = useStyles(theme);
  // const articles = useStoreState(state => state.article.articles);
  // const getArticles = useStoreActions(state => state.article.getArticles);
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
        <Box>
          {props.articles.map((v, k) => (
            <Card key={k} className={classes.card}>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="../../static/wallhaven-lmrqdl.jpg"
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                </Grid>

                <Grid item xs={12} sm={8}>
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5">
                      <Link href="/">{v.title}</Link>
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
                      <Typography
                        gutterBottom
                        variant="body2"
                        className={classes.timeText}
                      >
                        {v.createAt}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {v.description}
                    </Typography>

                    <Box className={classes.tagContent}>
                      {v.tags.map((_v, _k) => (
                        <Chip
                          className={classes.tags}
                          size="small"
                          key={_k}
                          label={_v}
                          onClick={() => console.log(111)}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
Home.getInitialProps = async () => {
  try {
    const res = await apiGetArticles({});
    return res.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export default Home;
