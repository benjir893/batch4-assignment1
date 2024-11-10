"use strict";
{
    const person = {
        name: 'Chandu',
        age: 41,
        email: 'chandu@chandu.com'
    };
    const validateKeys = (obj, keys) => keys.every(key => key in person);
    const aperson = validateKeys(person, ['name', 'age']);
    console.log(aperson);
    // 
}
