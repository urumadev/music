import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react';
import {Container} from '@mui/material'
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{margin: '40px 0'}}>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;