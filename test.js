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

    mageAbilitiesLog(){
        console.log('- Your abilities: ');

        console.log('- ' + this.ability)
        this.power.forEach(abilitys => {
            console.log('  - ' + abilitys)});
        
            console.log('- ' + this.stat)
            this.damageType.forEach(abilitys => {
            console.log('  ¤ ' + abilitys)});
        
            console.log('- ' + this.manaCost)
            this.fireBolt.forEach(abilitys => {
            console.log('  ¤ ' + abilitys)});
        
            console.log('- ' + this.iceBlast)
            this.lightningBolt.forEach(abilitys => {
            console.log('  ¤ ' + abilitys)});
        
       }
    
       warriorAbilitiesLog(){
        console.log('- Your abilities: ');

        console.log('- ' + this.ability)
        this.power.forEach(abilitys => {
            console.log('  - ' + abilitys)});
        
            console.log('- ' + this.stat)
            this.damageType.forEach(abilitys => {
            console.log('  ¤ ' + abilitys)});
        
            console.log('- ' + this.manaCost)
            this.fireBolt.forEach(abilitys => {
            console.log('  ¤ ' + abilitys)});
        
            console.log('- ' + this.iceBlast)
            this.lightningBolt.forEach(abilitys => {
            console.log('  ¤ ' + abilitys)}); 
       }
    
       rogueAbilitiesLog(){
        console.log('- Your abilities: ');

        console.log('- ' + this.ability)
        this.power.forEach(abilitys => {
            console.log('  - ' + abilitys)});
        
            console.log('- ' + this.stat)
            this.damageType.forEach(abilitys => {
            console.log('  ¤ ' + abilitys)});
        
            console.log('- ' + this.manaCost)
            this.fireBolt.forEach(abilitys => {
            console.log('  ¤ ' + abilitys)});
        
            console.log('- ' + this.iceBlast)
            this.lightningBolt.forEach(abilitys => {
            console.log('  ¤ ' + abilitys)});
       }

}

//Abilities
//Mage
const mageAbilities = new skills(
    'Fire Bolt', ['Power: ' + 40,'Stat: Attack','Damage Type: Magic','Mana Cost: ' + 30],
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
