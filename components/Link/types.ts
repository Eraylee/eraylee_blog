/*
 * @Author: ERAYLEE
 * @Date: 2019-12-03 12:55:34
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-03 18:09:11
 */
import { LinkProps } from "next/link";
import { Theme } from "@material-ui/core/styles";

export interface ILinkProps extends LinkProps {
  className?: string;
  color?: string;
}

export interface ITheme extends Theme {
  color?: string;
}
