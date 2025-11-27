"use strict";

const url =
  "https://api.airtable.com/v0/appd2bG7WHqaMZuiX/Table%201?maxRecords=3&view=Grid%20view";
// function for our list view
async function getAllRecords() {
  //let getResultElement = document.getElementById("brews");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patkwXt1bmB9NocbI.2b2a3d222bc5c0de05595653a9c2fede447921fd0718fb14611729909c8aa5ba`,
    },
  };

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array
    });
}
//patkwXt1bmB9NocbI.2b2a3d222bc5c0de05595653a9c2fede447921fd0718fb14611729909c8aa5ba
getAllRecords();
