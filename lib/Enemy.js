const Potion = require('./Potion');

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}

module.exports = Enemy;

// adding methods() to make sure tests pass

// adding getHealth() method to make sure our test passes
Enemy.prototype.getHealth = function() {
    return `The ${this.name}'s health is now ${this.health}!`;
};

// adding isAlive() method to test whether or not our player is dead or alive
Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

// adding getAttackValue() method to the player prototype 
Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

// adding recudeHealth() method 
Enemy.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

// adding this ()method that concatenates the name and weapon
Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};