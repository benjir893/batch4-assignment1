"use strict";
{
    // 
    let myNumberArray = [1, 1, 1, 2, 3, 4, 4, 5, 5, 6, 7];
    const removeDuplicateItems = (myNumberArray) => {
        const myArray = [];
        for (let i of myNumberArray) {
            if (!myArray.includes(i)) {
                myArray.push(i);
            }
        }
        return myArray;
    };
    const result = removeDuplicateItems(myNumberArray);
    console.log(`Original Array was : ${myNumberArray} and result Array is ${result}`);
    // 
}
