//Choose a color for an alien as you did in Exercise 25.
var alienColors = "green";
//Write an if-else chain.
//If the alien's color is green
//Print the statement that the player just earned 5 points for shooting the alien.
//One version of this program that runs the if block.
if (alienColors === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points.");
}
//If the alien's color isn't green,print a statement that the player just earned 10 points.
//One version of this program that runs the else block.
alienColors = "yellow";
if (alienColors === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points.");
}
