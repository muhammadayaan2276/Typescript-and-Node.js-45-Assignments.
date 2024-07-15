
//Equality Test with string Test 1
console.log("Equality test with strings: ","Apple"==="Apple");
//Equality Test with string Test 2 
console.log("Equality test with strings: ",("Apple"as string) === "Orange");

//Inequality Test with string Test 1
console.log("Inequality test with strings: ",("Apple" as string) != "Orange");
//Inequality Test with string Test 2
console.log("Inequality test with strings: ",("Apple" as string) != "Apple");

//Tests using the lower case function Test 1
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");
//Tests using the lower case function Test 2
console.log("Lower case function test: ", "HELLO".toLowerCase() === "world");

//Numerical tests involving equality Test 1
console.log("Equality test with numbers: ", 32 === 32);
//Numerical tests involving equality Test 2
console.log("Equality test with numbers: ", (32 as number) === 36);

//Numerical tests involving inequality Test 1
console.log("Inequality test with numbers: ", (25 as number) != 34);
//Numerical tests involving inequality Test 2
console.log("Inequality test with numbers: ", (25 as number) != 25);

//Greater than Test 1
console.log("Greater than test: ", 10 > 5);
//Greater than Test 2
console.log("Greater than test: ", 5 > 10);

//Less than Test 1
console.log("Less than test: ", 5 < 10);
//Less than Test 2
console.log("Less than test: ", 10 < 5);

//Greater than or equal to Test 1
console.log("Greater than or equal to test: ", 10 >= 5);
//Greater than or equal to Test 2
console.log("Greater than or equal to test: ", 5 >= 10);

//Less than or equal to Test 1
console.log("Less than or equal to test: ", 5 <= 10);
//Less than or equal to Test 2
console.log("Less than or equal to test: ", 10 <= 5);

//Tests using "And" operator Test 1
console.log("And operator test: ", 5 === 5 && 10 > 5);
//Tests using "And" operator Test 2
console.log("And operator test: ", 5 === 5 && 10 < 5);

//Tests using "Or" operator Test 1
console.log("Or operator test: ", 5 === 5 || 10 < 5);
//Tests using "Or" operator Test 2
console.log("Or operator test: ", 10 <= 5  || 10 < 5);

//Test whether an item is in a array Test 1
let fruits:string[] = ['Orange','Banana','Apple'];
console.log("Test 'Apple' in the array: ", fruits.includes("Apple"));
//Test whether an item is in a array Test 2
console.log("Test 'Apple' in the array: ", fruits.includes("Grapes"));

//Test whether an item is not in a array Test 1
console.log("Test 'Mango' is not in the array: ", !fruits.includes("Mango"));
//Test whether an item is not in a array Test 2
console.log("Test 'Mango' is not in the array: ", !fruits.includes("Banana"));














































































