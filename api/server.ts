/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-17 22:24:59
 */
import fetch from "isomorphic-unfetch";
import { Method } from "./types";

const isServer = typeof window === "undefined";
let BASE_API = isServer ? process.env.API : "/api";
// let BASE_API = "/api";
// let BASE_API = "localhost:3200";

if (process.env.NODE_ENV !== "development") {
  BASE_API = process.env.API;
}
/**
 * 封装request
 * @param method
 * @param url
 * @param data
 */
const request = (method: Method, url: string, data: any) => {
  return new Promise(async (resolve, reject) => {
    const options = {
      method
    };
    if (method !== "get" && data) {
      Object.assign(options, { body: data });
    }
    fetch(BASE_API + url, options)
      .then(res => res.json())
      .then(data => {
        
        return data.code === 200 ? resolve(data) : reject(data);
      })
      .catch(err => reject(err));
  });
};
/**
 * 封装get方法
 * @param url
 * @param params
 */
export const _get = async (url: string, params = {}) => {
  return await request("get", url, { params });
};
/**
 * 封装post请求
 * @param url
 * @param data
 */
export const _post = async (url: string, data: any) => {
  return await request("post", url, data);
};
