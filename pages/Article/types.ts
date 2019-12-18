/*
 * @Author: ERAYLEE
 * @Date: 2019-12-04 17:34:03
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2019-12-18 09:04:01
 */
// import { Thunk, Action } from "easy-peasy";
import { IArticle } from '../../api/types';
import { Theme } from '@material-ui/core/styles';

export interface IArticleProps {
  article?: IArticle;
  error?: {
    code: number;
    message: string;
  };
}

export interface ITheme extends Theme {
  cover: string;
}
