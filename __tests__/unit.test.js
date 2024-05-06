// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('valid phone number case 1', () =>{
  expect(isPhoneNumber("111-111-1111")).toBe(true);
});
test('valid phone number case 2', () =>{
  expect(isPhoneNumber("(111)-111-1111")).toBe(true);
});
test('invalid phone number case 1', () =>{
  expect(isPhoneNumber("111-1a1-1111")).toBe(false);
});
test('invalid phone number case 2', () =>{
  expect(isPhoneNumber("111-111-111")).toBe(false);
});
// isEmail
test('valid Email case 1', () =>{
  expect(isEmail("aaa@ucsd.edu")).toBe(true);
});
test('valid Email case 2', () =>{
  expect(isEmail("aaa@gmail.com")).toBe(true);
});
test('invalid Email case 1', () =>{
  expect(isEmail("aa.a@gmail.com")).toBe(false);
});
test('invalid Email case 2', () =>{
  expect(isEmail("aaa@gmail.what")).toBe(false);
});
// isStrongPassword
test('valid StrongPassword case 1', () =>{
  expect(isStrongPassword("bbbbb")).toBe(true);
});
test('valid StrongPassword case 2', () =>{
  expect(isStrongPassword("sdber1232")).toBe(true);
});
test('invalid StrongPassword case 1', () =>{
  expect(isStrongPassword("sjflhofpwejfosjdkfdsnvoufw")).toBe(false);
});
test('invalid StrongPassword case 2', () =>{
  expect(isStrongPassword("1sjviwehehfweipn")).toBe(false);
});
// isDate
test('valid Date case 1', () =>{
  expect(isDate("05/05/2024")).toBe(true);
});
test('valid Date case 2', () =>{
  expect(isDate("5/5/2024")).toBe(true);
});
test('invalid Date case 1', () =>{
  expect(isDate("05/2024/05")).toBe(false);
});
test('invalid Date case 2', () =>{
  expect(isDate("05/005/2024")).toBe(false);
});
// isHexColor
test('valid Date case 1', () =>{
  expect(isHexColor("#500")).toBe(true);
});
test('valid Date case 2', () =>{
  expect(isHexColor("#111aaa")).toBe(true);
});
test('invalid Date case 1', () =>{
  expect(isHexColor("#aaaaa")).toBe(false);
});
test('invalid Date case 2', () =>{
  expect(isHexColor("4321")).toBe(false);
});