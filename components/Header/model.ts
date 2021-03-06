/*
 * @Author: ERAYLEE
 * @Date: 2019-12-20 22:39:35
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-11 18:12:28
 */

import { action, thunk } from 'easy-peasy';
import { IHeaderModel } from './types';
import { apiGetCategorys } from '../../api';
import { getTreeData } from '../../lib/util';
export const header: IHeaderModel = {
  categorys: [],
  setCategorys: action((state, payload) => {
    state.categorys = payload;
  }),
  getCategorys: thunk(async actions => {
    try {
      const res = await apiGetCategorys();
      actions.setCategorys(getTreeData(res.data));
    } catch (error) {
      console.error(error);
    }
  }),
};
