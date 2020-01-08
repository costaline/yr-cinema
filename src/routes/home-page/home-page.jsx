import React from 'react';

import { FilmsList } from '~components/home-page/films-list';
import { withErrorBoundary } from '~hocs/with-error-boundary';

const HomePage = () => {
  return <FilmsList films={films} />;
};

export default withErrorBoundary(HomePage);

const films = [
  {
    _id: 'j3kj434',
    name: 'film one',
    year: 2020,
    slogan: 'start',
    country: 'Canada',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quisquam similique tenetur laudantium. Reiciendis, at? ',
    posterURL:
      'https://avatars.mds.yandex.net/get-pdb/1626167/e7b329e1-7be3-442b-a64e-2b60011ea78b/s1200'
  },
  {
    _id: '4j3kj43i4',
    name: 'film three',
    year: 2019,
    slogan: 'here we start',
    country: 'USA',
    description:
      'Vel odit ipsa optio tenetur eveniet laborum molestiae? Hic aliquam necessitatibus, reiciendis commodi amet ipsum.',
    posterURL:
      'https://avatars.mds.yandex.net/get-pdb/1626167/e7b329e1-7be3-442b-a64e-2b60011ea78b/s1200'
  }
];
