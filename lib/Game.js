const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy = null; // Initialize as null
    this.player = null; // Initialize as null
}

// Add initializeGame() method
Game.prototype.initializeGame = function() {
    // Populate enemies array
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'halberd'));
    this.enemies.push(new Enemy('dragon', 'fire breath'));

    // Set the first enemy as the current enemy
    this.currentEnemy = this.enemies[0];
};

// Start the game logic
const game = new Game(); // Create a Game instance
game.initializeGame();   // Initialize the game

// Prompt the player for their name
inquirer.prompt([
    {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    }
]).then(({ name }) => {
    // Set up the player instance
    game.player = new Player(name);

    // Test object creation
    console.log(game.currentEnemy, game.player);
});

module.exports = Game;