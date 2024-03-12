import { render, screen } from '@testing-library/react';

import { Button } from '../Button/Button';

describe('button', () => {
    test('to be in document', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('check clear class', () => {
        render(<Button variant="outline">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('outline');
        screen.debug();
    });
});
