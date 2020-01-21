import React, { Suspense } from 'react';
import { compose } from 'redux';
import { useTranslation } from 'react-i18next';

import { withErrorBoundary } from '~hocs/with-error-boundary';
import { Loader } from '~components/shared/loader';

const AuthPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('title')}</h1>
      <hr />
      <div>
        <button onClick={() => changeLanguage('ru')}>ru</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
      <hr />
      <div>{t('text')}</div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AuthPage />
    </Suspense>
  );
};
export default compose(withErrorBoundary)(Page);
