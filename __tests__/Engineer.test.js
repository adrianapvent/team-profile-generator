const Engineer = require('../lib/assets/js/Engineer.js');

// create Engineer object
test('create Engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.github).toBe('github');
});

// get Engineer github
test('get Engineer github', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

// get Engineer role
test('gets role of employee', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.getRole()).toEqual("Engineer");
});

