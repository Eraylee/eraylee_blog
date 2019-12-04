/*
 * @Author: ERAYLEE
 * @Date: 2019-12-04 17:34:03
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-04 21:48:09
 */
import { Action } from "easy-peasy";
import { Theme } from "@material-ui/core/styles";

export interface Itheme extends Theme {
  bg?: string;
}

export interface IArticle {
  name: string;
}

export interface IArticleModel {
  article: IArticle;
  setArticles: Action<IArticleModel, IArticle>;
}
