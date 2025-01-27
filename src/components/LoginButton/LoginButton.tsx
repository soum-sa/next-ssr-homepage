import { useTranslations } from 'next-intl';
import { Link } from '@src/i18n/routing';
import { cx } from '@panda-styled-system/css';

import { loginButton } from './LoginButton.styled';

export function LoginButton({ className = '' }: { className?: string }) {
  const t = useTranslations('loginButton');
  return (
    <Link className={cx(loginButton, className)} href="/login" aria-label={t('login')}>
      {t('login')}
    </Link>
  );
}
