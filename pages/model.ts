import { action } from "easy-peasy";
import { IArticleModel } from "./types";
const ArticleModel: IArticleModel = {
  article: {
    name: "312321"
  },
  setArticles: action((state, payload) => {
    state.article = payload;
  })
};
export default ArticleModel;
