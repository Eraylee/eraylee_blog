import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./style";
import { ILinkProps } from "./types";

export const Link = (props: PropsWithChildren<ILinkProps>) => {
  const {
    as,
    href,
    color,
    className: classNameProps,
    prefetch,
    ...other
  } = props;
  const router = useRouter();
  const theme = useTheme();
  Object.assign(theme, { color });
  const classes = useStyles(theme);
  const className = clsx(classNameProps, {
    active: router.pathname === props.href
  });
  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a {...other} className={clsx(className, classes.link)} >
        {props.children}
      </a>
    </NextLink>
  );
};
