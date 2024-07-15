//Store the locations in a array.Make sure the aray is not in alphabetical order.
let places :string[] = ['Italy','Germany','Times Square','Agra','Eifel Tower']

//Print your array in its orignal order.
console.log('Orignal: ' + places);

//Print your array in alphabetical order without modifying the actual lit.
console.log('Copy: ' + [...places].sort());

//Show that your array is still in its orignal order by printing it.
console.log('Orignal: ' + places);

//Print your array in reverse alphabetical order without changing the order of the orignal list.
console.log('Copy: ' + [...places].sort().reverse());

//Show that your array is still in its orignal order by printing it again.
console.log('Orignal: ' + places);

//Reverse the order of your list.Print the array to show that its order has changed.
console.log('Orignal: ' + places.reverse());

//Reverse the order of your list again.Print the list to show its back to its orignal order.
console.log('Orignal: ' + places.reverse());

//Sort your array so its stored in alphabetical order.Print the array to show that its order has been changed.
console.log('Orignal: ' + places.sort());

//Sort to change  your array so its stored in reverse alphabetical order.Print the list to show that its order has changed.
console.log('Orignal: ' + places.sort().reverse());


























