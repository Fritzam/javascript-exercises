const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function (people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            const newDate = new Date().getFullYear();
            people[i].yearOfDeath = newDate;
        }
    }
    let highest_age = 0;

    for (let i = 0; i < people.length; i++) {
        if (people[i]['yearOfDeath'] - people[i]['yearOfBirth'] >
            highest_age) {
                highest_age = people[i]['yearOfDeath'] - people[i]['yearOfBirth'];
            }
        }
    for (let i = 0; i < people.length; i++) {
        if (people[i]['yearOfDeath'] - people[i]['yearOfBirth'] === highest_age) {
            return people[i];
        }

    }
}


// Do not edit below this line
module.exports = findTheOldest;
