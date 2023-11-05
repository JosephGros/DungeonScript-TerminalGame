class Battle {
    mage23; randomBoss; attackdmg1; playerHP; bossHP; randomPlayerAbility; randomBossAbility;

    constructor(mage23, randomBoss, attackdmg1, playerHP, bossHP, randomPlayerAbility, randomBossAbility){
        this.mage23 = mage23;
        this.randomBoss = randomBoss;
        this.attackdmg1 = attackdmg1;
        this.playerHP = playerHP;
        this.bossHP = bossHP;
        this.randomPlayerAbility = randomPlayerAbility; 
        this.randomBossAbility = randomBossAbility;
    }



    playerDmg(){
        
    }
        

    playerAttack(){
        const random1 = Math.floor(Math.random() * 10) +1;
        const result2 = random1 * vecna.bossAttackDmg;
        console.log('Damage taken: ', result2);

        const random2 = Math.floor(Math.random() * 30) +1;
        const result1 = random2 * mage.attackdmg;
        console.log('Damage given: ', result1);

        const bossDmgTaken = vecna.bossHP - result1;
        const playerDmgTaken = mage.hp - result2;
        console.log('Boss HP: ',bossDmgTaken);
        console.log('Your HP: ',playerDmgTaken);
    }

    for 



    attackNow(){
        let attack = prompt('Attack now? [y] [n]: ');
        switch(attack){
            case 'y':
                yesSir.playerAttack();
                while(mage.hp > 0){
                    yesSir.attackNow();
                }
            break;
            case 'n':
                Start.welcome();
            break;
        }
    }

}

// const vecna = new bosses('Vecna the Necromancer' , 'Undead (Lich)', ['Necromantic Mastery: Vecna controls life and death through necromantic magic.',
// 'Eye and Hand of Vecna: Vecna wields these artifacts for enhanced perception and magical power.',
// 'Undying Lich Form: Vecnas lich nature grants immortality and resilience.',
// 'Soul Siphon: Vecna drains life to replenish health and magic.', ], 2500, 90, 'Physical Damage');
//const mage = new charachters('Elowen Stormweaver','Mage', ['Fire Bolt', 'Ice Blast', 'Lightning Bolt', 'mDefense', ], 100, 30, 150, 'Physical');
//const bossArr = new Battle['kebab', 'sås', 'din mamma'];

const yesSir = new Battle();

yesSir.attackNow();

const playerMage = new Battle(mage, )

console.log(this.chosenChampion);