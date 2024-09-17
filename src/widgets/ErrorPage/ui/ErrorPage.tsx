'use client';

import { Button, Container, Group, Title, Text } from '@/shared/ui';
import { useTranslations } from 'next-intl';
import styles from './ErrorPage.module.css';

export function ErrorPage({ reset }: { reset: () => void }) {
  const t = useTranslations('Error.500');

  return (
    <Container className={styles.root}>
      <div className={styles.label}>500</div>
      <Title className={styles.title}>{t('title')}</Title>
      <Text c="dimmed" size="lg" ta="center" className={styles.description}>
        {t('text')}
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md" onClick={reset}>
          {t('button')}
        </Button>
      </Group>
    </Container>
  );
}
