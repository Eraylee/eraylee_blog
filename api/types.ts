/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-12 21:28:44
 */
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH';

export type Request<T> = (method: Method, url: string, data: any) => T;

export interface QueryParams {
  page?: number;
  limit?: number;
}

export interface BaseResult {
  code: number;
  message: string;
}

export interface Result<T> extends BaseResult {
  data: T;
}

export interface PageResult<T> extends BaseResult {
  data: { data: T; page: number; total: number };
}

export interface QueryParamsArticles extends QueryParams {
  title?: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  isTop: boolean;
  markdown: string;
  html: string;
  allowComment: boolean;
  user: User;
  isDraft: boolean;
  cover: FileRes;
  category: Category;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
}

export interface FileRes {
  id: string;
  path: string;
  originalName: string;
  fileName: string;
  size: number;
  fieldName: string;
  mimeType: string;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  parentId?: string;
}
export interface User {
  id?: string;
  username: string;
  nickname: string;
  role?: string;
}
export interface Link {
  id: string;
  owner: string;
  url: string;
  description: string;
  avatar: FileRes;
}
