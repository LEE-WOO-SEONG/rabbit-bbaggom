import React from 'react';

// components
import MainNav from '../components/MainNav';

// hooks
import useAuth from '../hooks/useAuth';

function Home() {
  useAuth();

  return (
    <>
      <MainNav />
      <section>Home</section>
    </>
  );
}

export default Home;
