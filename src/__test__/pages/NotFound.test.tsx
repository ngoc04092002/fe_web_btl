import React from 'react';
import { render, screen } from '@testing-library/react';

import NotFound from '@/pages/NotFound';

describe('NotFound', () => {
	describe('display test', () => {
		test('render', () => {
			render(<NotFound />);

			const element = screen.findByTestId('error-page');
			expect(element).toBeVisible();
		});
	});
});
