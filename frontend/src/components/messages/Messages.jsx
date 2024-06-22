import React from 'react';
import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { loading, userMessages, selectedConversation} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    }, 100);
  }, [userMessages[selectedConversation._id]])

  return (
    <div className='px-4 flex-1 overflow-scroll'>
      {!loading && userMessages[selectedConversation._id] && userMessages[selectedConversation._id].length > 0 && userMessages[selectedConversation._id].map((message)=>(
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}
      {loading && [...Array(3)].map((_, idx)=> <MessageSkeleton key={idx} />)}
      {!loading && userMessages[selectedConversation._id] && userMessages[selectedConversation._id].length==0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages


// CODE START FOR THIS FILE
// const Messages = () => {
//   const {messages, loading} = useGetMessages()
//   console.log("messages:", messages);
//   return (
//     <div className='px-4 flex-1 overflow-scroll'>
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   )
// }
// 
// export default Messages
// 