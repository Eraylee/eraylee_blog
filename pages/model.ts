/*
 * @Author: ERAYLEE
 * @Date: 2019-12-04 17:34:03
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2019-12-18 08:58:33
 */
import { action, thunk } from 'easy-peasy';
import { IArticleModel } from './types';
// import { apiGetArticles } from "../api";

const ArticleModel: IArticleModel = {
  articles: [],
  setArticles: action((state, payload) => {
    state.articles = payload;
  }),
  getArticles: thunk(async (_actions, _payload) => {
    try {
      // const res = await apiGetArticles(payload);
      // return res.data.data;
    } catch (error) {
      console.error(error);
    }
  }),
};
export default ArticleModel;
