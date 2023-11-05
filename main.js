const prompt = require("prompt-sync")({sigint:true});

class charachters {
    name;
    type;
    abilities;
    hp;
    attackdmg;
    mana;
    weakness;

    constructor(name, type, abilities, hp, attackdmg, mana, weakness){
        this.name = name;
        this.type = type
        this.abilities = abilities;
        this.hp = hp;
        this.attackdmg = attackdmg;
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
        console.log('- Attack Damage:', this.attackdmg);
        console.log('- Mana: ', this.mana)
        console.log('- Weakness:', this.weakness);
    }
}

//Player charachters
const mage = new charachters('Elowen Stormweaver','Mage', ['Fire Bolt', 'Ice Blast', 'Lightning Bolt', 'mDefense', ], 1500, 30, 150, 'Physical');
const warrior = new charachters('Sir Cedric Ironclad','Warrior', ['Slash', 'Stab', 'Punch', 'wDefense', ], 620, 40, 100, 'Speed');
const rogue = new charachters('Lyra Shadowblade','Rogue', ['Swift strikes', 'Rapid shot', 'Dagger Dance', 'rDefense', ], 400, 50, 100, 'Magic');


class bosses {
    bossName; race; bossAbilities;
    bossHP; bossAttackDmg; bossWeakness;

    constructor(bossName, race, bossAbilities, bossHP, bossAttackDmg, bossWeakness,){
        this.bossName = bossName; this.race = race; this.bossAbilities = bossAbilities;
        this.bossHP = bossHP; this.bossAttackDmg = bossAttackDmg; this.bossWeakness = bossWeakness;
    }

    chooseBoss(){
        console.log(' - Boss: ',this.bossName);
        console.log('  - Race:          ', this.race);
        console.log('  - Abilities:     ')
        this.bossAbilities.forEach(bossAb =>{
            console.log('       ¤ ' + bossAb);
        });
        console.log('  - HP:            ', this.bossHP);
        console.log('  - Attack Damage: ', this.bossAttackDmg);
        console.log('  - Weakness:      ', this.bossWeakness);
        console.log('________________________________________\n');
    }

}


//Enemy bosses

const kutulu = new bosses('Kutulu', 'Eldritch Abomination', ['Abyssal Roar: Kutulus horrifying roar stuns and disorients, interrupting abilities.',
'Tentacles of Madness: Writhing tentacles immobilize, damage, and test sanity.',
'Eldritch Aura: Dark aura reduces accuracy, evasion, and resistance.',
'Void Gaze: Gaze induces hallucinations, damage, and confusion.'], 2000, 80, 'Light of Truth');
const vecna = new bosses('Vecna the Necromancer' , 'Undead (Lich)', ['Necromantic Mastery: Vecna controls life and death through necromantic magic.',
'Eye and Hand of Vecna: Vecna wields these artifacts for enhanced perception and magical power.',
'Undying Lich Form: Vecnas lich nature grants immortality and resilience.',
'Soul Siphon: Vecna drains life to replenish health and magic.', ], 2500, 90, 'Physical Damage');
const xanathar = new bosses('Xanathar', 'Beholder', ['All-Seeing Eye: Xanathar sees all and pierces illusions.',
'Eye Beams: Xanathars beams petrify, charm, or disintegrate.',
'Anti-Magic Field: Nullifies nearby magic.',
'Psychic Presence: Causes confusion and fear nearby.'], 16000, 500,
 'Anti-Magic Vulnerability: Xanathar is weak to anti-magic, disrupting its powers.');

const round1 = [
    
    new bosses('Raistlin', 'Sorcerer Supreme', ['Arcane Mastery: Raistlin wields powerful arcane spells.',
        'Time Manipulation: He can slow or rewind time during battle.',
        'Red Robes of Power: His red robes enhance his magic.',
        'Magus Eye: He can see and exploit magical weaknesses.'], 14000, 450, 'Physical Attacks'),
    

    ];


const orcus = new bosses();


const demonRound = [
new bosses('Baphomet', 'Demon Lord', [' Horns of the Abyss: Baphomets massive curved horns can charge and gore his foes.',
'Sacrificial Bloodlust: Baphomet gains power from the bloodshed of his followers and slain enemies.',
'Summon Abyssal Horde: Baphomet can summon a horde of fiendish creatures to his aid.',
'Abyssal Roar: Baphomets bellowing roar can instill fear in those who hear it, and it disrupts magic and abilities.'],
 35000, 700, 'Holy Magic: Baphomet is vulnerable to powerful divine and holy magic.')];


const baphomet = new bosses();
const bahamut = new bosses();
const lorthulu = new bosses();

const acererak = new bosses();
const raistlin = new bosses();
const dourden = new bosses();
const baelor = new bosses();
const selenea = new bosses();
const maelgrim = new bosses();
const gryphonax = new bosses();
const demogorgon = new bosses();
const lilith = new bosses();
const satan = new bosses();

// round1.forEach(bossRound => {
//     bossRound.chooseBoss();
// });

class skills {
    ability1; power; stat; damageType; manaCost;

    constructor(ability1, power, stat, damageType, manaCost){
        this.ability1 = ability1; this.power = power; this.stat = stat; 
        this.damageType = damageType; this.manaCost = manaCost;
        }
        
        abilitiesLog(){
            console.log(' - ', this.ability1);
            console.log('  ¤ Power:       ', this.power);
            console.log('  ¤ Stat:        ', this.stat);
            console.log('  ¤ Damage Type: ', this.damageType);
            console.log('  ¤ Mana Cost:   ', this.manaCost);
            console.log('___________________________\n');
        }

}

//Abilities
//Mage
const mageAbilities = [new skills('Fire Bolt', 40,'Attack','Magic',30),
    new skills('Ice Blast', 30,'Attack', 'Magic', 20),
    new skills('Lightning Bolt', 15, 'Attack', 'Magic', 10),
    new skills('Defense','X', 'Defense','X', 15)];
//Warrior
 const warriorAbilities = [new skills('Slash', 40,'Attack','Physical Damage',30),
 new skills('Stab', 30,'Attack', 'Physical Damage', 20),
 new skills('Punch', 15, 'Attack', 'Physical Damage', 10),
 new skills('Defense','X', 'Defense','X', 15)];
//Rogue
 const rogueAbilities = [new skills('Swift Strikes', 40,'Physical Damage','Magic',30),
 new skills('Rapid Shot', 30,'Attack', 'Physical Damage', 20),
 new skills('Dagger Dance', 15, 'Attack', 'Magic', 10),
 new skills('Defense','X', 'Defense','X', 15)];

    // mageAbilities.forEach(ability => {
    //     ability.abilitiesLog();
    // });
    // warriorAbilities.forEach(ability => {
    //     ability.abilitiesLog();
    // });
    // rogueAbilities.forEach(ability => {
    //     ability.abilitiesLog();
    // });
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
                console.log('Sorry you need to choose between [y] - [n]');
                Start.welcome();

        }
    }

    charachterSelection(){
        console.log('\n \n');
        console.log('Hello and welcome to DungeonScript: The Terminal Quest ');
        let chosen = prompt('Time to pick your charachter! Chose between Mage: [m] Warrior: [w] Rogue: [r]: ');
        switch(chosen) {
            case 'm':
                console.log('\n \n');
                console.log('Embrace your newfound power, mage. Magic flows through your veins; the worlds secrets are yours to uncover.')
                mage.myChampion();
                Start.mageCheckSkills();
            break;
            case 'w': 
                console.log('\n \n');
                console.log('Welcome, brave warrior. Your might and courage are the beacon that leads our party through the darkest of dungeons.')
                warrior.myChampion();
                Start.warriorCheckSkills();
            break;
            case 'r':
                console.log('\n \n');
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
        console.log('\n');
        console.log('Want to look at your abilities?');
        let chosen2 = prompt('Yes: [y] No: [n]: ');
        switch(chosen2) {
            case 'y':
                console.log('__________________\n');
                mageAbilities.forEach(ability => {
                    ability.abilitiesLog();
                });
            break;
            case 'n': 
                console.log('Ok no problem!')
                Start.bossSelection();
            break;
            default: 
                console.log('code-404 Retry!')
                Start2.charachterSelection();
        }
    }

    warriorCheckSkills(){
        console.log('\n');
        console.log('Want to look at your abilities?');
        let chosen3 = prompt('Yes: [y] No: [n]: ');
        switch(chosen3) {
            case 'y':
                console.log('__________________\n');
                warriorAbilities.forEach(ability => {
                    ability.abilitiesLog();
                });
            break;
            case 'n': 
                console.log('Ok no problem!')
                Start.bossSelection();
            break;
            default: 
                console.log('code-404 Retry!')
                Start2.charachterSelection();
        }
    }

    rogueCheckSkills(){
        console.log('\n');
        console.log('Want to look at your abilities?');
        let chosen4 = prompt('Yes: [y] No: [n]: ');
        switch(chosen4) {
            case 'y':
                console.log('__________________\n');
                rogueAbilities.forEach(ability => {
                    ability.abilitiesLog();
                });
            break;
            case 'n': 
                console.log('Ok no problem!')
                Start.bossSelection();
            break;
            default: 
                console.log('code-404 Retry!')
                Start2.charachterSelection();
        }
    }

    // bossSelection(){
    //     console.log('\n \n');
    //     console.log('Having chosen your character, you now stand at the precipice of adventure, ready to embark on a heroic journey. \nBut to progress, you must select a boss to face, a challenge that will test your newfound abilities and determine your fate in this world.\nChoose your opponent wisely, for your characters destiny hangs in the balance, and the battle that lies ahead will shape your legend.');
    //     let chosen5 = prompt('To continue [y] To quit [n]: ')
    //     switch(chosen5) {
    //         case 'y':
    //             console.log(); //Boss selection.
    //         break;
    //         case 'n':
    //             Start.welcome();
    //         break;
    //         default: 
    //             console.log('code-404 Retry!')
    //             Start.bossSelection();
    //     }
    // }

}




//Game launch
const Start = new gameLaunch();
const Start2 = new gameLaunch();
//Start.bossSelection();
Start.welcome()
