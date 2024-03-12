const printUsers = (container, usersList) => {
    container.innerHTML = "";
    usersList.forEach((element) => {
      container.innerHTML += `
           <ul>
              <li> ${element.name}</li>
              <li> ${element.pohne}</li>
              <li> ${element.flag}</li>
              <li> ${element.phrase}</li>
              

           
           </ul>
              
          `;
    });
  };
  
  export default printUsers;
  
//   //Función que nos permite filtrar lista de conversaciones por nombre
//   export const filterName = (usersList, neme) => {
//     return transactions.filter(item => item.name == name);
//     usersList.forEach(() =>{

//     })
//   }