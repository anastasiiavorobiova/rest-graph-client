'use client';

import ErrorPage from '@/widgets/ErrorPage';

export default function ErrorBoundary({ reset }: { reset: () => void }) {
  return <ErrorPage reset={reset} />;
}
