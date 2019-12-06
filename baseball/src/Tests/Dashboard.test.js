import React from 'react';
import {render} from '@testing-library/react';
import Dashboard from '../Components/Dashboard';

test('test all elements render', () => {
    const container = render(<Dashboard/>);
    container.getByText('Strike');
    container.getByText('Ball');
    container.getByText('Foul');
    container.getByText('Hit');
});