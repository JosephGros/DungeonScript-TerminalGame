const prompt = require("prompt-sync")({sigint:true});

class charachters {
    name;
    type;
    abilities;
    hp;
    attack;
    mana;
    weakness;

    constructor(name, type, abilities, hp, attack, mana, weakness){
        this.name = name;
        this.type = type
        this.abilities = abilities;
        this.hp = hp;
        this.attack = attack;
        this.mana = mana
        this.weakness = weakness;
    }

    myChampion(){
        console.log('- Name: ', this.name);
        console.log('- Type: ', this.type)
        console.log('- Skills: ');
        this.abilities.forEach(skill => {
            console.log('  ¤ ' + skill)
        });
        console.log('- HP:', this.hp);
        console.log('- Attack Damage:', this.attack);
        console.log('- Mana: ', this.mana)
        console.log('- Weakness:', this.weakness);
    }
}

//Player charachters
const mage = new charachters('Elowen Stormweaver','Mage', ['Fire Bolt', 'Ice Blast', 'Lightning Bolt', 'mDefense', ], 100, 30, 150, 'Physical');
const warrior = new charachters('Sir Cedric Ironclad','Warrior', ['Slash', 'Stab', 'Punch', 'wDefense', ], 120, 40, 100, 'Speed');
const rogue = new charachters('Lyra Shadowblade','Rogue', ['Swift strikes', 'Rapid shot', 'Dagger Dance', 'rDefense', ], 90, 50, 100, 'Magic');

//Enemy bosses



class skills {
    ability;
    power;
    stat;
    damageType;
    manaCost;
    fireBolt; iceBlast; lightningBolt; mDefense;
    slash; stab; punch; wDefense;
    swiftStrikes; rapidShot; daggerDance; rDefense;

    constructor(ability, power, stat, damageType, manaCost, fireBolt, iceBlast, lightningBolt, mDefense, slash, stab,
        punch, wDefense, swiftStrikes, rapidShot,  daggerDance, rDefense){
        this.ability = ability; this.power = power;
        this.stat = stat; this.damageType = damageType;
        this.manaCost = manaCost;
        //Mage abilities
        this.fireBolt = fireBolt, this.iceBlast = iceBlast; this.lightningBolt = lightningBolt; this.mDefense = mDefense;
        //Warrior abilities
        this.slash = slash; this.stab = stab; this.punch = punch; this.wDefense = wDefense;
        //Rogue abilities 
        this.swiftStrikes = swiftStrikes; this.rapidShot = rapidShot; this.daggerDance = daggerDance; this.rDefense = rDefense;
    }

    mageAbilities(){
        console.log('- Your abilities: ');
        this.ability.forEach(abilitys => {
            console.log('  - ' + abilitys)});
        this.power.forEach(abilitys => {
            console.log('  - ' + abilitys)});
        this.damageType.forEach(abilitys => {
            console.log('  - ' + abilitys)});
        this.manaCost.forEach(abilitys => {
            console.log('  - ' + abilitys)}); 
       }
    
       warriorAbilities(){
        console.log('- Your abilities: ')
        this.slash.forEach(ability => {
            console.log('  - ' + ability)});
        this.stab.forEach(ability => {
            console.log('  - ' + ability)});
        this.punch.forEach(ability => {
            console.log('  - ' + ability)});
        this.wDefense.forEach(ability => {
            console.log('  - ' + ability)}); 
       }
    
       rogueAbilities(){
        console.log('- Your abilities: ')
        this.swiftStrikes.forEach(ability => {
            console.log('  - ' + ability)});
        this.rapidShot.forEach(ability => {
            console.log('  - ' + ability)});
        this.daggerDance.forEach(ability => {
            console.log('  - ' + ability)});
        this.rDefense.forEach(ability => {
            console.log('  - ' + ability)}); 
       }

}

// //Abilities
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

const mageAbility = [new skills('Fire Bolt', 40, 'Attack', 'Magic', 30), new skills('Ice Blast', 30, 'Attack', 'Magic', 20),
new skills('Lightning Bolt', 15, 'Attack', 'Magic', 10), new skills('Defense', 0, 'Defense', 'Defense', 15)];
//const warriorAbility = [slash, stab, punch, wDefense];
//const rogueAbility = new skills([swiftStrikes, rapidShot, daggerDance, rDefense]);

class gameLaunch {


    welcome(){
        console.log('DungeonScript: The Terminal Quest! - Made by Joseph Gros and Alexander Ström');
        let chosen1 = prompt('The best terminal-turn-based dungeon game out there! Want to continue:[y] No ill come back later:[n]: ');
        switch(chosen1) {
            case 'y':
                console.log(Start2.charachterSelection());
            break;
            case 'n':
                console.log('Ok bye see you later!');
            break;
            default:
                console.log('Sorry you need to choose between [y] - [n]')

        }
    }

    charachterSelection(){
        console.log('Hello and welcome to DungeonScript: The Terminal Quest ');
        let chosen = prompt('Time to pick your charachter! Chose between Mage: [m] Warrior: [w] Rogue: [r]: ');
        switch(chosen) {
            case 'm':
                console.log('Embrace your newfound power, mage. Magic flows through your veins; the worlds secrets are yours to uncover.')
                mage.myChampion();
                Start.mageCheckSkills();
            break;
            case 'w': 
                console.log('Welcome, brave warrior. Your might and courage are the beacon that leads our party through the darkest of dungeons.')
                warrior.myChampion();
                Start.warriorCheckSkills();
            break;
            case 'r':
                console.log('Ah, the rogue, a master of stealth and cunning. You are the hidden dagger, striking when least expected, and the whisper in the shadows.')
                rogue.myChampion();
                Start.rogueCheckSkills();
            break;
            default: 
                console.log('code-404 Retry!')
                Start2.charachterSelection();
        }
    }

    mageCheckSkills(){
        console.log('Want to look at your abilities?');
        let chosen2 = prompt('Yes: [y] No: [n]: ');
        switch(chosen2) {
            case 'y':
                console.log('- Your abilities: ')
                mageAbility.forEach(skill => {
                    skill.mageAbilities();
                })
            break;
            case 'n': 
                console.log('Ok no problem!')
                //Här ska det gå vidare till storyn
            break;
            default: 
                console.log('code-404 Retry!')
                Start2.charachterSelection();
        }
    }

    warriorCheckSkills(){
        console.log('Want to look at your abilities?');
        let chosen3 = prompt('Yes: [y] No: [n]: ');
        switch(chosen3) {
            case 'y':
                console.log('Here they are!')
                warriorAbility.warriorAbilities();
            break;
            case 'n': 
                console.log('Ok no problem!')
                //Här ska det gå vidare till storyn
            break;
            default: 
                console.log('code-404 Retry!')
                Start2.charachterSelection();
        }
    }

    rogueCheckSkills(){
        console.log('Want to look at your abilities?');
        let chosen4 = prompt('Yes: [y] No: [n]: ');
        switch(chosen4) {
            case 'y':
                console.log('Here they are!')
                rogueAbility.rogueAbilities();
            break;
            case 'n': 
                console.log('Ok no problem!')
                //Här ska det gå vidare till storyn
            break;
            default: 
                console.log('code-404 Retry!')
                Start2.charachterSelection();
        }
    }

}

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

//Game launch
const Start = new gameLaunch();
const Start2 = new gameLaunch();

Start.welcome()

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




//skillls.myskills();