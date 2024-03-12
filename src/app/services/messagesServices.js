import axios from "axios";
import endpoints from "./data";
export const getMesaage = async (url) => {
  try {
    const { data } = await axios.get(endpoints.messages);
    return data;
  } catch (error) {
    return [];
  }
};
// export const getmessageSenderUser = async (url) => {
//   try {
//     const { data } = await axios.get(endpoints.message);
//     return data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const getUserLoggedConversations = async (idUser) => {
  try {
    const started = await axios.get(endpoints.messagesStarted(idUser));
    const received = await axios.get(endpoints.receivedMessages(idUser));
    return [...started.data, ...received.data];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const startConversation  = async({senderUser, recipientUser,message}) =>{
  try {
    const url = endpoints.message;
    const newConversations = {
      "senderUserid": senderUser,
      "recipientUserid": recipientUser,
      "message": [{
        sender: senderUser,
        Date: new Date(),
        flag: false,
        message: message,
      }],
    }
     const response = await axios.post(url, newConversations);
     return response;
  } catch (error) {
    console.log(error);
    return null;
  }
} 
export const seedMesage = async({idMessage, messageArray,sender, message}) =>{
  try {
      const url = endpoints.aMessage(idMessage);
      const mensage = {
        sender: sender,
        date: new date(),
        flag:false,
        mensage : newConversations,
      }
      const response = await axios.patch(url,{message: [...messageArray, mensage]});
      return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const deleteMessage = async({idMessage,messageIndex,messageArray}) =>{
  try {
     const messages = messageArray.filter((_, index) =>index !=messageIndex);
    const response = await axios.patch(url,{
      messages: messages,
    })
  } catch (error) {
    console.log(error);
    return null;
  }

}


// export const startAMessage = async(senderUser,recipientUser) =>{
//    try {
//        const response = await axios.post();
//    } catch (error) {
//     console.log(error);
//     return null;

//    }

// }
