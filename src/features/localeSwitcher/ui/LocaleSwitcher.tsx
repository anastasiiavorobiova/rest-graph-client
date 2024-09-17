'use client';

import { locales } from '@/features/localeSwitcher/config/locales';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Select, SelectProps, Group } from '@/shared/ui';

export function LocaleSwitcher() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string | null) => {
    if (newLocale) {
      router.push(pathname.replace(locale, newLocale));
    }
  };

  const renderSelectOption: SelectProps['renderOption'] = ({ option }) => (
    <Group flex="1" gap="xs">
      {option.label}
    </Group>
  );

  return (
    <Select
      aria-label="Switch locale"
      name="Switch locale"
      size="md"
      value={locale}
      onChange={handleLocaleChange}
      data={locales.map((cur) => ({
        value: cur,
        label: t(`langs.${cur}`),
      }))}
      renderOption={renderSelectOption}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 }, withinPortal: false }}
    />
  );
}
