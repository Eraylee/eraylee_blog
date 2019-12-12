import React from "react";
import { NextPage } from "next";
import Box from "@material-ui/core/Box";
import moment from "moment";
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
import { apiGetArticles, apiGetFileByFid } from "../api";

const FILE_API = process.env.API;

const Home: NextPage<IHomeProps> = props => {
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
        <Box>
          {props.articles &&
            props.articles.map((v, k) => (
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
                          {v.updatedAt}
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
                        {v.tags &&
                          v.tags.map((_v, _k) => (
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
    const data = res.data.data;
    const articles = [] as any[];
    for (let item of data) {
      let cover;
      if (item.cover) {
        const coverRes = await apiGetFileByFid(item.cover);
        cover = FILE_API + coverRes.data.path + coverRes.data.fileName;
      }
      const artcle = Object.assign({}, data, {
        updatedAt: moment(item.updatedAt).format("YYYY-MM-DD"),
        cover
      });
      articles.push(artcle);
    }
    console.log(articles);
    return { articles };
  } catch (error) {
    return { articles: [] };
  }
};
export default Home;
