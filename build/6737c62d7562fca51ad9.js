var printMessages = function printMessages(container, messageslist) {
  container.innerHTML = "";
  messageslist.forEach(function (element) {
    container.innerHTML += " \n        \n         <ul>\n           \n               <li>\n                  ".concat(element.chat, " \n               </li>\n\n         </ul>\n        \n        \n        ");
  });
};
export default printMessages;