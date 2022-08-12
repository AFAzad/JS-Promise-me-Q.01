/*Problem Statement
Complete the function promiseMe
Such that it takes a number as first arguement(time) and a string as second argument(data).
It returns a promise which resolves after time milliseconds and data is returned.

Note:- You only have to implement the function, in the example it
shows your implemented question will be ran.*/




function promiseMe(time,data) {
    // return the output using return keyword
    // do not console.log it

    return new Promise((resolve) =>{
    
    setTimeout(() =>{
        resolve(data);

    },time)

   
    })

}