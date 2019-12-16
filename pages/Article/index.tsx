import React from "react";
import { NextPage } from "next";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CategoryIcon from "@material-ui/icons/Category";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import moment from "moment";

import { useStyles } from "./style";
import { IArticleProps } from "./types";
import { IArticle } from "../../api/types";
import { apiGetArticle, apiGetFileByFid } from "../../api";

const FILE_API = process.env.API;
const Article: NextPage<IArticleProps> = props => {
  const article = props.article as IArticle;
  const theme = useTheme();
  Object.assign(theme, { cover: article.cover });
  const classes = useStyles(theme);
  return (
    <>
      <Box className={classes.cover}>
        <Container fixed>
          <Box className={classes.header}>
            <Typography variant="h4" color="primary">
              {article.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              className={classes.discription}
            >
              {article.description}
            </Typography>
            <Divider />
            <Box className={classes.meta}>
              <Box className={classes.bottomItem}>
                <AccessTimeIcon color="primary" className={classes.icon} />
                <Typography variant="body2" className={classes.text}>
                  更新时间：{article.updatedAt}
                </Typography>
              </Box>
              <Box className={classes.bottomItem}>
                <CategoryIcon color="primary" className={classes.icon} />
                <Typography variant="body2" className={classes.text}>
                  分类：{article.category.name}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container className={classes.container} fixed>
        <Paper>
          <Box
            className={classes.html}
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </Paper>
      </Container>
    </>
  );
};
Article.getInitialProps = async ({ query }) => {
  try {
    const res = await apiGetArticle(Number(query.id as string));

    const article = res.data;
    article.updatedAt = moment(article.updatedAt).format("YYYY-MM-DD");
    if (article.cover) {
      const coverRes = await apiGetFileByFid(article.cover);
      article.cover = FILE_API + coverRes.data.path + coverRes.data.fileName;
    }
    return { article };
  } catch (error) {
    console.log(error);
    return { article: {} };
  }
};
export default Article;
