/*
 * @Author: ERAYLEE
 * @Date: 2019-12-21 16:31:30
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2019-12-21 16:36:47
 */

import { ICategory } from '../../api/types';
import { ITreeItem } from './types';
/**
 * 将原始的树形数据转换成所需格式数据
 * @param data
 */
export const getTreeData = (data: ICategory[]): ITreeItem[] => {
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
