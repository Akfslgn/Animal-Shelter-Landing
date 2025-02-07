import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';
import { Outlet } from 'react-router';

function RootLayout() {
  return (
    <div>
      <Nav />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
