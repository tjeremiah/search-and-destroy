'use strict';

const oneJump = (arr) => {
    //[2, 4, 1]
    let potentialJumps = [0]
    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i] 
        let potentialJump = currentValue + i - 1
        potentialJumps.push(potentialJump)
    }
    // note potentialJumps[0,5,3]
    return potentialJumps.indexOf(Math.max(...potentialJumps))
}
// Complete this algo
const minJumps = arr => {
 let currentIndex = 0
 let jumps = 0
 let currentValue = arr[0]
 do {
     let tinyArr = []  
     for(let i = currentIndex; i <= currentIndex + currentValue; i++ ) { 
         tinyArr.push(arr[i])
        }  
        currentIndex += oneJump(tinyArr) //adding the currentIndex total to the return Value oneJump()
        currentValue = arr[currentIndex]
        jumps++;
        console.log('tinyArr ====>', tinyArr)
   }
   while(arr.length - currentIndex > currentValue)
   return jumps + 1
};

module.exports = minJumps


// if arr.length = 0
//return -1
//if arr.length = 1
// return 1 jump
//else if array.length(10) - currentIndex(6) <= currentValue(7)
//then return the number of jumps + 1
// return minjumps(arr)

//set first index to current index
//make a variable call jumps = 0  which will be incrementing the value eachtime
//begin while loop
    //then find the potential jumps
    // pass those values into oneJump()  
    // will return the index of the current array
    //set current index to current index + return value
    //jump++
    //condition === line 27 do a while loop everytime we jump
//return jumps + 1