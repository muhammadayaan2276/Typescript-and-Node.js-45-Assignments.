let Guest_List :string[] = ['Ayaan','Ahmed','Hasan'];
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
let absent_Guest :string = 'Ayaan';

let new_Guest :string = 'Ali';

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
console.log(`Mr.${absent_Guest} is not coming to the party.`)