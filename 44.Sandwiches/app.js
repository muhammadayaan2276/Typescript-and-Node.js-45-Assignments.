function makeSandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(function (element) { return console.log("- " + element); });
    console.log('Enjoy your sandwich!\n');
}
makeSandwich(['Ham', 'Cheese', 'Butter']);
makeSandwich(['Lettuce', 'Cheese', 'Bacon']);
makeSandwich(['Peanut Butter', 'Jelly', 'Chocolate']);
