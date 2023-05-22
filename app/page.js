'use client'

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, Button } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function HomePage() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/random?count=3&query=landmark&client_id=EEgcKAXhBbq4hu-E5-k4j-lh2aqrt1I2YNbWOWSPTHg&'
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
      <header>
        {/* 네비게이션 바 등 메인 페이지의 상단 부분 */}
      </header>
      <main>
        {/* Hero 섹션 */}
        <section className="hero" style={{ maxHeight: '30vh', maxWidth: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Carousel interval={3000} pause={false}>
            {imageUrls.map((url, index) => (
              <Carousel.Item key={index}>
                <img src={url} className="d-block w-100 h-auto" alt={`Image ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="carousel-controls">
          </div>
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
