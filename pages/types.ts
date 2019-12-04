import { Action } from "easy-peasy";

export interface IArticle {
  name: string;
}

export interface IArticleModel {
  article: IArticle;
  setArticles: Action<IArticleModel, IArticle>;
}
