// class Animal {
//     type;
//     species;
//     name;
//     hp;
//     attack;
//     weakness;

//     constructor(type, species, name, hp, attack, weakness){
//         this.species = species;
//         this.type = type
//         this.name = name;
//         this.hp = hp;
//         this.attack = attack;
//         this.weakness = weakness;
//     }

//     myAnimal(){
//         console.log(
//         'Name:', this.name,
//         'Type:', this.type, 
//         'Species:', this.species, 
//         'HP:', this.hp, 
//         'Attack:', this.attack, 
//         'Weakness:', this.weakness)
//     }

// }


// const gorilla = new Animal('Earth', 'Gorilla', 'Harambe', 35, 15, 'Fire');
// const shark = new Animal('Water', 'Shark', 'Dave', 30, 20, 'Earth');
// const dragon = new Animal('Fire', 'Dragon', 'Hubert', 40, 10, 'Water');


// const allAnimals = [gorilla, shark, dragon]; 
// const water = [shark];
// const earth = [gorilla];
// const fire = [dragon];

// //allAnimals[1].myAnimal();

// //function picked(allAnimals) {

//    // let i = gorilla;

// //if(allAnimals[i] = true) {
//  //   console.log(allAnimals[i]);
// //}
// //}

// //console.log(picked());

// //start

// console.log('Hello and welcome to Monster Quest! Pick your champion!')

//Old Comments!!!

// //Mage
// const fireBolt = new skills(['Fire Bolt', 40, 'Attack', 'Magic', 30]);
// const iceBlast = new skills(['Ice Blast', 30, 'Attack', 'Magic', 20]);
// const lightningBolt = new skills(['Lightning Bolt', 15, 'Attack', 'Magic', 10]);
// const mDefense = new skills(['Defense', 0, 'Defense', 'Defense', 15]);
// //Warrior
// const slash = new skills(['Slash', 40, 'Attack', 'Physical damage', 30]);
// const stab = new skills(['Stab', 30, 'Attack', 'Physical damage', 20]);
// const punch = new skills(['Punch', 15, 'Attack', 'Physical damage', 10]);
// const wDefense = new skills(['Defense', 0, 'Defense', 'Defense', 15]);
// //Rogue
// const swiftStrikes = new skills(['Swift strikes', 40, 'Attack', 'Physical damage', 30]);
// const rapidShot = new skills(['Stab', 30, 'Attack', 'Physical damage', 20]);
// const daggerDance = new skills(['Punch', 15, 'Attack', 'Magic', 10]);
// const rDefense = new skills(['Defense', 0, 'Defense', 'Defense', 15]);

//const mageAbility = [fireBolt, iceBlast, lightningBolt, mDefense];

// class charachterAbility extends skills{
//     fireBolt; iceBlast; lightningBolt; mDefense;
//     slash; stab; punch; wDefense;
//     swiftStrikes; rapidShot; daggerDance; rDefense;
 
//     constructor(fireBolt, iceBlast, lightningBolt, mDefense, slash, stab,
//      punch, wDefense, swiftStrikes, rapidShot,  daggerDance, rDefense){
//          //Mage abilities
//          super(fireBolt), this.iceBlast = iceBlast; this.lightningBolt = lightningBolt; this.mDefense = mDefense;
//          //Warrior abilities
//          this.slash = slash; this.stab = stab; this.punch = punch; this.wDefense = wDefense;
//          //Rogue abilities 
//          this.swiftStrikes = swiftStrikes; this.rapidShot = rapidShot; this.daggerDance = daggerDance; this.rDefense = rDefense;
//     }
 
//      // Här ska du skriva ut alla abilities en för sig för Mage och sedan göra en ny metod för varje karaktär.
//      // och sedan lägga in de abilities längre ner så att när de trycker ja får de upp rätt abilities.
 
//     mageAbilities(){
//      console.log('- Your abilities: ')
//      this.fireBolt.forEach(ability => {
//          console.log('  - ' + ability)});
//      this.iceBlast.forEach(ability => {
//          console.log('  - ' + ability)});
//      this.lightningBolt.forEach(ability => {
//          console.log('  - ' + ability)});
//      this.mDefense.forEach(ability => {
//          console.log('  - ' + ability)}); 
//     }
 
//     warriorAbilities(){
//      console.log('- Your abilities: ')
//      this.slash.forEach(ability => {
//          console.log('  - ' + ability)});
//      this.stab.forEach(ability => {
//          console.log('  - ' + ability)});
//      this.punch.forEach(ability => {
//          console.log('  - ' + ability)});
//      this.wDefense.forEach(ability => {
//          console.log('  - ' + ability)}); 
//     }
 
//     rogueAbilities(){
//      console.log('- Your abilities: ')
//      this.swiftStrikes.forEach(ability => {
//          console.log('  - ' + ability)});
//      this.rapidShot.forEach(ability => {
//          console.log('  - ' + ability)});
//      this.daggerDance.forEach(ability => {
//          console.log('  - ' + ability)});
//      this.rDefense.forEach(ability => {
//          console.log('  - ' + ability)}); 
//     }
 
//  }
 
 //const abilities = new charachterAbility();


 // class skills extends charachters {
//     physical; //physical damage/power
//     strenght; //The charachters strength
//     speed; //speed fast damage/power
//     magic; //Magic damage/power
//     defense; //what defense the charachters have

//     constructor(physical, strenght, speed, magic, defense){
//         this.physical = physical;
//         this.strenght = strenght;
//         this.speed = speed;
//         this.magic = magic;
//         this.defense = defense;
//     }
// }

// ability1; power;
//     ability2; stat;
//     ability3; damageType;
//     ability4; manaCost;

//     constructor(
//         ability1, power,
//         ability2, stat,
//         ability3, damageType,
//         ability4, manaCost,){
//         this.ability1 = ability1; this.power = power;
//         this.ability2 = ability2; this.stat = stat;
//         this.ability3 = ability3; this.damageType = damageType;
//         this.ability4 = ability4; this.manaCost = manaCost;
//         }
        
    

//     mageAbilitiesLog(){
//         console.log('- Your abilities: ');

//         console.log('- ' + this.ability1)
//         this.power.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});
        
//         console.log('- ' + this.ability2)
//         this.stat.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});
        
//         console.log('- ' + this.ability3)
//         this.damageType.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});
        
//         console.log('- ' + this.ability4)
//         this.manaCost.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});
        
//         console.log('____________________________________ \n');
//         Start.bossSelection();
        
//        }
    
//        warriorAbilitiesLog(){
//         console.log('- Your abilities: ');

//         console.log('\n');
//         console.log('- ' + this.ability1)
//         this.power.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});
    
//         console.log('\n');
//         console.log('- ' + this.ability2)
//         this.stat.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});
    
//         console.log('\n');
//         console.log('- ' + this.ability3)
//         this.damageType.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});
    
//         console.log('\n');
//         console.log('- ' + this.ability4)
//         this.manaCost.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)}); 

//         console.log('\n');
//         console.log('____________________________________ \n');
//         Start.bossSelection();
//        }
    
//        rogueAbilitiesLog(){
//         console.log('- Your abilities: ');

//         console.log('\n');
//         console.log('- ' + this.ability1)
//         this.power.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});

//         console.log('\n');
//         console.log('- ' + this.ability2)
//         this.stat.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});

//         console.log('\n');
//         console.log('- ' + this.ability3)
//         this.damageType.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});

//         console.log('\n');
//         console.log('- ' + this.ability4)
//         this.manaCost.forEach(abilitys => {
//         console.log('  ¤ ' + abilitys)});

//         console.log('____________________________________ \n');
//         Start.bossSelection();
//        }


// class skills {
//     ability1; power; stat; damageType; manaCost;

//     constructor(ability1, power, stat, damageType, manaCost){
//         this.ability1 = ability1; this.power = power; this.stat = stat; 
//         this.damageType = damageType; this.manaCost = manaCost;
//         }
        
//         abilitiesLog(){
//             console.log(' - ', this.ability1);
//             console.log('  ¤ Power: ', this.power);
//             console.log('  ¤ Stat: ', this.stat);
//             console.log('  ¤ Damage Type: ', this.damageType);
//             console.log('  ¤ Mana Cost ', this.manaCost);
//         }
    

    // mageAbilitiesLog(){
    //     console.log('- Your abilities: ');

    //     console.log('- ' + this.ability1)
    //     this.power.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});
        
    //     console.log('- ' + this.ability2)
    //     this.stat.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});
        
    //     console.log('- ' + this.ability3)
    //     this.damageType.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});
        
    //     console.log('- ' + this.ability4)
    //     this.manaCost.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});
        
    //     console.log('____________________________________ \n');
    //     Start.bossSelection();
        
    //    }
    
    //    warriorAbilitiesLog(){
    //     console.log('- Your abilities: ');

    //     console.log('\n');
    //     console.log('- ' + this.ability1)
    //     this.power.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});
    
    //     console.log('\n');
    //     console.log('- ' + this.ability2)
    //     this.stat.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});
    
    //     console.log('\n');
    //     console.log('- ' + this.ability3)
    //     this.damageType.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});
    
    //     console.log('\n');
    //     console.log('- ' + this.ability4)
    //     this.manaCost.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)}); 

    //     console.log('\n');
    //     console.log('____________________________________ \n');
    //     Start.bossSelection();
    //    }
    
    //    rogueAbilitiesLog(){
    //     console.log('- Your abilities: ');

    //     console.log('\n');
    //     console.log('- ' + this.ability1)
    //     this.power.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});

    //     console.log('\n');
    //     console.log('- ' + this.ability2)
    //     this.stat.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});

    //     console.log('\n');
    //     console.log('- ' + this.ability3)
    //     this.damageType.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});

    //     console.log('\n');
    //     console.log('- ' + this.ability4)
    //     this.manaCost.forEach(abilitys => {
    //     console.log('  ¤ ' + abilitys)});

    //     console.log('____________________________________ \n');
    //     Start.bossSelection();
    //    }

//}

//Abilities
//Mage
const mageAbilities = [new skills('Fire Bolt', 40,'Attack','Magic', 30),
    new skills('Ice Blast','Power: ' +30, 'Stat: Attack', 'Damage Type: Magic', 'Mana Cost: '+20),
    new skills('Lightning Bolt', 'Power: '+15, 'Stat: Attack', 'Damage Type: Magic', 'Mana Cost: '+10),
    new skills('Defense','Stat: Defense', 'Mana Cost: '+15)];


    mageAbilities.forEach(ability => {
        ability.abilitiesLog();
    });


function battleMage(){
    return Math.floor(Math.random() * ) +1;
}

const dmgRandom = battleMage();

if (mage = chosenBoss){
    mage[5] = 
}




// use push to push the chosen charachters abilities and so on to from pick champion method to battle method. So the chosen stats
//are there. Koden du hittade kan du använda men göra om och lägga till saker. Men all den koden är en runda av attack så det kommer krävas 
//en del plus att du måste registrera hur mycket attack det blev så att det går att göra - på hp. 