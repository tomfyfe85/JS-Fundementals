 const fizzBuzz = require('../program/fizzbuzz')

describe('fizzBuzz',() => {
  it('fizzBuzz if no is divisible by 3 & 5', 
  () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz')
  });
  
  it('buzz if no is divisible by 5',
  () => {
    expect(fizzBuzz(5)).toBe('buzz')
  });

  it('fizz if no is divisible by 3', 
  () => {
    expect(fizzBuzz(3)).toBe('fizz');
  });

  it('8 if given number is 8',
  () => {
    expect(fizzBuzz(8)).toBe(8)
  });

  it('fizz if no is 18',
  () => {
    expect(fizzBuzz(18)).toBe('fizz')
  });

  it('buzz if no is 20', () => {
    expect(fizzBuzz(20)).toBe('buzz');
  });
});