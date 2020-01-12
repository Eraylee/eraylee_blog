/*
 * @Author: ERAYLEE
 * @Date: 2019-12-04 17:34:03
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-10 09:08:49
 */
// import { Thunk, Action } from "easy-peasy";
import { Article } from '../../api/types';
import { Theme } from '@material-ui/core/styles';

export interface ArticleProps {
  article?: Article;
  error?: {
    code: number;
    message: string;
  };
}

export interface ITheme extends Theme {
  cover: string;
}
