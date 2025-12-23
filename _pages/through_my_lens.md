---
layout: page
title: Through My Lens
permalink: /photography/
description: A visual journey through places and moments
nav: true
nav_order: 6
---

<style>
  /* Elegant serif font pairing with modern sans-serif */
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap');

  .photography-page {
    font-family: 'Montserrat', sans-serif;
    color: #2c2c2c;
  }

  .page-header {
    text-align: center;
    margin: 4rem 0 3rem;
    padding: 0 1rem;
  }

  .page-header h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3.5rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
  }

  .page-header p {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #888;
    margin-top: 1rem;
  }

  .year-section {
    margin: 6rem 0;
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .year-section:nth-child(1) { animation-delay: 0.2s; }
  .year-section:nth-child(2) { animation-delay: 0.4s; }
  .year-section:nth-child(3) { animation-delay: 0.6s; }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .year-header {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    color: #1a1a1a;
  }

  .year-header::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: linear-gradient(to right, transparent, #d4af37, transparent);
    margin: 1rem auto 0;
  }

  .location-section {
    margin-bottom: 5rem;
  }

  .location-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #2c2c2c;
    position: relative;
    display: inline-block;
  }

  .location-date {
    font-size: 0.85rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #999;
    margin-bottom: 2rem;
    display: block;
  }

  /* Masonry Grid Layout - True staggered columns */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: 10px;
    gap: 0;
    margin-top: 2rem;
  }

  .photo-item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .photo-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    z-index: 10;
  }

  .photo-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .photo-item:hover img {
    transform: scale(1.02);
  }

  /* Lightbox Overlay */
  .lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 9999;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .lightbox.active {
    display: flex;
    opacity: 1;
  }

  .lightbox-content {
    max-width: 90%;
    max-height: 90vh;
    position: relative;
    animation: zoomIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
  }

  .lightbox-close {
    position: absolute;
    top: -50px;
    right: 0;
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    font-weight: 200;
  }

  .lightbox-close:hover {
    transform: rotate(90deg);
  }

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    .photo-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2.5rem;
    }

    .year-header {
      font-size: 2rem;
    }

    .location-title {
      font-size: 1.5rem;
    }

    .photo-grid {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 0;
    }

    .lightbox-close {
      top: -40px;
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .photo-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Decorative elements */
  .divider {
    height: 1px;
    background: linear-gradient(to right, transparent, #e0e0e0, transparent);
    margin: 4rem auto;
    max-width: 300px;
  }
</style>

<div class="photography-page">
  <div class="page-header">
    <h1>Through My Lens</h1>
    <p>A Visual Journey</p>
  </div>

  <!-- 2024 -->
  <div class="year-section">
    <h2 class="year-header">2024</h2>

    <!-- Location: Paris, France -->
    <div class="location-section">
      <h3 class="location-title">Golden Gate Bridge, San Francisco</h3>
      <span class="location-date">August 2025</span>
      
      <div class="photo-grid">
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_2976.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_2993.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_3009.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_3018.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_3022.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_3028.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_3032.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_3037.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_3042.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_3046.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_3049.JPEG" alt="San Francisco">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/IMG_3051.JPEG" alt="San Francisco">
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Location: Tokyo, Japan -->
    <div class="location-section">
      <h3 class="location-title">Tokyo, Japan</h3>
      <span class="location-date">June 2024</span>
      
      <div class="photo-grid">
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/tokyo_01.jpg" alt="Tokyo">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/tokyo_02.jpg" alt="Tokyo">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/tokyo_03.jpg" alt="Tokyo">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/tokyo_04.jpg" alt="Tokyo">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/tokyo_05.jpg" alt="Tokyo">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/tokyo_06.jpg" alt="Tokyo">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/tokyo_07.jpg" alt="Tokyo">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/tokyo_08.jpg" alt="Tokyo">
        </div>
      </div>
    </div>
  </div>

  <!-- 2023 -->
  <div class="year-section">
    <h2 class="year-header">2023</h2>

    <!-- Location: Santorini, Greece -->
    <div class="location-section">
      <h3 class="location-title">Santorini, Greece</h3>
      <span class="location-date">August 2023</span>
      
      <div class="photo-grid">
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/santorini_01.jpg" alt="Santorini">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/santorini_02.jpg" alt="Santorini">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/santorini_03.jpg" alt="Santorini">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/santorini_04.jpg" alt="Santorini">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/santorini_05.jpg" alt="Santorini">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/santorini_06.jpg" alt="Santorini">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/santorini_07.jpg" alt="Santorini">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/santorini_08.jpg" alt="Santorini">
        </div>
        <div class="photo-item" onclick="openLightbox(this)">
          <img src="/assets/img/photography/santorini_09.jpg" alt="Santorini">
        </div>
      </div>
    </div>
  </div>

  <!-- Lightbox -->
  <div class="lightbox" id="lightbox" onclick="closeLightbox()">
    <div class="lightbox-content" onclick="event.stopPropagation()">
      <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
      <img id="lightbox-img" src="" alt="">
    </div>
  </div>
</div>

<script>
  function openLightbox(element) {
    const img = element.querySelector('img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
  }

  // Close lightbox with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  // Masonry layout - calculate grid row spans based on actual image heights
  function resizeMasonryItem(item) {
    const grid = document.querySelector('.photo-grid');
    const rowGap = 0; // No gap between images
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const img = item.querySelector('img');
    
    if (img.complete) {
      const imgHeight = img.getBoundingClientRect().height;
      const rowSpan = Math.ceil(imgHeight / rowHeight);
      item.style.gridRowEnd = 'span ' + rowSpan;
    } else {
      img.addEventListener('load', function() {
        const imgHeight = img.getBoundingClientRect().height;
        const rowSpan = Math.ceil(imgHeight / rowHeight);
        item.style.gridRowEnd = 'span ' + rowSpan;
      });
    }
  }

  function resizeAllMasonryItems() {
    const allItems = document.querySelectorAll('.photo-item');
    allItems.forEach(item => resizeMasonryItem(item));
  }

  // Run on load and resize
  window.addEventListener('load', resizeAllMasonryItems);
  window.addEventListener('resize', resizeAllMasonryItems);
</script>