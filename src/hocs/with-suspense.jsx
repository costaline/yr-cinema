import React, { Suspense } from 'react';

import { Loader } from '~components/shared/loader';

export const withSuspense = (Wrapped) => {
  const Suspensed = (props) => (
    <Suspense fallback={<Loader />}>
      <Wrapped {...props} />
    </Suspense>
  );

  return Suspensed;
};
