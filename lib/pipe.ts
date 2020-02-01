/*
 * @Author: ERAYLEE
 * @Date: 2019-12-18 13:49:08
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-02-01 20:02:18
 */
import moment from 'moment';

export const toDate = (str?: string) => {
  return moment(str as string).format('YYYY-MM-DD');
};
export const toDateTime = (str?: string) => {
  return moment(str as string).format('YYYY-MM-DD HH:mm');
};
