/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-30 19:47:37
 */
import { _get, _post } from './server';
import {
  QueryParamsArticles,
  Result,
  FileRes,
  Tag,
  Link,
  PageResult,
  Article,
  Category,
} from './types';

/**
 * 获取分类树
 */
export const apiGetCategorys = (): Promise<Result<Category[]>> => {
  return _get(`/category/all`);
};
/**
 * 通过id 查询标签
 * @param id
 */
export const apiGetTag = (id: string): Promise<Result<Tag>> => {
  return _get(`/tag/${id}`);
};
/**
 * 查询标签
 * @param
 */
export const apiGetTags = (): Promise<PageResult<Tag[]>> => {
  return _get(`/tag`);
};
/**
 * 查询文章
 * @param data
 */
export const apiGetArticles = (
  data: QueryParamsArticles,
): Promise<PageResult<Article[]>> => {
  return _get(`/article`, data);
};
/**
 * 通过id 查询文章
 * @param id
 */
export const apiGetArticle = (id: string): Promise<Result<Article>> => {
  return _get(`/article/${id}`);
};

/**
 * 通过fid查询文件
 * @param fid
 */
export const apiGetFileByFid = (fid: string): Promise<Result<FileRes>> => {
  return _get(`/file/${fid}`);
};

/**
 * 获取友联
 */
export const apiGetLinks = (): Promise<PageResult<Link[]>> => {
  return _get(`/link`);
};
