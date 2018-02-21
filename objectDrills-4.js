const firstPerson = {
    name: 'Bob',
    jobTitle: 'Firefighter',
}

const secondPerson = {
    name: 'Alice',
    jobTitle: 'Brownie Maker',
}

const thirdPerson = {
    name: 'Mark',
    jobTitle: 'CEO',
}

const fourthPerson = {
    name: 'Bill',
    jobTitle: 'fisher',
}

const fifthPerson = {
    name: 'Donald',
    jobTitle: 'janitor',
}

const people = [firstPerson, secondPerson, thirdPerson, fourthPerson, fifthPerson];

people.forEach(function (person) {
    console.log(person);
})
