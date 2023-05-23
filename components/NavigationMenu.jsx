import React from 'react';
import { Nav } from 'react-bootstrap';

function NavigationMenu() {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      {/* 추가적인 네비게이션 메뉴 항목들 */}
    </Nav>
  );
}

export default NavigationMenu;
