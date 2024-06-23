import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext.jsx';


const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, userMessages, setUserMessages } = useConversation();
  const { authUser } = useAuthContext()

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setUserMessages(selectedConversation._id, data)
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      console.log('selectedConversation id:', selectedConversation._id);
      getMessages();
    }
  }, [selectedConversation?._id, setUserMessages]);

  return { loading, userMessages, selectedConversation };
};
export default useGetMessages;
