'use client';

import i18n from '../../i18n';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="lang">{t('language')}:</label>
      <select
        id="lang"
        className="border rounded px-2 py-1"
        value={i18n.language}
        onChange={handleChange}
      >
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 French</option>
      </select>
      <h1 className="text-2xl font-bold mt-4">{t('welcome')}</h1>
    </div>
  );
}
