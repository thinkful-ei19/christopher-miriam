const firstPerson = {
    name: 'Bob',
    jobTitle: 'Firefighter',
    boss: 'Donald'
}

const secondPerson = {
    name: 'Alice',
    jobTitle: 'Brownie Maker',
    boss: 'Donald'
}

const thirdPerson = {
    name: 'Mark Z.',
    jobTitle: 'CEO',
}

const fourthPerson = {
    name: 'Bill',
    jobTitle: 'fisher',
    boss: 'Donald'
}

const fifthPerson = {
    name: 'Donald',
    jobTitle: 'janitor',
    boss: 'Putin'
}

const people = [firstPerson, secondPerson, thirdPerson, fourthPerson, fifthPerson];

people.forEach(function (person) {
    const jobTitle = person.jobTitle;
    const name = person.name;
    if (person.boss === undefined) {
        console.log(`${jobTitle} ${name} doesn't report to anybody.`)
    } else {
        const boss = person.boss;   
        console.log(`${jobTitle} ${name} reports to ${boss}.`);
    }
})
