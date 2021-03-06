/*
 * @Author: ERAYLEE
 * @Date: 2019-12-10 18:12:37
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-02-04 21:27:56
 */
import fetch from 'isomorphic-unfetch';
import { Method } from './types';
import { getQueryStr } from '../lib/util';

const isServer = typeof window === 'undefined';
let BASE_API = isServer ? process.env.API : '/api';
/**
 * 封装request
 * @param method
 * @param url
 * @param params
 */
const request = <T, P>(method: Method, url: string, params?: P): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    let requestUrl = BASE_API + url;

    const options = {
      method,
    };
    if (params) {
      if (method === 'get') {
        requestUrl += getQueryStr(params);
      } else {
        Object.assign(options, {
          body: JSON.stringify(params),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
      }
    }

    fetch(requestUrl, options)
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
export const _get = async <T, P>(url: string, params?: P): Promise<T> => {
  return await request<T, P>('get', url, params);
};
/**
 * 封装post请求
 * @param url
 * @param data
 */
export const _post = async <T, P>(url: string, params: P): Promise<T> => {
  return await request<T, P>('post', url, params);
};
