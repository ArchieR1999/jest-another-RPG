const Potion = require('../lib/Potion');
// importing the character() constructor for refactoring code
const Character = require('./Character');

class Player extends Character {
  constructor(name = '') {
    super(name);

    this.inventory = [new Potion('health'), new Potion()];
  }

  getStats() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

      switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
        }
    }
}

module.exports = Player;





// function Player(name = '') {
//     this.name = name;

//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 +7);
//     this.agility = Math.floor(Math.random() * 5 + 7);
//     // adding to Player() constructor function
//     this.inventory = [new Potion('health'), new Potion()];

//     // inherit prototype methods from 'Character' here:
//     Player.prototype.getStats = function() {
        


//     // returns an object with various player properties
//     Player.prototype.getStats = function() {
//         return {
//             potions: this.inventory.length,
//             health: this.health,
//             strength: this.strength,
//             agility: this.agility
//         };
//     };

//     // returns the inventory array or false if empty
//     Player.prototype.getInventory = function() {
//         if (this.inventory.length) {
//             return this.inventory;
//         }
//         return false;
//     };

//     // adding addPotion() method 
//     Player.prototype.addPotion = function(potion) {
//         this.inventory.push(potion);
//     };

//     // adding a usePotion function
//     Player.prototype.usePotion = function(index) {
//         const potion = this.getInventory().splice(index, 1)[0];

//         switch (potion.name) {
//             case 'agility':
//                 this.agility += potion.value;
//                 break;
//             case 'health':
//                 this.health += potion.value;
//                 break;
//             case 'strength':
//                 this.strength += potion.value;
//                 break;
            
//         }
//     };
// }


module.exports = Player;