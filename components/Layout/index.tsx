import React, { PropsWithChildren } from "react";
import { Header } from "../Header";

export const Layout = (props: PropsWithChildren<{}>) => (
  <>
    <Header />
    {props.children}
  </>
);
