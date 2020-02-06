/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-02-06 19:32:58
 */
import { _get, _post } from './server';
import {
  QueryParams,
  QueryParamsArticles,
  Result,
  FileRes,
  Tag,
  Link,
  PageResult,
  Article,
  Category,
  Comment,
  CommentInput,
  SpecialPage,
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
/**
 * 获取评论
 * @param id
 */
export const apiGetComments = (
  id: string,
  data: QueryParams,
): Promise<PageResult<Comment[]>> => {
  return _get(`/comment/byArticleId/${id}`, data);
};
/**
 * 新增评论
 * @param data
 */
export const apiCreateComment = (
  data: CommentInput,
): Promise<Result<Comment[]>> => {
  return _post(`/comment`, data);
};
/**
 * 获取特殊页面
 * @param type
 */
export const apiGetSpecialPage = (
  type: 'about' | 'message',
): Promise<Result<SpecialPage>> => {
  return _get(`/article/special`, {
    type,
  });
};
