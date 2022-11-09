const stringLength = require('./stringLength');

test('check for stringLength exception', ()=> {
expect(()=>stringLength("Hello World")).toThrow();
expect(()=>stringLength("Hello World")).toThrow(Error);
})

test('give a string value: "Hello" and check what is his length', () => {
  expect(stringLength("Hello")).toBe(5);
});