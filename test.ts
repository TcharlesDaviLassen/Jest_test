import { error } from 'console';
import { sum, myBeverage, binaryStringToNumber } from './sumTest';

// Implementações jest para testes unitários.
describe('sum module', () => {

    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('adds 2 + 3 not to equal 6', () => {
        expect(sum(2, 3)).not.toEqual(6)

    });

});

// myBeverage
describe('my beverage', () => {
    test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });

    test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
    });
});


// binaryStringToNumber
describe('binaryStringToNumber', () => {

    describe('dada uma string binária inválida', () => {

      test('composto de não-números lança um Error', () => {
        expect(() => binaryStringToNumber('abc')).toThrow();
      });
  
      test('com espaço em branco extra lança Error', () => {
        expect(() => binaryStringToNumber(' 100')).toThrow();
      });
    });
  
    describe('dada uma string binária válida', () => {
      test('retorna o número correto', () => {
        expect(binaryStringToNumber('100')).toBe(4);
      });
    });
  });



  