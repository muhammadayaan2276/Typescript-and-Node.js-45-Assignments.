 let Guest_List :string[] = ['Ayaan','Ahmed','Hasan'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest :string = 'Ayaan';

let new_Guest :string = 'Ali';

Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log(`Mr.${absent_Guest} is not coming to the party.`)

// console.log('Good News! We find Big Table so we are inviting 3 more guests.')
// Array main 3 guest add kiye hain.
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilal');
// Yahan per mainay 6 guest ky array ko print kraya hai.
// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// Sorry Message to guest for not inviting.
// console.log('\nSorry we can not arrange big table, Ony two people wil be invited.');
// Yahan per mainay guest remove kiye hain.
while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
//    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
// Hamare bache howe 2 invited Guest.
// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. '+ Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
// }
// Mene sare guest array se remove kardiye.
Guest_List.splice(0,2);
console.log(Guest_List);

//Exercise 19

//Print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest Are: ${Guest_List.length}`);




