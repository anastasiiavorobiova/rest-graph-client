import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithWrappers } from '@/shared/lib/tests/withWrappers';
import { ErrorPage } from './ErrorPage';

describe('Error Page component', () => {
  test('Renders', async () => {
    await renderWithWrappers(<ErrorPage reset={vi.fn()} />);

    expect(screen.getByText('Something bad just happened...')).toBeInTheDocument();
  });
});
