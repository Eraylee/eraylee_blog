/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors: ERAYLEE
 * @LastEditTime: 2019-12-12 00:51:02
 */
import axios from "axios";
import { Method, IResult } from "./types";

let BASE_API = "http://localhost:5050";

if (process.env.NODE_ENV !== "development") {
  BASE_API = process.env.API as string;
}
/**
 * 设置默认Content-Type
 */
axios.defaults.headers.post["Content-Type"] = "application/json";
/**
 * request拦截器
 */
axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);
/**
 * response拦截器
 */
axios.interceptors.response.use(
  res => res.data,
  err => err.response.data
);
/**
 * 封装request
 * @param method
 * @param url
 * @param data
 */
const request = (method: Method, url: string, data: any): Promise<IResult> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res: any = await axios({
        method,
        url: BASE_API + url,
        data
      });
      if (res && res.code === 200) {
        resolve(res);
      } else {
        reject(res);
      }
    } catch (error) {
      reject(error);
    }
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
/**
 * 封装put请求
 * @param url
 * @param data
 */
export const _put = async (url: string, data: any) => {
  return await request("put", url, data);
};
