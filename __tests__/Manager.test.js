const { expect } = require('expect');
const Manager = require('../lib/assets/js/Manager.js');

test('create Manager object', () => {

    const manager = new Manager ('name', 'id', 'email', 'officeNumber');

    expect(manager.officeNumber).toBe('officeNumber');
});


test('get Manager role', () => {

    const manager = new Manager ('name', 'id', 'email', 'officeNumber');

    expect(manager.getRole()).toBe('Manager');

});