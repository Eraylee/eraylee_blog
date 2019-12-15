import React from "react";
import { NextPage } from "next";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CategoryIcon from "@material-ui/icons/Category";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CardActionArea from "@material-ui/core/CardActionArea";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import { useStyles } from "./style";
import { IArticleProps } from "./types";
import { apiGetArticle, apiGetFileByFid } from "../../api";

const FILE_API = process.env.API;

const Article: NextPage<IArticleProps> = props => {
  const { article } = props;
  const theme = useTheme();
  Object.assign(theme, { cover: article.cover });
  const classes = useStyles(theme);
  return (
    <>
      <Box className={classes.cover}>
        <Container fixed>
          <Box className={classes.header}>
            <Typography variant="h2" color="primary">
              {article.title}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              {article.description}
            </Typography>
            <Box className={classes.meta}>
              <Box className={classes.bottomItem}>
                <AccessTimeIcon color="primary" className={classes.icon} />
                <Typography variant="body2" className={classes.text}>
                  {props.article.updatedAt}
                </Typography>
              </Box>
              <Box className={classes.bottomItem}>
                <ChatBubbleOutlineIcon
                  color="primary"
                  className={classes.icon}
                />
                <Typography variant="body2" className={classes.text}>
                  {12}
                </Typography>
              </Box>
              <Box className={classes.bottomItem}>
                <CategoryIcon color="primary" className={classes.icon} />
                <Typography variant="body2" className={classes.text}>
                  {props.article.category.name}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container className={classes.container} fixed>
        <Paper></Paper>
      </Container>
    </>
  );
};
Article.getInitialProps = async ({ query }) => {
  try {
    const res = await apiGetArticle(Number(query.id as string));
    const article = res.data;
    if (article.cover) {
      const coverRes = await apiGetFileByFid(article.cover);
      article.cover = FILE_API + coverRes.data.path + coverRes.data.fileName;
    }
    return { article };
  } catch (error) {
    console.log(error);
    return {};
  }
};
export default Article;
