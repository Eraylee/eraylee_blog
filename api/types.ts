/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2019-12-18 12:58:30
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

export interface IQuery {
  page?: number;
  limit?: number;
}

export interface IBaseResult {
  code: number;
  message: string;
}

export interface IResult<T> extends IBaseResult {
  data: T;
}

export interface IPageResult<T> extends IBaseResult {
  data: { data: T; page: number; total: number };
}

export interface IQueryArticles extends IQuery {
  title?: string;
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
  cover?: string;
  category: ICategory;
  tags: Itag[];
  createdAt: string;
  updatedAt: string;
}

export interface IFile {
  id: number;
  path: string;
  originalName: string;
  fileName: string;
  size: number;
  fieldName: string;
  mimeType: string;
  fid: string;
  createdAt: string;
  updatedAt: string;
}

export interface Itag {
  id: number;
  name: string;
  color: string;
}

export interface ICategory {
  id: number;
  name: string;
  code: string;
  enabled: boolean;
}
