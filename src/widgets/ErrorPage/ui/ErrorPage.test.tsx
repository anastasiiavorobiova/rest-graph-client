import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithWrappers } from '@/shared/lib/tests/withWrappers';
import { ErrorPage } from './ErrorPage';

describe('Error Page component', () => {
  test('Renders', async () => {
    const spy = vi.fn();

    await renderWithWrappers(<ErrorPage reset={spy} />);

    expect(screen.getByText('500')).toBeInTheDocument();
  });
});
