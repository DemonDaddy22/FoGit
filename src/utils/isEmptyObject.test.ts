import { isEmptyObject } from '../utils';

test('isEmptyObject on empty string', () => {
    expect(isEmptyObject('')).toBe(true);
});

test('isEmptyObject on non-empty string', () => {
    expect(isEmptyObject('lorem ipsum')).toBe(true);
});

test('isEmptyObject on null and undefined values', () => {
    expect(isEmptyObject(null)).toBe(true);
    expect(isEmptyObject(undefined)).toBe(true);
    expect(isEmptyObject('null')).toBe(true);
    expect(isEmptyObject('undefined')).toBe(true);
});

test('isEmptyObject on numbers', () => {
    expect(isEmptyObject(0)).toBe(true);
    expect(isEmptyObject(-1)).toBe(true);
    expect(isEmptyObject(1)).toBe(true);
    expect(isEmptyObject('1')).toBe(true);
    expect(isEmptyObject('-1')).toBe(true);
});

test('isEmptyObject on boolean values', () => {
    expect(isEmptyObject(true)).toBe(true);
    expect(isEmptyObject(false)).toBe(true);
    expect(isEmptyObject('true')).toBe(true);
    expect(isEmptyObject('false')).toBe(true);
});

test('isEmptyObject on lists', () => {
    expect(isEmptyObject([])).toBe(true);
    expect(isEmptyObject([1, 2, 'lorem ipsum'])).toBe(true);
});

test('isEmptyObject on objects', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({ key1: 'value1', key2: 'value2' })).toBe(false);
});
