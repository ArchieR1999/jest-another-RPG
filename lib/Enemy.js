const Potion = require('./Potion');
// importing the character() constructor for refactoring code
const Character = require('./Character');

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();
  }
  
  getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };
}

module.exports = Enemy;
