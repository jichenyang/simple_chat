import {create} from 'zustand';

const useConversation = create((set,get)=>({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation)=> set({selectedConversation}),
  messages:[],
  setMessages: (messages)=>set({messages}),
  userMessages: {'111':['test']},
  setUserMessages: (userId, newMessageArray)=>{
    set((state)=>({
      userMessages:{
        ...state.userMessages,
        [userId]: newMessageArray,
      }
    }));
  },
}));

export default useConversation;