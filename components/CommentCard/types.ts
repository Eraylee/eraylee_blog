/*
 * @Author: ERAYLEE
 * @Date: 2020-02-01 17:15:14
 * @LastEditors  : ERAYLEE
 * @LastEditTime : 2020-02-01 19:59:20
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
}

export interface FormProps {}
