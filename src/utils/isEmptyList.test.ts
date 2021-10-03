import { isEmptyList } from '../utils';

test('isEmptyList on empty string', () => {
    expect(isEmptyList('')).toBe(false);
});

test('isEmptyList on non-empty string', () => {
    expect(isEmptyList('lorem ipsum')).toBe(false);
});

test('isEmptyList on null and undefined values', () => {
    expect(isEmptyList(null)).toBe(false);
    expect(isEmptyList(undefined)).toBe(false);
    expect(isEmptyList('null')).toBe(false);
    expect(isEmptyList('undefined')).toBe(false);
});

test('isEmptyList on numbers', () => {
    expect(isEmptyList(0)).toBe(false);
    expect(isEmptyList(-1)).toBe(false);
    expect(isEmptyList(1)).toBe(false);
    expect(isEmptyList('1')).toBe(false);
    expect(isEmptyList('-1')).toBe(false);
});

test('isEmptyList on boolean values', () => {
    expect(isEmptyList(true)).toBe(false);
    expect(isEmptyList(false)).toBe(false);
    expect(isEmptyList('true')).toBe(false);
    expect(isEmptyList('false')).toBe(false);
});

test('isEmptyList on lists', () => {
    expect(isEmptyList([])).toBe(true);
    expect(isEmptyList([1, 2, 'lorem ipsum'])).toBe(false);
});

test('isEmptyList on objects', () => {
    expect(isEmptyList({})).toBe(false);
    expect(isEmptyList({ key1: 'value1', key2: 'value2' })).toBe(false);
});
