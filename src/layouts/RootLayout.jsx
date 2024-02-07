import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
