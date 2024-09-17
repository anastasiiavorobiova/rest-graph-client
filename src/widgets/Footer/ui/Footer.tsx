'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RS from '@/shared/assets/icons/rss-logo.svg';
import GHlogo from '@/shared/assets/icons/logo-github.svg';
import { ActionIcon, Container, Group, Logo, rem, Text } from '@/shared/ui';
import styles from './Footer.module.css';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <div className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.groups}>
          <div className={styles.wrapper}>
            <Text className={styles.title}>{t('creators')}</Text>
            <Text<'a'>
              className={styles.link}
              component="a"
              href="https://github.com/anastasiiavorobiova"
              onClick={(event) => event.preventDefault()}
            >
              Anastasiia Vorobiova
            </Text>
          </div>
        </div>
      </Container>
      <Container className={styles.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 All rights reserved.
        </Text>

        <Group gap={0} className={styles.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Image src={RS} alt="RSSchool" width={20} height={20} style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Image src={GHlogo} alt="GitHub" width={20} height={20} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
