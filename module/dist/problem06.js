"use strict";
{
    const profile = {
        name: 'Alice',
        age: 26,
        email: 'alice@gmail.com'
    };
    const myProfile = (profile, partialUpdate) => {
        return Object.assign(Object.assign({}, profile), partialUpdate);
    };
    const updateProfile = myProfile(profile, { age: 34 });
    console.log(updateProfile);
    // 
}
