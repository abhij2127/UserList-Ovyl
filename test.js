"use strict";
//this file does the same work as mn.js, the only difference is it uses fetch api
fetch("./dba.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    var myUser = data;
    var userList = myUser["objects"];
    for(let i=0;i<userList.length;i++){
      var card = document.createElement("div");
      card.id = "crd";
      var name = document.createElement("span");
      var id = document.createElement("span");
      var eml = document.createElement("span");
      var emladr = document.createElement("span");
      var contact = document.createElement("span");
      var company = document.createElement("span");
      name.className = "nm";
      id.className = "idd";
      eml.className = "email";
      emladr.className = "emailadr";
      contact.className = "con";
      company.className = "comp";
      var nametxt = document.createTextNode(userList[i]["FirstNameLastName"]);
      var idtxt = document.createTextNode(userList[i]["ID"]);
      var emltxt = document.createTextNode(userList[i]["Email"]);
      var emladrtxt = document.createTextNode(userList[i]["EmailAddress"]);
      var contacttxt = document.createTextNode(userList[i]["Phone"]);
      var companytxt = document.createTextNode(userList[i]["Company"]);
      var doc = document.getElementById("nav");
      doc.appendChild(card);
      card.appendChild(id);
      card.appendChild(name);
      card.appendChild(eml);
      card.appendChild(emladr);
      card.appendChild(contact);
      card.appendChild(company);
      id.appendChild(idtxt);
      name.appendChild(nametxt);
      eml.appendChild(emltxt);
      emladr.appendChild(emladrtxt);
      contact.appendChild(contacttxt);
      company.appendChild(companytxt);
    }
  })
