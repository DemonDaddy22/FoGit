import { isValidNumber } from '../utils';

test('isValidNumber on empty string', () => {
    expect(isValidNumber('')).toBe(true);
});

test('isValidNumber on non-empty string', () => {
    expect(isValidNumber('lorem ipsum')).toBe(false);
});

test('isValidNumber on null and undefined values', () => {
    expect(isValidNumber(null)).toBe(true);
    expect(isValidNumber(undefined)).toBe(false);
    expect(isValidNumber('null')).toBe(false);
    expect(isValidNumber('undefined')).toBe(false);
});

test('isValidNumber on numbers', () => {
    expect(isValidNumber(0)).toBe(true);
    expect(isValidNumber(-1)).toBe(true);
    expect(isValidNumber(1)).toBe(true);
    expect(isValidNumber('1')).toBe(true);
    expect(isValidNumber('-1')).toBe(true);
});

test('isValidNumber on boolean values', () => {
    expect(isValidNumber(true)).toBe(true);
    expect(isValidNumber(false)).toBe(true);
    expect(isValidNumber('true')).toBe(false);
    expect(isValidNumber('false')).toBe(false);
});

test('isValidNumber on lists', () => {
    expect(isValidNumber([])).toBe(true);
    expect(isValidNumber([1, 2, 'lorem ipsum'])).toBe(false);
});

test('isValidNumber on objects', () => {
    expect(isValidNumber({})).toBe(false);
    expect(isValidNumber({ key1: 'value1', key2: 'value2' })).toBe(false);
});
