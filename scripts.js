// let userInput
// userInput = prompt("Give me a number motherfucker!");
// let i;
// i = 1
// while (i <= userInput){
// 	if ( i % 2 !== 0 ) {
// 		$("#response").append("<br />" + i + " is odd");
// 	} else {
// 		$("#response").append("<br />" + i + " is even");
// 	}
// 	i = i + 1;
// }

// for (let i = 1; i <= 4; i = i + 1) {
// 	$("#response").append("<br />" + i + "What!");
// }

// let tipCalculator;
// tipCalculator = function(total, tipRate){
// 	let tipAmount;
// 	tipAmount = tipRate * total;
// 	$("#response").html("Your tip is $" + tipAmount);
// }

// tipCalculator(50.00, 0.2)

// let arrayOfStrings, arrayOfNumbers, arrayMixed;
// arrayOfStrings = ["a", "b", "c"];
// arrayOfNumbers = [1, 2, 3];
// arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];

// let myHabaneroSauceSquirts, myBurritoObject;
// // First, define and assign a variable for how 
// // spicy the burrito is.
// myHabaneroSauceSquirts = 3;
// // Now assign the burrito object.
// myBurritoObject = {
//   tortilla: "wheat",
//   guacamole: true,
//   beans: "pinto",
//   // Make use of the variable above.
//   habaneroSauceSquirts: myHabaneroSauceSquirts,
//   // Use the variable again in a function.
//   spiciness: function(){
//     if (myHabaneroSauceSquirts > 0 ){
//       alert("This is a spicy burrito!");
//     } else {
//       alert("This is a mild burrito.");
//     }
//   }
// };
// $("#response").html("Your burrito has " +
//   myBurritoObject.habaneroSauceSquirts +
//   " squirts of habanero.");
// myBurritoObject.spiciness();

// let test = [1,2,3,4]
// popResult = function(array){
// 	pop = array.pop()
// 	$("#response").html(pop)
// };

// popResult(test)


let userString, upperCaseMinusE, upperCasedString;
// First, we need a string from the user.
userString = prompt("What do you want to UPPeRCASe?");
// Second, we need to create our function.
upperCaseMinusE = function(string){
	let result;
	result = "";
	for (let i = 0; i < string.length ; i = i + 1) {
		let letter;
		letter = string[i];
		if ( letter === "e") {
			result = result + letter;
		} else {
			result = result + letter.toUpperCase();
		}
	}
	return result;
};
// Third, we need to pass the user’s string to the 
// function and assign the return value to a 
// variable.
upperCasedString = upperCaseMinusE(userString);
// And we can then print the string to the webpage.
$("#response").html(upperCasedString);