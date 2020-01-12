/*
 * @Author: ERAYLEE
 * @Date: 2019-12-21 16:34:19
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-10 09:05:48
 */
export interface TreeItem {
  key: string;
  name: string;
  children?: TreeItem[];
}
