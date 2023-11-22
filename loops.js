const details = {
    name:'ccn',
    id:789558,
    reg:95873,
    website:'www.ccn polytecnic instituit.com'
}

// const keys = Object.keys(details)
// for(const key of keys){
//     console.log(keys);
// }

// const values = Object.values(details);
// console.log(values);

// Object.seal(details);
// details.age =25;
// console.log(details);



// Object.freeze(details);
// details.newtalk = 'new website';
// details.age =25;
// console.log(details);

// delete details.name;
// console.log(details);


// for(const item in details){
//     console.log(item);
// }

const keyvalue = Object.entries(details);
// console.log(details);


// creat a set


const letters = new Set (["a","b","c",50]);
// console.log(letters.size);

const fruits = new Map([
    ["apples",500],
    ["mangos",350],
    ["oringes",200]
])

// console.log(fruits);

