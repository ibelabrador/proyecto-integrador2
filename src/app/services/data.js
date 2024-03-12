const URL_BASE = "http://localhost:3000/";
//http://localhost:3000?[nombre-de-la-propiedad]=[id]


const endpoints = {
    usuario: `${URL_BASE}usuario`,
    messages:`${URL_BASE}messages`,
    messagesStarted: (idLoggedUser)=>`${URL_BASE}messages?senderUser=${idLoggedUser}`,
    receivedMessages:(idLoggedUser)=>`${URL_BASE}messages?recipientUser=${idLoggedUser}`,
    message: (sender,receptor) =>
     `${URL_BASE}messages?senderUserid=${sender}&recipientUserid=${receptor}`,
    aMessage: ()=> `${URL_BASE}messages/${id}`,

};
export default endpoints;

