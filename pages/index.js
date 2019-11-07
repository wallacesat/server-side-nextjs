import React from 'react';

import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Hello, It's the Home Page!</h1>
    <Link href='/users'>
      <a>Usuários</a>
    </Link>
  </div>
);

export default Home;
