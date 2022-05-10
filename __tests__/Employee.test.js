const Employee = require('../lib/assets/js/Employee.js');

test('create Employee object', () => {

    const employee = new Employee ('name', 'id', 'email'); // Adriana, 1 ...or '1', vmlujanjr@outlook.com
    
    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
});

test('get Employee name', () => {

    const employee = new Employee ('name', 'id', 'email');
  
    expect(employee.getName()).toEqual(expect.any(String)); // Primitive values
});

test('get Employee id', () => {

    const employee = new Employee ('name', 'id', 'email');
  
    expect(employee.getId()).toEqual(expect.any(String));
});

test('get Employee email', () => {

    const employee = new Employee ('name', 'id', 'email');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get Employee role', () => {

    const employee = new Employee ('name', 'id', 'email');

    expect(employee.getRole()).toBe('employee');
});
