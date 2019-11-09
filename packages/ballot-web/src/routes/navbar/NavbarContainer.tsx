import { ReactNode } from 'react';
import * as React from 'react';
import { Navbar } from './Navbar';

interface NavbarContainerProps {
  children?: ReactNode;
}

export const NavbarContainer = (props: NavbarContainerProps) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
