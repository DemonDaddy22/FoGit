import { render } from '@testing-library/react';
import Loader from '.';

describe('<Navigation/>', () => {
    test('spinner shows up with default settings', async () => {
        const { getByRole } = render(<Loader />);
        expect(getByRole('svg')).toHaveAttribute('fill');
    });
});
