/*
 * @Author: ERAYLEE
 * @Date: 2019-12-18 13:49:08
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2019-12-18 13:56:33
 */
import moment from 'moment';

export const toDate = (str: string) => {
  return moment(str).format('YYYY-MM-DD');
};
export const toDateTime = (str: string) => {
  return moment(str).format('YYYY-MM-DD HH:mm');
};
