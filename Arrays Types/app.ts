// const person: {   //not good practice at all
//     name: string;
//     age: number;

// } = {
const person = {      //right way
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[];
favoriteActivities = ['Sports' ];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! ERROR !!! 
}
