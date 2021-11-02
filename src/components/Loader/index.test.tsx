import { render } from '@testing-library/react';
import Loader from '.';

describe('<Navigation/>', () => {
    test('spinner with default settings', async () => {
        const { getByTestId } = render(<Loader />);
        const testSpinner = getByTestId('loader-spinner');
        expect(testSpinner).toBeTruthy();
        expect(testSpinner.className).toEqual('spinner');
        expect(testSpinner).toHaveStyle('width: 40px; height: 40px');
        expect(testSpinner.firstChild).toHaveStyle(
            'background-color: rgb(254, 254, 254)'
        );
        expect(testSpinner.lastChild).toHaveStyle(
            'background-color: rgb(254, 254, 254)'
        );
    });

    test('spinner with specific size', async () => {
        const { getByTestId } = render(<Loader size={20}></Loader>);
        const testSpinner = getByTestId('loader-spinner');
        expect(testSpinner).toHaveStyle('width: 20px; height: 20px');
    });

    test('spinner with specific color', async () => {
        const { getByTestId } = render(<Loader color="#F00"></Loader>);
        const testSpinner = getByTestId('loader-spinner');
        expect(testSpinner).toBeTruthy();
        expect(testSpinner.firstChild).toHaveStyle(
            'background-color: rgb(255, 0, 0)'
        );
        expect(testSpinner.lastChild).toHaveStyle(
            'background-color: rgb(255, 0, 0)'
        );
    });
});
