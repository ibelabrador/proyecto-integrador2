const printMessages = (container, messageslist) => {
  container.innerHTML = "";
  messageslist.forEach((element) => {
      const { chat } = element;
      const sectionContainer = document.createElement("ul");
      chat.forEach(item => {
          sectionContainer.innerHTML += `
          <li>${item.message}</li>
          <li>${item.date}</li>
          <li>${item.hour}</li>
          
          `
      });
      container.appendChild(sectionContainer);
  });
};
export default printMessages;





