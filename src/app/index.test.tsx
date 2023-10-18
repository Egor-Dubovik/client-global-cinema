import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('home page', () => {
	it('check render', () => {
		render(<Home />);
		const text = screen.getByText(/Home/i);
		expect(text).toBeInTheDocument();
	});
});
