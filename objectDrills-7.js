function createCharacter (name, nickName, race, origin, attack, defense) {
    return {
        name, nickName, race, origin, attack, defense,
        describe: function() {
            let name = this.name;
            let race = this.race;
            let origin = this.origin;
            return console.log(`${name} is a ${race} from ${origin}.`)
        },
        evaluateFight: function (character) {
            let x = 0;
            let y = 0;
            if (this.attack < character.defense){
                x = 0;
            } else {
                x = this.attack - character.defense;
            }
            if (character.attack < this.defense){
                y = 0;
            } else {
                y = this.attack - character.defense;
            }
            return console.log(`Your opponent takes ${x} damage and you receive ${y} damage`)
        }
    }
}

const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6)
const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);
const characters = [gandalf, bilbo, frodo, aragorn, legolas];
const arwen = createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 8, 8)
characters.push(arwen);
//console.log(characters);
let findAragorn = characters.find( c => c === aragorn );
//console.log(findAragorn);
let onlyHobbits = characters.filter(c => c.race === 'Hobbit');
//console.log(onlyHobbits);
let higherThanFive = characters.filter(c => c.attack > 5);
console.log(higherThanFive);