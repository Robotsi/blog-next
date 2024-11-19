import Footer from '@/Components/PageComponents/Footer';
import Header from '@/Components/PageComponents/Header';
import React from 'react';

interface PagesLayoutProps {
  children: React.ReactNode;
}

const PagesLayout = ({ children }: PagesLayoutProps) => {
  return (
    <div>
      <Header />
      <div className='min-h-screen'>{children}</div>
      <Footer />
    </div>
  );
};

export default PagesLayout;
