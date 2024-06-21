import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations.js";
import { getRandomEmoji } from "../../utils/emojis.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("conversations:", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;
