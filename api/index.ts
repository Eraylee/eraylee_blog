/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-12 21:33:23
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
export const apiGetCategorys = async (): Promise<Result<Category[]>> => {
  return await _get(`/category/all`);
};
/**
 * 通过id 查询标签
 * @param id
 */
export const apiGetTag = async (id: string): Promise<Result<Tag>> => {
  return await _get(`/tag/${id}`);
};
/**
 * 查询标签
 * @param
 */
export const apiGetTags = async (): Promise<PageResult<Tag[]>> => {
  return await _get(`/tag`);
};
/**
 * 查询文章
 * @param data
 */
export const apiGetArticles = async (
  data: QueryParamsArticles,
): Promise<PageResult<Article[]>> => {
  return await _get(`/article`, data);
};
/**
 * 通过id 查询文章
 * @param id
 */
export const apiGetArticle = async (id: string): Promise<Result<Article>> => {
  return await _get(`/article/${id}`);
};

/**
 * 通过fid查询文件
 * @param fid
 */
export const apiGetFileByFid = async (
  fid: string,
): Promise<Result<FileRes>> => {
  return await _get(`/file/${fid}`);
};

/**
 * 获取友联
 */
export const apiGetLinks = async (): Promise<PageResult<Link[]>> => {
  return await _get(`/link`);
};
