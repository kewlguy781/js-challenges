//Have the function alphabetSoup(str) take the str string 
// parameter being passed and return the string with the 
// letters in alphabetical order (ie. hello becomes ehllo). 
// Assume numbers and punctuation symbols will not be 
// included in the string. 

let alphabetSoup = 'hello'

function soup(string) {
// copy the string and break into characters array
let stringA= string.split("")
stringA.sort()
stringA = stringA.join("")
console.log('stringA :>> ', stringA);
return stringA
}
soup(alphabetSoup)