import {create} from 'zustand';

const useConversation = create((set,get)=>({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation)=> set({selectedConversation}),
  messages:[],
  setMessages: (messages)=>set({messages}),
  userMessages: {'111':['test']},
  setUserMessages: (userId, newMessageArray)=>{
    // const oldUserMessages = get().userMessages;
    // console.log('oldUserMessages', oldUserMessages)
    // const oldMessages = oldUserMessages[userId] ? oldUserMessages[userId]:[]
    // set({
    //   userMessages: oldUserMessages? oldUserMessages[userId]?.concate([newMessage]):[newMessage]
    // });
    set((state)=>({
      userMessages:{
        ...state.userMessages,
        // [userId]: oldUserMessages[userId]? (oldMessages ? oldMessages.push(newMessage):[newMessage]) : [newMessage],
        [userId]: newMessageArray,
      }
    }));
  },
}));

export default useConversation;