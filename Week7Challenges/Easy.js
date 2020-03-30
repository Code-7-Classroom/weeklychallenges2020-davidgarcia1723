// var person1 = ["David", "Garcia", 24];
// var person2 = ["Jake", "The Monkey", 12];

// console.log(`Hello my name is ${person2[0]} ${person2[1]}, and I'm ${person2[2]} years old.`)


var people = [
    {
        firstName: "David",
        lastName: "Garcia",
        age: 24
    },
    {
        firstName: "Bob",
        lastName: "The Builder",
        age: 40
    },
    {
        firstName: "Spongebob",
        lastName: "Squarepants",
        age: 32
    }
]

for (var i=0; i < people.length; i++) {
    console.log(`Hi, my name is ${people[i].firstName} ${people[i].lastName}, and I'm ${people[i].age} years old.`)
}
