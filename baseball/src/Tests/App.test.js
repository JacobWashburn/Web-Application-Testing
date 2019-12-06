import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';
import Dashboard from '../Components/Dashboard';
import Display from '../Components/Display';

test('all components rendering on page', () => {
    render(<App/>);
    render(<Dashboard/>);
    render(<Display/>);
});
