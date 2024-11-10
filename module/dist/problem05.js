"use strict";
{
    // 
    const getObjectProperty = (obj, key) => {
        return obj[key];
    };
    const person = {
        id: 123456,
        name: 'benjir',
        age: 41
    };
    const result = getObjectProperty(person, 'name');
    console.log(result);
    // 
}
