/*
 * @Author: ERAYLEE
 * @Date: 2020-02-01 17:15:14
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-02-06 22:05:45
 */
import { Comment } from '../../api/types';
export interface CommentCardProps {
  id: string;
}
export interface CommentItem extends Comment {
  children?: CommentItem[];
}
export interface CommentProps {
  data: CommentItem;
  activeId: string;
  onClick: (id: string, info: ReplyInfo) => any;
  onCancle: () => any;
  replyInfo: ReplyInfo;
  isSub?: boolean;
  articleId: string;
  onRefresh: () => any;
}

export interface FormProps {
  articleId: string;
  isSub?: boolean;
  replyInfo: ReplyInfo;
  onRefresh: () => any;
}

export interface LoadMoreProps {
  loading: boolean;
  hasMore: boolean;
  onClick: () => any;
}

export interface ReplyInfo {
  authorName?: string;
  authorUrl?: string;
  parentId?: string;
}
