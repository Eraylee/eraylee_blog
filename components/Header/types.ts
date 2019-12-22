/*
 * @Author: ERAYLEE
 * @Date: 2019-12-04 17:34:03
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2019-12-22 12:31:52
 */

import { Thunk, Action } from 'easy-peasy';
import { ITreeItem } from '../../lib/util/types';
export interface IHeaderProps {}

export interface ICategoryProps {
  categorys: ITreeItem[];
}
export interface IMenuProps {
  open: boolean;
  onClose: {
    bivarianceHack(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void;
  }['bivarianceHack'];
  categorys: ITreeItem[];
}

export interface IHeaderModel {
  categorys: ITreeItem[];
  setCategorys: Action<IHeaderModel, ITreeItem[]>;
  getCategorys: Thunk<IHeaderModel>;
}
