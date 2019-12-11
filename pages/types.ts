/*
 * @Author: ERAYLEE
 * @Date: 2019-12-04 17:34:03
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-11 23:21:39
 */
import { Thunk, Action } from "easy-peasy";
import { IQueryArticles } from "../api/types";

export interface IHomeProps {
  articles: IArticle[];
}

export interface IArticle {
  id: number;
  title: string;
  description: string;
  isTop: boolean;
  markdown: string;
  html: string;
  allowComment: boolean;
  isDraft: boolean;
  cover: string;
  category: string;
  tags: number[];
  updatedAt: Date;
}

export interface IArticleModel {
  articles: IArticle[];
  setArticles: Action<IArticleModel, IArticle[]>;
  getArticles: Thunk<IArticleModel, IQueryArticles>;
}
