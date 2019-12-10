/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-10 22:12:41
 */
import { _get, _post, _put } from "./server";
import { IQueryArticles } from "./types";

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
  return await _get(`/article`, data);
};
/**
 * 通过id 查询文章
 * @param id
 */
export const apiGetArticle = async (id: number) => {
  return await _get(`/article/${id}`);
};

/**
 * 通过fid查询文件
 * @param fid
 */
export const apiGetFileByFid = async (fid: string) => {
  return await _get(`/file/${fid}`);
};
