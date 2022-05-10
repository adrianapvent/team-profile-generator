const Engineer = require('../lib/assets/js/Engineer.js');

// create Engineer object
test('create Engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.github).toBe('github');
});

// get Engineer github
test('get Engineer Github', () => {
    const engineer = new Engineer('Adriana', '1', 'test@gmail.com', 'adrianapvent');
    const test = engineer.getGitHub();
    
    expect(test).toEqual("https://github.com/adrianapvent");
});

// get Engineer role
test('gets role of employee', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.getRole()).toEqual("Engineer");
});

