"use strict";

document.getElementById("sendButton").disabled = true;
var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();


connection.on("ReceiveMessage", function (user, message) {
    var msg = user + ' says ' + message;
    var li = document.createElement("li");
    li.textContent = msg;
    document.getElementById("messageList").appendChild(li);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (er) {
    alert(er);
    return console.error(er.toString());
    });


document.getElementById("sendButton").addEventListener("click", function (event) {
    var u = document.getElementById("userInput").value;
    var m = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", u, m).catch(function (er) {
        alert(er.toString());
    });
    event.preventDefault();
});
 







