const Intern = require('../lib/assets/js/Intern.js');

test('create Intern object', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.school).toBe('school');
});

// get Intern school
test('get intern school name', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.getSchool()).toBe(intern.school);
});

// get Intern role
test('get intern role', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.getRole()).toEqual("Intern");
});