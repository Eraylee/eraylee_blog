/*
 * @Author: ERAYLEE
 * @Date: 2019-12-18 13:49:08
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-02-09 11:47:22
 */
import moment from 'moment';

export const toDate = (str?: string) => {
  return moment(str as string).format('YYYY-MM-DD');
};
export const toDateTime = (str?: string) => {
  return moment(str as string).format('YYYY-MM-DD HH-mm-ss');
  // moment(str as string).format('YYYY-MM-DD HH:mm');
};
export const toFromNow = (str?: string) => {
  moment.locale('zh-cn');
  return moment(str).fromNow();
  // moment(str as string).format('YYYY-MM-DD HH:mm');
};
