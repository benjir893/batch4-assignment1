{
    // 

        
        const getObjectProperty=<X, Y extends keyof X >(obj:X, key:Y)=>{
            return obj[key]
        }
        
        const person ={
            id:123456,
            name:'benjir',
            age:41
        }
        const result = getObjectProperty(person, 'name');
        console.log(result)















    // 
}