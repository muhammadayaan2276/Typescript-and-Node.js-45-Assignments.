
let magician:string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];

function make_great(magicianArray:string[]){

for(let i = 0; i<magicianArray.length; i++){

 magician[i] = 'The Great ' + magicianArray[i];

}

}

make_great(magician);


function show_magicians(magicians:string[]){

magicians.forEach(element => {

    console.log(element);
    
})

}

show_magicians(magician);











































































