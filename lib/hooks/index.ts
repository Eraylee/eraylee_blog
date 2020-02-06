/*
 * @Author: ERAYLEE
 * @Date: 2020-01-30 11:56:27
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-02-06 22:08:36
 */
import { useState, useEffect, useCallback } from 'react';
import { useAsync } from './useAsync';
import { apiGetArticles, apiGetComments } from '../../api';
import { Article } from '../../api/types';
import { CommentItem } from '../../components/CommentCard/types';
export { useAsync } from './useAsync';

const getArticle = async (page: number, categoryId?: string) => {
  try {
    const params = {
      page,
      type: 'normal',
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

const getComments = async (page: number, id: string) => {
  try {
    const res = await apiGetComments(id, { page });
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const useArticles = (categoryId = '') => {
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

export const useComments = (id: string) => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState<CommentItem[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { loading, data, run } = useAsync(() => getComments(page, id), [page]);
  const loadMore = () => {
    setPage(p => p + 1);
  };
  useEffect(() => {
    if (data) {
      const parents = data.data.filter(v => !v.parentId);
      const children = data.data.filter(v => v.parentId);
      const comments: CommentItem[] = parents.map(v => ({
        children: children
          .filter(i => i.parentId === v.id)
          .map(i => ({
            ...i,
          })),
        ...v,
      }));
      setList(_list => [..._list, ...comments]);
      setHasMore(data.maxPage > page);
    }
  }, [data]);
  const refresh = useCallback(() => {
    setList([]);
    setPage(1);
    run();
  }, []);
  return { loading, data: list, loadMore, refresh, hasMore };
};
