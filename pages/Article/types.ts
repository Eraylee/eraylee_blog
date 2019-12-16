/*
 * @Author: ERAYLEE
 * @Date: 2019-12-04 17:34:03
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-16 23:00:26
 */
// import { Thunk, Action } from "easy-peasy";
import { IArticle } from "../../api/types";
import { Theme } from "@material-ui/core/styles";

export interface IArticleProps {
  article: IArticle | {};
}

export interface ITheme extends Theme {
  cover: string;
}
