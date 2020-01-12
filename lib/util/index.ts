/*
 * @Author: ERAYLEE
 * @Date: 2019-12-21 16:31:30
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-10 09:05:30
 */

import { Category } from '../../api/types';
import { TreeItem } from './types';
interface IObj {
  [key: string]: any;
}
/**
 * 将原始的树形数据转换成所需格式数据
 * @param data
 */
export const getTreeData = (data: Category[]): TreeItem[] => {
  const parents = data.filter(v => !v.parentId);
  const children = data.filter(v => v.parentId);
  return parents.map(v => ({
    key: v.id,
    name: v.name,
    children: children
      .filter(i => i.parentId === v.id)
      .map(i => ({
        key: i.id,
        name: i.name,
      })),
  }));
};
/**
 * 获取query字符串
 * @param obj
 */
export const getQueryStr = (obj: IObj) => {
  return (
    '?' +
    Object.keys(obj)
      .map(v => v + '=' + encodeURIComponent(obj[v]))
      .join('&')
  );
};
