import React, { PropsWithChildren } from "react";
import MButton from "@material-ui/core/Button";

import { IButtonPorps } from "./types";

export const Button = (props: PropsWithChildren<IButtonPorps>) => (
  <MButton {...props}>{props.children}</MButton>
);

Button.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "small"
} as Partial<IButtonPorps>;
