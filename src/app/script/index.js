import "../styles/style.scss";
//import image from '../assets/conta.png';
import {getUser} from '../services/usursServices';
import { getMesaage } from "../services/messagesServices";
import printMessages from '../modules/printMessages';
import printMessagesSender from '../modules/printMessageSender';
import { getmessageSenderUser } from "../services/messagesServices";
import printUsers from "../modules/printUsers";

//const logoImage = document.getElementById("logo");
//logoImage.setAttribute("src",image);
const conversationsContainer = document.getElementById("conversations");
const convesationsSender = document.getElementById("containerSender");
const containerUsers = document.getElementById("users");
console.log(users);
//console.log(conversationsContainer);

// document.addEventListener("DOMContentLoaded",async() =>{
//    const user = await getUser();
//    //console.log(user);
// });
document.addEventListener("DOMContentLoaded",async() =>{
   const messages = await getMesaage();
   console.log(messages);
   printMessages(conversationsContainer, messages);

});

// document.addEventListener("DOMContentLoaded", async() =>{
// const senderUser = await getmessageSenderUser();
// console.log(senderUser);
// printMessagesSender(convesationsSender,senderUser);
// });

document.addEventListener("DOMContentLoaded", async() =>{
   const users = await getUser();
   console.log(users);
   printUsers(containerUsers,users);
})

