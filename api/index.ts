/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-13 09:09:15
 */
import { _get, _post } from "./server";
import { IQueryArticles, IResult, IFile, IPageResult, IArticle } from "./types";

/**
 * 获取分类树
 */
export const apiGetCategoryTree = async () => {
  return await _get(`/category`);
};
/**
 * 通过id 查询标签
 * @param id
 */
export const apiGetTag = async (id: number) => {
  return await _get(`/tag/${id}`);
};
/**
 * 查询标签
 * @param id
 */
export const apiGetTags = async () => {
  return await _get(`/tag`);
};
/**
 * 查询文章
 * @param data
 */
export const apiGetArticles = async (data: IQueryArticles) => {
  return (await _get(`/article`, data)) as IPageResult<IArticle[]>;
};
/**
 * 通过id 查询文章
 * @param id
 */
export const apiGetArticle = async (id: number) => {
  return (await _get(`/article/${id}`)) as IResult<IArticle>;
};

/**
 * 通过fid查询文件
 * @param fid
 */
export const apiGetFileByFid = async (fid: string) => {
  return (await _get(`/file/${fid}`)) as IResult<IFile>;
};
