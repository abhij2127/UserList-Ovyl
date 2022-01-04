"use strict";
/*This(mn.js) is the main code for rendering all the json data from file dba.json
      the frontend i.e in index.php file. This code is using JavaScript XHR for getting
      data from the file so in order to test please use a localhost or live-server for
      running the file*/

//creating a XHR object which can request file from server
var xhttp = new XMLHttpRequest();

//when the request for file is completed the onreadystatechange function is called
// so we use this function to render data
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      //this.responseText loads whole file as a string
      //therefore JSON.parse() function is used to convert the JSON string to JS Object
     var myUser = JSON.parse(this.responseText);
     //we can get the array of all the users by referring to objects  index in myUser
     //for refrence see the dba.json
     var userList = myUser["objects"];
     // looping throgh all the users stored as objects in array
     for(let i=0;i<userList.length;i++){
       //creating the node div for holding user info
       var card = document.createElement("div");
       card.id = "crd";

       //creating all the sub nodes to catogorize each info in them
       //e.g span with className "nm" for name and "idd" for ID
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

       //creating Text Node for each info related to user
       var nametxt = document.createTextNode(userList[i]["FirstNameLastName"]);
       var idtxt = document.createTextNode(userList[i]["ID"]);
       var emltxt = document.createTextNode(userList[i]["Email"]);
       var emladrtxt = document.createTextNode(userList[i]["EmailAddress"]);
       var contacttxt = document.createTextNode(userList[i]["Phone"]);
       var companytxt = document.createTextNode(userList[i]["Company"]);

       //the variable doc stores the refrence of parent node
       var doc = document.getElementById("nav");
       //appending the created nodes in sequence
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

   }
}

//loading file
xhttp.open("GET", "dba.json");
//sending request to server
xhttp.send();
