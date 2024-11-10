{
    // 
    const Input:string = "I love typescript";
    const targetWord:string = "typescript";

    const countWordOccurrences=(Input:string, targetWord:string):number=>{
        const givenInput = Input.toLowerCase().split(" ");
        const word = targetWord.toLowerCase();
        let count = 0;
        for(const i of givenInput){
            if(i === word){
                count++ ;
            }
        }
        return count;
    }
    console.log(`The given input is :${Input} and targetword: ${targetWord} and Occurance happened : ${countWordOccurrences(Input, targetWord)}`)














    // 
}