import { isEmptyObject } from '../utils';

test('isEmptyObject on empty string', () => {
    expect(isEmptyObject('')).toBe(false);
});

test('isEmptyObject on non-empty string', () => {
    expect(isEmptyObject('lorem ipsum')).toBe(false);
});

test('isEmptyObject on null and undefined values', () => {
    expect(isEmptyObject(null)).toBe(false);
    expect(isEmptyObject(undefined)).toBe(false);
    expect(isEmptyObject('null')).toBe(false);
    expect(isEmptyObject('undefined')).toBe(false);
});

test('isEmptyObject on numbers', () => {
    expect(isEmptyObject(0)).toBe(false);
    expect(isEmptyObject(-1)).toBe(false);
    expect(isEmptyObject(1)).toBe(false);
    expect(isEmptyObject('1')).toBe(false);
    expect(isEmptyObject('-1')).toBe(false);
});

test('isEmptyObject on boolean values', () => {
    expect(isEmptyObject(true)).toBe(false);
    expect(isEmptyObject(false)).toBe(false);
    expect(isEmptyObject('true')).toBe(false);
    expect(isEmptyObject('false')).toBe(false);
});

test('isEmptyObject on lists', () => {
    expect(isEmptyObject([])).toBe(false);
    expect(isEmptyObject([1, 2, 'lorem ipsum'])).toBe(false);
});

test('isEmptyObject on objects', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({ key1: 'value1', key2: 'value2' })).toBe(false);
});
