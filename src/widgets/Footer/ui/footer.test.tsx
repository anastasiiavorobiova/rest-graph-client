import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithWrappers } from '@/shared/lib/tests/withWrappers';
import { Footer } from './Footer';

describe('Footer component', () => {
  test('Footer renders', async () => {
    await renderWithWrappers(<Footer />);

    expect(screen.getByRole('img', { name: 'RSSchool' })).toHaveProperty('alt', 'RSSchool');
    expect(screen.getByText('© 2024 All rights reserved.')).toBeInTheDocument();
    expect(screen.getByText('Anastasiia Vorobiova')).toHaveProperty('href', 'https://github.com/anastasiiavorobiova');
  });
});
