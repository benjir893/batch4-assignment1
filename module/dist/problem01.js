"use strict";
{ // 
    const myArray = [5, 2, 3, 4, 5];
    const totalOfArray = (myArray) => {
        let total = myArray.reduce((initialtotal, index) => initialtotal + index, 0);
        return total;
    };
    console.log(`the total of Array ${myArray}  is : `, totalOfArray(myArray));
    // 
}
