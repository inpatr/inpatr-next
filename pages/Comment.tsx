import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Reply, ReplyFormState, CommentType, CommentFormState } from "../types";

type Props = {
  content: CommentType;
  postid: string;
};

const initialState = {
  name: "",
  content: "",
};

const Comment = ({ postid, content }: Props) => {
  let isReply = false;

  return (
    <div
      key={postid}
      className="flex flex-row space-x-4 bg-paleblue text-darkaltrose"
    >
      <h1 className="text-2xl text-lightaltrose">{name}</h1>
      <p className="text-darkaltrose">{date}</p>
      <p className="text-darkaltrose">{content}</p>
      <button
        onClick={() => (isReply = true)}
        className="bg-lightaltrose text:text-altrose hover:bg-paleblue hover:text-darkaltrose py-4 rounded-md flex flex-end"
      >
        REPLY
      </button>
      <div></div>
    </div>
  );
};
