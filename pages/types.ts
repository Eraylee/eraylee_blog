/*
 * @Author: ERAYLEE
 * @Date: 2019-12-04 17:34:03
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2019-12-18 09:03:52
 */
import { Thunk, Action } from 'easy-peasy';
import { IQueryArticles, IArticle } from '../api/types';

export interface IHomeProps {
  articles: IArticle[];
}

export interface IArticleModel {
  articles: IArticle[];
  setArticles: Action<IArticleModel, IArticle[]>;
  getArticles: Thunk<IArticleModel, IQueryArticles>;
}
