var printMessages = function printMessages(container, messageslist) {
  container.innerHTML = "";
  messageslist.forEach(function (element) {
    var chat = element.chat;
    var sectionContainer = document.createElement("ul");
    chat.forEach(function (item) {
      sectionContainer.innerHTML += "\n          <li>".concat(item.message, "</li>\n          <li>").concat(item.date, "</li>\n          <li>").concat(item.hour, "</li>\n          \n          ");
    });
    container.appendChild(sectionContainer);
  });
};
export default printMessages;