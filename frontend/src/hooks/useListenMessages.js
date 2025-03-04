import React from "react";
import { useSocketContext } from "../context/SocketContext";
import { useEffect } from "react";
import useConversation from "../zustand/useConversation";
import { useAuthContext } from '../context/AuthContext.jsx'

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, userMessages, setUserMessages} = useConversation();
  const { authUser } = useAuthContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);

      // put new message to according to sender id
      let senderId = newMessage.senderId;
      // if senderId is authUserId, it means the message was sent out from this user
      // put the message into receiverId array
      let receiverId = newMessage.receiverId;
      if (senderId == authUser._id) {
        senderId = receiverId
        newMessage.shouldShake = false;
      }
      let newMessageArray = [];
      if(senderId in userMessages){
        newMessageArray = userMessages[senderId].slice()
        newMessageArray.push(newMessage)
      } else {
        newMessageArray.push(newMessage)
      }
      setUserMessages(senderId, newMessageArray)
    });

    // when unmount, stop listening on newMessage event
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages, userMessages]);
};

export default useListenMessages;
