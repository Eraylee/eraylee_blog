/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-10 22:12:56
 */
export interface IResult {
  code: number;
  data: any;
  message: string;
}

export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH";

export interface IQuery {
  page?: number;
  limit?: number;
}

export interface IQueryArticles extends IQuery {
  title?: string;
}
