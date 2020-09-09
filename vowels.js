//Create a function that will receive a string of text of any length and return the number of 
//vowels found within the text.

 let state = {
     input = ""
     vowels = [0,0,0,0,0]
 }

 function getInput(){
 state.input=prompt("Please enter a sentence")
};

function checkForVowel(){
    input=state.input
    x=length(state.input.length)
    for (i = 0; i < x; i++) {
     y = str.input(x)
        if (y == a || y == A)
        {vowels[0]++}
        else if (y == e || y == E)
        {vowels[1]++}
        else if (y == i || y == I)
        {vowels[2]++}
        else if (y == o || y == O)
        {vowels[3]++} 
        else if (y == u || y == U)
        {vowels[4]++}
    }
}

function displayVowel{
    htmlString=``
}

//Restrictions:
//No helper methods
 

//Bonus:
//Return the vowels used and the number of times it was used. 