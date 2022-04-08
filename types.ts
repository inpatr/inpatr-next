export type PostType = {
  id: number;
  title: string;
  date: string;
  content: string;
};

export type FormState = {
  name: string;
  email: string;
  message: string;
};

export type Entries = {
  name: string;
  message: string;
};

export type CommentType = {
  id: number;
  postid: string;
  name: string;
  date: string;
  content: string;
};

export type CommentFormState = {
  name: string;
  content: string;
  date: string;
};

export type Reply = {
  id: number;
  postid: string;
  commentid: string;
  name: string;
  date: string;
  content: string;
};

export type ReplyFormState = Omit<Reply, "id" | "commentid" | "postid">;
