/*
 * @Author: ERAYLEE
 * @Date: 2019-12-04 17:34:03
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-15 17:30:15
 */
import express from "express";
import next from "next";
import proxy from "http-proxy-middleware";

const port = parseInt(process.env.PORT as string, 10) || 3200;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    // Set up the proxy.
    if (dev) {
      server.use(
        proxy("/api", {
          target: "http://localhost:5050/",
          changeOrigin: true,
          pathRewrite: { "^/api": "/" }
        })
      );
    }

    server.all("*", (req, res) => handle(req, res));

    server.listen(port, () => {
      console.info(`>ERAYLEE'S WEBSITE Ready on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error("An error occurred, unable to start the server");
    console.error(err);
  });
