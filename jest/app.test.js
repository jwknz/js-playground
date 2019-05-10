const function1 = require('./app')

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Add 2 + 2 to equal 4', () => {
  expect(function1.add(2, 2)).toBe(4)
})

test('Add 2 - 1 to equal 1', () => {
  expect(function1.substract(2, 1)).toBe(1)
})

