import React from 'react';
import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const {messages, loading} = useGetMessages()
  console.log("messages:", messages);
  return (
    <div className='px-4 flex-1 overflow-scroll'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages
