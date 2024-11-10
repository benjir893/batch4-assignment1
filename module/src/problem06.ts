{
    // 
    /**
     * Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.*/ 

    interface Profile {
        name:string,
        age:number,
        email:string,
    }

    const profile :Profile={
        name:'Alice',
        age:26,
        email:'alice@gmail.com'
    }
    const myProfile = (profile:Profile, partialUpdate:{name?:string, age?:number, email?:string})=>{
        return {
            ...profile,
            ...partialUpdate
        }
    }
    const updateProfile = myProfile(profile, {age:34})
    console.log(updateProfile)






    // 
}