{
    // 
    let myNumberArray: number[] = [1, 1, 1, 2, 3, 4, 4, 5, 5, 6, 7];
    const removeDuplicateItems = (myNumberArray: number[]):number[] => {
        const myArray: number[] = [];
        for (let i of myNumberArray) {
            if (!myArray.includes(i)) {
                myArray.push(i)
            }
        }
        return myArray;
    }
    const result = removeDuplicateItems(myNumberArray)
    console.log(`Original Array was : ${myNumberArray} and result Array is ${result}`)







    // 
}