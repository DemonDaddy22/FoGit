import { isEmptyString } from '../utils';

test('isEmptyString on empty string', () => {
    expect(isEmptyString('')).toBeTruthy();
});

test('isEmptyString on non-empty string', () => {
    expect(isEmptyString('lorem ipsum')).toBeFalsy();
});

test('isEmptyString on null and undefined values', () => {
    expect(isEmptyString(null)).toBeTruthy();
    expect(isEmptyString(undefined)).toBeTruthy();
    expect(isEmptyString('null')).toBeFalsy();
    expect(isEmptyString('undefined')).toBeFalsy();
});

test('isEmptyString on numbers', () => {
    expect(isEmptyString(0)).toBeTruthy();
    expect(isEmptyString(-1)).toBeTruthy();
    expect(isEmptyString(1)).toBeTruthy();
    expect(isEmptyString('1')).toBeFalsy();
    expect(isEmptyString('-1')).toBeFalsy();
});

test('isEmptyString on boolean values', () => {
    expect(isEmptyString(true)).toBeTruthy();
    expect(isEmptyString(false)).toBeTruthy();
    expect(isEmptyString('true')).toBeFalsy();
    expect(isEmptyString('false')).toBeFalsy();
});

test('isEmptyString on lists', () => {
    expect(isEmptyString([])).toBeTruthy();
    expect(isEmptyString([1, 2, 'lorem ipsum'])).toBeTruthy();
});

test('isEmptyString on objects', () => {
    expect(isEmptyString({})).toBeTruthy();
    expect(isEmptyString({ key1: 'value1', key2: 'value2' })).toBeTruthy();
});
