import React from "react";
import App from "next/app";
import { create } from "jss";
import Head from "next/head";
import preset from "jss-preset-default";
import { StoreProvider, Store } from "easy-peasy";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

import theme from "../lib/theme";
import { Layout } from "../components/Layout";
import widthStore from "../lib/withStore";

interface IAppProps {
  store: Store;
}
const jss = create(jssPreset()).setup(preset());
class MyApp extends App<IAppProps> {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("CUSTOM ERROR HANDLING", error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  /**
   * @description:
   * @param {type}
   * @return:
   */
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="../static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <title>ERAYLEE'S WEBSITE</title>
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <StoreProvider store={store}>
          <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </StylesProvider>
        </StoreProvider>
      </>
    );
  }
}

export default widthStore(MyApp);
