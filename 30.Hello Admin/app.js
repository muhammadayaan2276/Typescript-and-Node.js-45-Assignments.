//Make a array of five or more usernames, Including the name 'admin'.Imagine you are writing 
//code that will print a greeting to each  user after they log in to a website.Loop through the
//array, and print a greeting to each user:
//If the username s 'admin', print a special greeting, such as Hello admin, would you like to 
//see a status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.````````````````````````
var userNames = ["Admin", "Daffy Duck", "Ali Khan", "Mehmood Alam", "Asim Ansari"];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames[i], ", thank you for logging in again."));
    }
}
//Another Method
userNames = ["Admin", "Daffy Duck", "Ali Khan", "Mehmood Alam", "Asim Ansari"];
userNames.forEach(function (userNames) {
    if (userNames === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames, ", thank you for logging in again."));
    }
});
