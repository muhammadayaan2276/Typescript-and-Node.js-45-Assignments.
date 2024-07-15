//Add an if test to Exercise 28 to make sure the list of users is not empty.
var userNames = [];
if (userNames.length === 0) {
    console.log('We need to find some users!');
}
else {
    userNames = [];
    console.log('All user Names have been removed. ' + userNames.length);
}
