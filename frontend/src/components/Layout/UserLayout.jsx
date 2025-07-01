// import React from 'react'
// import Footer from '../Common/Footer'
// import Header from '../Common/Header'

// const UserLayout = () => {
//   return (
//     <>
//     <header>
//     {/* Header */}
//     <Header/> 
//     {/*Footer*/}
//     <Footer />
//     </header>
//     </>
//   )
// }

// export default UserLayout

import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
