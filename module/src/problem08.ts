{
    // 
    /*
    Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.*/ 

    type Person ={
        name:string,
        age:number,
        email:string
    }
    const person:Person={
        name:'Chandu',
        age:41,
        email:'chandu@chandu.com'
    }
    // type checkKeys<T>= T extends keyof Person? true :false;

      
    const validateKeys = <T>(obj:T, keys:(keyof T)[]): boolean => 
        keys.every(key => key in person)

    const  aperson = validateKeys(person,['name','age'])
    console.log(aperson)


    // 
}