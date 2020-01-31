/*
 * @Author: ERAYLEE
 * @Date: 2020-01-30 11:56:27
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-01-31 17:33:45
 */
import { useState, useEffect } from 'react';
import { useAsync } from './useAsync';
import { apiGetArticles } from '../../api';
import { Article } from '../../api/types';

const getArticle = async (page: number, categoryId?: string) => {
  try {
    const params = {
      page,
    };
    if (categoryId) {
      Object.assign(params, { categoryId });
    }
    const res = await apiGetArticles(params);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const usePagination = (categoryId = '') => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState<Article[]>([]);
  const [currentId, setCurrentId] = useState('');
  const { loading, data } = useAsync(() => getArticle(page, categoryId), [
    page,
    categoryId,
  ]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loadMore = () => {
    setPage(p => p + 1);
  };
  useEffect(() => {
    if (data) {
      if (currentId === categoryId) {
        setList(_list => [..._list, ...data.data]);
        setHasMore(data.maxPage > page);
      } else {
        setList(data.data);
        setPage(1);
        setCurrentId(categoryId);
      }
    }
  }, [data]);

  return { page, loadMore, loading, data: list, hasMore };
};
