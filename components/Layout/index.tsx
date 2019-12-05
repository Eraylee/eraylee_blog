import React, { PropsWithChildren } from "react";
import { Header } from "../Header";
import Box from "@material-ui/core/Box";

export const Layout = (props: PropsWithChildren<{}>) => (
  <>
    <Header />
    <Box id="back-to-top-anchor" />
    {props.children}
  </>
);
