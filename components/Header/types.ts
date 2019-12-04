/*
 * @Author: ERAYLEE
 * @Date: 2019-12-02 12:51:04
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-04 14:08:55
 */
export interface IHeaderProps {}
export interface IMenuProps {
  open: boolean;
  onClose?: {
    bivarianceHack(event: {}, reason: "backdropClick" | "escapeKeyDown"): void;
  }["bivarianceHack"];
}
