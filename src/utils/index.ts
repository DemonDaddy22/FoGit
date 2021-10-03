/* eslint-disable prettier/prettier */
/**
 *
 * @function isEmptyString - Checks if passed value is an empty string or not
 * @param {string} value
 * @returns `boolean` indicating whether `value` is an empty string
 *
 */
export const isEmptyString = <T,>(value: string | T): boolean =>
    typeof value !== 'string' || !value?.trim()?.length;

/**
 *
 * @function isValidNumber - Checks if passed value is a valid number or not
 * @param {number | string} value
 * @returns `boolean` indicating whether `value` is a valid number
 *
 */
export const isValidNumber = <T,>(value: number | string | T): boolean =>
    typeof value === 'number';

/**
 *
 * @function isEmptyList - Checks if passed object is an empty list or not
 * @param {Array<any>} obj
 * @returns `boolean` indicating whether `obj` is an empty list
 *
 */
export const isEmptyList = <T,>(obj: Array<T> | T): boolean =>
    Array.isArray(obj) && obj.length === 0;

/**
 *
 * @function isEmptyObject - Checks if passed object is an empty object or not
 * @param {Object} obj
 * @returns `boolean` indicating whether `obj` is an empty object
 *
 */
export const isEmptyObject = <T,>(obj: Object | T): boolean =>
    typeof obj === 'object' &&
    obj !== null &&
    !Array.isArray(obj) &&
    Object.keys(obj).length === 0;
