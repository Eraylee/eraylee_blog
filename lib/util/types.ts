/*
 * @Author: ERAYLEE
 * @Date: 2019-12-21 16:34:19
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2019-12-21 16:35:50
 */
export interface ITreeItem {
  key: number;
  name: string;
  children?: ITreeItem[];
}
