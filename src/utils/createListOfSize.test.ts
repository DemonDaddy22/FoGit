import { createListOfSize } from '.';

test('createListOfSize 4 and begin with 2', () => {
    expect(createListOfSize(4, 2)).toEqual([2, 3, 4, 5]);
});

test('createListOfSize 4 and begin with 0', () => {
    expect(createListOfSize(4, 0)).toEqual([0, 1, 2, 3]);
});

test('createListOfSize 4 and begin with -4', () => {
    expect(createListOfSize(4, -2)).toEqual([-2, -1, 0, 1]);
});

test('createListOfSize 999 and begin with -999', () => {
    const testList = createListOfSize(999, -998);
    expect(testList.length).toEqual(999);
    expect(testList[998]).toEqual(0);
});