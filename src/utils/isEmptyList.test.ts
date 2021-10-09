import { isEmptyList } from '../utils';

test('isEmptyList on empty string', () => {
    expect(isEmptyList('')).toBe(true);
});

test('isEmptyList on non-empty string', () => {
    expect(isEmptyList('lorem ipsum')).toBe(true);
});

test('isEmptyList on null and undefined values', () => {
    expect(isEmptyList(null)).toBe(true);
    expect(isEmptyList(undefined)).toBe(true);
    expect(isEmptyList('null')).toBe(true);
    expect(isEmptyList('undefined')).toBe(true);
});

test('isEmptyList on numbers', () => {
    expect(isEmptyList(0)).toBe(true);
    expect(isEmptyList(-1)).toBe(true);
    expect(isEmptyList(1)).toBe(true);
    expect(isEmptyList('1')).toBe(true);
    expect(isEmptyList('-1')).toBe(true);
});

test('isEmptyList on boolean values', () => {
    expect(isEmptyList(true)).toBe(true);
    expect(isEmptyList(false)).toBe(true);
    expect(isEmptyList('true')).toBe(true);
    expect(isEmptyList('false')).toBe(true);
});

test('isEmptyList on lists', () => {
    expect(isEmptyList([])).toBe(true);
    expect(isEmptyList([1, 2, 'lorem ipsum'])).toBe(false);
});

test('isEmptyList on objects', () => {
    expect(isEmptyList({})).toBe(true);
    expect(isEmptyList({ key1: 'value1', key2: 'value2' })).toBe(true);
});
