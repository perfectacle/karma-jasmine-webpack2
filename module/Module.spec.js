import {add} from './ModuleA';
import {mul} from './ModuleB';
describe('Module', () => {
  describe('A', () => {
    it('add(1, 2, 3, 4) === 10', () => {
      expect(add(1, 2, 3, 4)).toEqual(10);
    });
  });

  describe('B', () => {
    it('mul(1, 2, 3, 4) === 24', () => {
      expect(mul(1, 2, 3, 4)).toEqual(24);
    });
  });
});