const Player = require('../lib/Player');

const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');


test('creates a player object', () => {
    const player = new Player('Archie');

    expect(player.name).toBe('Archie');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    // adding code to existing test
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});