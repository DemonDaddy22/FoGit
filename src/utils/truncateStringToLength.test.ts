import { truncateStringToLength } from '../utils';

test('truncateStringToLength on empty string', () => {
    expect(truncateStringToLength('', 0)).toBe('');
    expect(truncateStringToLength('', 1)).toBe('');
    expect(truncateStringToLength('', -1)).toBe('');
});

test('truncateStringToLength on non-empty string', () => {
    expect(truncateStringToLength('lorem ipsum', 0)).toBe('lorem ipsum');
    expect(truncateStringToLength('lorem ipsum', 5)).toBe('lorem...');
    expect(truncateStringToLength('lorem ipsum', -1)).toBe('lorem ipsum');
    expect(truncateStringToLength('lorem ipsum', 11)).toBe('lorem ipsum...');
    expect(truncateStringToLength('lorem ipsum', 15)).toBe('lorem ipsum');
});
