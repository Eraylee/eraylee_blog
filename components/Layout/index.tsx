import React, { PropsWithChildren } from "react";
import { Header } from "../Header";
import Toolbar from "@material-ui/core/Toolbar";

export const Layout = (props: PropsWithChildren<{}>) => (
  <>
    <Header />
    <Toolbar id="back-to-top-anchor" />
    {props.children}
  </>
);
