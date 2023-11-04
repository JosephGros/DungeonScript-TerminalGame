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
const mage = new charachters('Elowen Stormweaver','Mage', ['Fire Bolt', 'Ice Blast', 'Lightning Bolt', 'mDefense', ], 100, 30, 150, 'Physical');
const warrior = new charachters('Sir Cedric Ironclad','Warrior', ['Slash', 'Stab', 'Punch', 'wDefense', ], 120, 40, 100, 'Speed');
const rogue = new charachters('Lyra Shadowblade','Rogue', ['Swift strikes', 'Rapid shot', 'Dagger Dance', 'rDefense', ], 90, 50, 100, 'Magic');


class bosses {
    bossName;
    bossType;
    bossAbilities;
    bossHP;
    bossAttackdmg;
    bossWeakness;

    constructor(bossName, bossType, bossAbilities, bossHP, bossAttackdmg, bossWeakness){
    this.bossName = bossName;
    this.bossType = bossType;
    this.bossAbilities = bossAbilities;
    this.bossHP = bossHP;
    this.bossAttackdmg = bossAttackdmg;
    this.bossWeakness = bossWeakness;
    }

}
//Enemy bosses
const kutulu = new charachters();
const demogorgon = new charachters();
const vecna = new charachters();
const lilith = new charachters();
const orcus = new charachters();
const baphomet = new charachters();
const bahamut = new charachters();
const lorthulu = new charachters();
const xanathar = new charachters();
const acererak = new charachters();
const raistlin = new charachters();
const dourden = new charachters();
const baelor = new charachters();
const selenea = new charachters();
const maelgrim = new charachters();
const gryphonax = new charachters();
const satan = new charachters();




class skills {
    ability1; power;
    ability2; stat;
    ability3; damageType;
    ability4; manaCost;

    constructor(
        ability1, power,
        ability2, stat,
        ability3, damageType,
        ability4, manaCost,){
        this.ability1 = ability1; this.power = power;
        this.ability2 = ability2; this.stat = stat;
        this.ability3 = ability3; this.damageType = damageType;
        this.ability4 = ability4; this.manaCost = manaCost;
        }
        
    

    mageAbilitiesLog(){
        console.log('- Your abilities: ');

        console.log('- ' + this.ability1)
        this.power.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
        
        console.log('- ' + this.ability2)
        this.stat.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
        
        console.log('- ' + this.ability3)
        this.damageType.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
        
        console.log('- ' + this.ability4)
        this.manaCost.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
        
       }
    
       warriorAbilitiesLog(){
        console.log('- Your abilities: ');

        console.log('- ' + this.ability1)
        this.power.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
    
        console.log('- ' + this.ability2)
        this.stat.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
    
        console.log('- ' + this.ability3)
        this.damageType.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
    
        console.log('- ' + this.ability4)
        this.manaCost.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)}); 
       }
    
       rogueAbilitiesLog(){
        console.log('- Your abilities: ');

        console.log('- ' + this.ability1)
        this.power.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
    
        console.log('- ' + this.ability2)
        this.stat.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
    
        console.log('- ' + this.ability3)
        this.damageType.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
    
        console.log('- ' + this.ability4)
        this.manaCost.forEach(abilitys => {
        console.log('  ¤ ' + abilitys)});
       }

}

//Abilities
//Mage
const mageAbilities = new skills('Fire Bolt', ['Power: ' + 40,'Stat: Attack','Damage Type: Magic','Mana Cost: ' + 30],
    'Ice Blast', ['Power: ' +30, 'Stat: Attack', 'Damage Type: Magic', 'Mana Cost: '+20],
    'Lightning Bolt', ['Power: '+15, 'Stat: Attack', 'Damage Type: Magic', 'Mana Cost: '+10],
    'Defense', ['Stat: Defense', 'Mana Cost: '+15]);

 const warriorAbilities = new skills(
    'Slash', ['Power: ' + 40,'Stat: Attack','Damage Type: Physical Damage','Mana Cost: ' + 30], 
    'Stab', ['Power: ' +30, 'Stat: Attack', 'Damage Type: Physical Damage', 'Mana Cost: '+20],
    'Punch', ['Power: '+15, 'Stat: Attack', 'Damage Type: Physical Damage', 'Mana Cost: '+10], 
    'Defense', ['Stat: Defense', 'Mana Cost: '+15]);

 const rogueAbilities = new skills(
    'Swift Strikes', ['Power: ' + 40,'Stat: Attack','Damage Type: Physical Damage','Mana Cost: ' + 30], 
    'Rapid Shot', ['Power: ' +30, 'Stat: Attack', 'Damage Type: Physical Damage', 'Mana Cost: '+20],
    'Dagger Dance', ['Power: '+15, 'Stat: Attack', 'Damage Type: Magic', 'Mana Cost: '+10], 
    'Defense', ['Stat: Defense', 'Mana Cost: '+15]);
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
                console.log('__________________\n');
                mageAbilities.mageAbilitiesLog();
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
                console.log('__________________\n');
                warriorAbilities.mageAbilitiesLog();
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
                console.log('__________________\n');
                rogueAbilities.mageAbilitiesLog();
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

//Game launch
const Start = new gameLaunch();
const Start2 = new gameLaunch();

Start.welcome()
