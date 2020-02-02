/*
 * @Author: ERAYLEE
 * @Date: 2020-02-01 17:15:14
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-02-02 22:05:19
 */

export interface CommentCardProps {
  id: string;
}
export interface CommentItem {
  id: string;
  authorName: string;
  authorMail: string;
  authorUrl?: string;
  content: string;
  parentId?: string;
  createdAt?: string;
  updatedAt?: string;
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
}

export interface FormProps {
  articleId: string;
  replyInfo: ReplyInfo;
}

export interface ReplyInfo {
  authorName?: string;
  authorUrl?: string;
  parentId?: string;
}
