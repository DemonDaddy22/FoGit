/**
 *
 * @function isEmptyString - Checks if passed value is an empty string or not
 * @param {string | undefined} value
 * @returns `boolean` indicating whether `value` is an empty string
 *
 */
export const isEmptyString = (value: string | undefined): boolean =>
    !value || (typeof value === 'string' && value.trim().length === 0);

/**
 *
 * @function isValidNumber - Checks if passed value is a valid number or not
 * @param {number | string | undefined} value
 * @returns `boolean` indicating whether `value` is a valid number
 *
 */
export const isValidNumber = (value: number | string | undefined): boolean =>
    !isNaN(Number(value));

/**
 *
 * @function isEmptyList - Checks if passed object is an empty list or not
 * @param {Array<any> | undefined} obj
 * @returns `boolean` indicating whether `obj` is an empty list
 *
 */
export const isEmptyList = (obj: Array<any> | undefined): boolean =>
    !Array.isArray(obj) || (Array.isArray(obj) && obj.length === 0);

/**
 *
 * @function isEmptyObject - Checks if passed object is an empty object or not
 * @param {Object | undefined} obj
 * @returns `boolean` indicating whether `obj` is an empty object
 *
 */
export const isEmptyObject = (obj: Object | undefined): boolean =>
    !obj ||
    typeof obj !== 'object' ||
    Array.isArray(obj) ||
    Object.keys(obj).length === 0;
