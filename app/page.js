'use client'

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, Navbar } from 'react-bootstrap';
import Logo from '@/components/Logo';
import NavigationMenu from '@/components/NavigationMenu';
import Search from '@/components/Search';
import LoginButton from '@/components/LoginButton';
import SignUpButton from '@/components/SignUpButton';

function HomePage() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/random?count=3&query=ocean&client_id=EEgcKAXhBbq4hu-E5-k4j-lh2aqrt1I2YNbWOWSPTHg&'
        );
        const data = await response.json();
        const urls = data.map((image) => image.urls.regular);
        setImageUrls(urls);
      } catch (error) {
        console.error('Failed to fetch images from Unsplash:', error);
      }
    };

    fetchImages();
  }, []);

  return (

    <div className="container">
      <header style={{ marginBottom: '1rem', marginTop: '4rem' }}>
        <Navbar bg="light" expand="lg">
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavigationMenu />
            <Search />
            <LoginButton />
            <SignUpButton />
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        {/* Hero 섹션 */}
        <section
          className="hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          <Carousel interval={3000} pause={false} style={{ maxWidth: '50%', maxHeight: '50%' }}>
            {imageUrls.map((url, index) => (
              <Carousel.Item key={index}>
                <img src={url} className="d-block w-100 h-100 object-fit-cover" alt={`Image ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
        {/* 기타 컨텐츠 */}
      </main>
      <footer>
        {/* 푸터 등 메인 페이지의 하단 부분 */}
      </footer>
    </div>
  );
}

export default HomePage;
