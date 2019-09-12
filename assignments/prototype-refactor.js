/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(objAttribs) {
    this.createdAt = objAttribs.createdAt;
    this.name = objAttribs.name;
    this.dimensions = objAttribs.dimensions;
  }
  destroy() {
    return `${this.name} says hello!`;
  }
}

class CharacterStats extends GameObject {
  constructor(charStatsAttribs) {
    super(charStatsAttribs);
    this.healthPoints = charStatsAttribs.healthPoints;
  }
  takeDamage() {
    return `${this.name} tood damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humanAttribs) {
    super(humanAttribs);
    this.team = humanAttribs.team;
    this.weapons = humanAttribs.weapons;
    this.language = humanAttribs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch refactor

class Hero extends Humanoid {
  constructor(heroAttribs) {
    super(heroAttribs);
    this.heroAttack = heroAttribs.heroAttack;
  }
  attackStrrength() {
    return `${this.name} has an attack strength of ${this.heroAttack}`;
  }
  attackTaken(hero, villain) {
    let result = hero.healthPoints - villain.villainStrength;
    if (result > 0) {
      return `${hero.name} is still standing`;
    } else {
      return `${hero.name} has fallen`;
    }
  }
}

class Villain extends Humanoid {
  constructor(villainAttribs) {
    super(villainAttribs);
    this.villainStrength = villainAttribs.villainStrength;
  }
  villainAttackStrength() {
    return `${this.name} has an attack strength of ${this.villainStrength}`;
  }
}

const goodGuy = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 100,
  name: "Very Good Guy",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish",
  heroAttack: 10
});

const badGuy = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 150,
  name: "Very Bad Guy",
  team: "Dungeon Lair",
  weapons: ["Big Sword"],
  language: "Elvish",
  villainStrength: 5
});
console.log(goodGuy.attackTaken(goodGuy, badGuy));
