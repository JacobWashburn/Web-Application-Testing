import React from 'react';
import {render} from '@testing-library/react';
import Display from '../Components/Display';

test('test all elements render', () => {
    const container = render(<Display/>);
    container.getByText('Strikes');
    container.getByText('Balls');
});