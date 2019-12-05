/*
 * @Author: ERAYLEE
 * @Date: 2019-12-02 12:51:04
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-06 00:24:20
 */
export interface IHeaderProps {}
export interface IMenuProps {
  open: boolean;
  onClose: {
    bivarianceHack(event: {}, reason: "backdropClick" | "escapeKeyDown"): void;
  }["bivarianceHack"];
}
