/*
 * @Author: ERAYLEE
 * @Date: 2020-01-12 21:25:41
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-12 21:57:27
 */
import { Link } from '../../api/types';

export interface LinksPageProps {
  links?: Link[][];
  error?: {
    code: number;
    message: string;
  };
}
