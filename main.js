class Animal {
    type;
    species;
    name;
    hp;
    attack;
    weakness;

    constructor(type, species, name, hp, attack, weakness){
        this.species = species;
        this.type = type
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.weakness = weakness;
    }

    myAnimal(){
        console.log(
        'Name:', this.name,
        'Type:', this.type, 
        'Species:', this.species, 
        'HP:', this.hp, 
        'Attack:', this.attack, 
        'Weakness:', this.weakness)
    }

}


const gorilla = new Animal('Earth', 'Gorilla', 'Harambe', 35, 15, 'Fire');
const shark = new Animal('Water', 'Shark', 'Dave', 30, 20, 'Earth');
const dragon = new Animal('Fire', 'Dragon', 'Hubert', 40, 10, 'Water');


const allAnimals = [gorilla, shark, dragon]; 
const water = [shark];
const earth = [gorilla];
const fire = [dragon];

//allAnimals[1].myAnimal();

//function picked(allAnimals) {

   // let i = gorilla;

//if(allAnimals[i] = true) {
 //   console.log(allAnimals[i]);
//}
//}

//console.log(picked());

//start

console.log('Hello and welcome to Monster Quest! Pick your champion!')

