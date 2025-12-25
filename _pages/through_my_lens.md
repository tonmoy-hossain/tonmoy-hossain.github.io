---
layout: page
title: Through My Lens
permalink: /photography/
description: A visual journey through places and moments
nav: true
nav_order: 6
---

<style>
  /* Elegant serif font pairing */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

  .photography-page {
    font-family: 'Crimson Text', serif;
    color: #2c2c2c;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* ============================================
     HEADER
  ============================================ */
  .page-header {
    text-align: center;
    margin: 5rem 0 4rem;
    padding: 0 1rem;
  }

  .page-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

  .page-header p {
    font-size: 1.1rem;
    font-style: italic;
    letter-spacing: 0.05em;
    color: #666;
    margin-top: 1rem;
  }

  /* ============================================
     ALBUMS GRID
  ============================================ */
  .albums-container {
    margin: 5rem 0;
  }

  .year-divider {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    margin: 6rem 0 3rem;
    position: relative;
    color: #1a1a1a;
  }

  .year-divider::before,
  .year-divider::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100px;
    height: 1px;
    background: linear-gradient(to right, transparent, #ccc, transparent);
  }

  .year-divider::before {
    right: calc(50% + 100px);
  }

  .year-divider::after {
    left: calc(50% + 100px);
  }

  .albums-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
    margin: 4rem 0;
  }

  .album-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 4/3;
    border-radius: 2px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .album-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  .album-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 2;
    transition: opacity 0.5s ease;
  }

  .album-card:hover::before {
    opacity: 0.85;
  }

  .album-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .album-card:hover .album-image {
    transform: scale(1.05);
  }

  .album-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    z-index: 3;
    color: white;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .album-card:hover .album-info {
    transform: translateY(-5px);
  }

  .album-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    letter-spacing: 0.01em;
    color: white;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .album-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.95rem;
    opacity: 0.95;
    letter-spacing: 0.05em;
    color: white;
  }

  .album-date {
    font-style: italic;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  .album-count {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
  }

  .view-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 4;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .album-card:hover .view-indicator {
    opacity: 1;
  }

  .view-indicator-circle {
    width: 70px;
    height: 70px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.1);
  }

  .view-indicator-text {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  /* ============================================
     MODAL
  ============================================ */
  .modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.92);
    z-index: 9998;
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .modal-overlay.active {
    display: block;
    opacity: 1;
  }

  .modal-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    overflow-y: auto;
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .modal-container.active {
    display: block;
    opacity: 1;
  }

  .modal-content {
    background: white;
    max-width: 1400px;
    margin: 3rem auto;
    border-radius: 4px;
    box-shadow: 0 30px 90px rgba(0, 0, 0, 0.5);
    transform: scale(0.9) translateY(30px);
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
  }

  .modal-container.active .modal-content {
    transform: scale(1) translateY(0);
  }

  /* Modal Header */
  .modal-header {
    padding: 3rem 5rem 2rem;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
    position: relative;
  }

  .modal-close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    font-size: 2rem;
    color: #666;
    cursor: pointer;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    font-weight: 300;
    line-height: 1;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .modal-close:hover {
    color: #000;
    transform: rotate(90deg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: #ccc;
  }

  .modal-title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
  }

  .modal-subtitle {
    font-size: 1.1rem;
    font-style: italic;
    color: #666;
    letter-spacing: 0.05em;
  }

  /* Modal Navigation */
  .modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid #e0e0e0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.5rem;
    color: #333;
    z-index: 10;
  }

  .modal-nav:hover {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-50%) scale(1.1);
  }

  .modal-nav-prev {
    left: -25px;
  }

  .modal-nav-next {
    right: -25px;
  }

  .modal-nav:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .modal-nav:disabled:hover {
    transform: translateY(-50%) scale(1);
    box-shadow: none;
  }

  /* Modal Photo Grid */
  .modal-body {
    padding: 3rem;
  }

  .modal-photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: 10px;
    gap: 20px;
  }

  .modal-photo-item {
    cursor: pointer;
    overflow: hidden;
    border-radius: 2px;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: #f5f5f5;
  }

  .modal-photo-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    z-index: 5;
  }

  .modal-photo-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .modal-photo-item:hover img {
    transform: scale(1.03);
  }

  /* ============================================
     LIGHTBOX (for full-screen photo viewing)
  ============================================ */
  .lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.96);
    z-index: 10000;
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
    max-width: 95%;
    max-height: 95vh;
    position: relative;
    animation: zoomIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.85);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 95vh;
    object-fit: contain;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.9);
  }

  .lightbox-close {
    position: absolute;
    top: -60px;
    right: 0;
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, opacity 0.3s ease;
    font-weight: 200;
    opacity: 0.8;
  }

  .lightbox-close:hover {
    transform: rotate(90deg);
    opacity: 1;
  }

  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.5rem;
    opacity: 0.7;
  }

  .lightbox-nav:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  .lightbox-prev {
    left: 2rem;
  }

  .lightbox-next {
    right: 2rem;
  }

  /* ============================================
     ANIMATIONS
  ============================================ */
  .album-card {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .album-card:nth-child(1) { animation-delay: 0.1s; }
  .album-card:nth-child(2) { animation-delay: 0.2s; }
  .album-card:nth-child(3) { animation-delay: 0.3s; }
  .album-card:nth-child(4) { animation-delay: 0.4s; }
  .album-card:nth-child(5) { animation-delay: 0.5s; }

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

  .modal-photo-item {
    opacity: 0;
    animation: fadeIn 0.6s ease-out forwards;
  }

  .modal-photo-item:nth-child(1) { animation-delay: 0.05s; }
  .modal-photo-item:nth-child(2) { animation-delay: 0.1s; }
  .modal-photo-item:nth-child(3) { animation-delay: 0.15s; }
  .modal-photo-item:nth-child(4) { animation-delay: 0.2s; }
  .modal-photo-item:nth-child(5) { animation-delay: 0.25s; }
  .modal-photo-item:nth-child(6) { animation-delay: 0.3s; }
  .modal-photo-item:nth-child(7) { animation-delay: 0.35s; }
  .modal-photo-item:nth-child(8) { animation-delay: 0.4s; }
  .modal-photo-item:nth-child(9) { animation-delay: 0.45s; }
  .modal-photo-item:nth-child(10) { animation-delay: 0.5s; }
  .modal-photo-item:nth-child(11) { animation-delay: 0.55s; }
  .modal-photo-item:nth-child(12) { animation-delay: 0.6s; }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* ============================================
     RESPONSIVE
  ============================================ */
  @media (max-width: 1200px) {
    .albums-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }

    .modal-photo-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    .modal-nav-prev {
      left: -20px;
    }

    .modal-nav-next {
      right: -20px;
    }
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2.8rem;
    }

    .albums-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .album-title {
      font-size: 1.6rem;
    }

    .year-divider {
      font-size: 2rem;
    }

    .year-divider::before,
    .year-divider::after {
      width: 50px;
    }

    .year-divider::before {
      right: calc(50% + 60px);
    }

    .year-divider::after {
      left: calc(50% + 60px);
    }

    .modal-content {
      margin: 2rem 1rem;
    }

    .modal-header {
      padding: 2rem 4rem 1.5rem;
    }

    .modal-title {
      font-size: 2rem;
    }

    .modal-close {
      top: 1.5rem;
      right: 1.5rem;
      font-size: 2rem;
    }

    .modal-body {
      padding: 2rem 1.5rem;
    }

    .modal-photo-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 15px;
    }

    .modal-nav {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }

    .modal-nav-prev {
      left: 10px;
    }

    .modal-nav-next {
      right: 10px;
    }

    .lightbox-close {
      top: -50px;
      font-size: 2rem;
    }

    .lightbox-nav {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }

    .lightbox-prev {
      left: 1rem;
    }

    .lightbox-next {
      right: 1rem;
    }
  }

  @media (max-width: 480px) {
    .modal-photo-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="photography-page">
  <div class="page-header">
    <h1>Through My Lens</h1>
    <p>A curated collection of moments and places</p>
  </div>

  <div class="albums-container">
    
    <!-- 2025 -->
    <h2 class="year-divider">2025</h2>
    
    <div class="albums-grid">
      <!-- Golden Gate Bridge Album -->
      <div class="album-card" onclick="openAlbum('golden-gate')">
        <img src="/assets/img/photography/IMG_3009.JPEG" alt="Golden Gate Bridge" class="album-image">
        <div class="album-info">
          <h3 class="album-title">Golden Gate Bridge</h3>
          <div class="album-meta">
            <span class="album-date">San Francisco · August 2025</span>
            <span class="album-count">12 photos</span>
          </div>
        </div>
        <div class="view-indicator">
          <div class="view-indicator-circle">
            <span class="view-indicator-text">View</span>
          </div>
        </div>
      </div>

      <!-- Kos Island Album -->
      <div class="album-card" onclick="openAlbum('kos-island')">
        <img src="/assets/img/photography/KosIsland_Greece/IMG_1232.JPEG" alt="Kos Island" class="album-image">
        <div class="album-info">
          <h3 class="album-title">Kos Island</h3>
          <div class="album-meta">
            <span class="album-date">Greece · Summer 2025</span>
            <span class="album-count">41 photos</span>
          </div>
        </div>
        <div class="view-indicator">
          <div class="view-indicator-circle">
            <span class="view-indicator-text">View</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 2024 -->
    <h2 class="year-divider">2024</h2>
    
    <div class="albums-grid">
      <!-- Tokyo Album -->
      <div class="album-card" onclick="openAlbum('tokyo')">
        <img src="/assets/img/photography/tokyo_01.jpg" alt="Tokyo" class="album-image">
        <div class="album-info">
          <h3 class="album-title">Tokyo</h3>
          <div class="album-meta">
            <span class="album-date">Japan · June 2024</span>
            <span class="album-count">8 photos</span>
          </div>
        </div>
        <div class="view-indicator">
          <div class="view-indicator-circle">
            <span class="view-indicator-text">View</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 2023 -->
    <h2 class="year-divider">2023</h2>
    
    <div class="albums-grid">
      <!-- Santorini Album -->
      <div class="album-card" onclick="openAlbum('santorini')">
        <img src="/assets/img/photography/santorini_01.jpg" alt="Santorini" class="album-image">
        <div class="album-info">
          <h3 class="album-title">Santorini</h3>
          <div class="album-meta">
            <span class="album-date">Greece · August 2023</span>
            <span class="album-count">9 photos</span>
          </div>
        </div>
        <div class="view-indicator">
          <div class="view-indicator-circle">
            <span class="view-indicator-text">View</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Modal Overlay -->
<div class="modal-overlay" id="modal-overlay" onclick="closeModal()"></div>

<!-- Modal Container -->
<div class="modal-container" id="modal-container">
  <div class="modal-content">
    <button class="modal-close" onclick="event.stopPropagation(); closeModal();">&times;</button>
    
    <!-- Navigation between albums -->
    <button class="modal-nav modal-nav-prev" id="modal-prev" onclick="navigateAlbum(-1)">‹</button>
    <button class="modal-nav modal-nav-next" id="modal-next" onclick="navigateAlbum(1)">›</button>
    
    <div class="modal-header">
      <h2 class="modal-title" id="modal-title"></h2>
      <p class="modal-subtitle" id="modal-subtitle"></p>
    </div>
    
    <div class="modal-body">
      <div class="modal-photo-grid" id="modal-photo-grid"></div>
    </div>
  </div>
</div>

<!-- Lightbox for full-screen photo viewing -->
<div class="lightbox" id="lightbox" onclick="closeLightbox()">
  <div class="lightbox-content" onclick="event.stopPropagation()">
    <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
    <button class="lightbox-nav lightbox-prev" onclick="navigateLightbox(-1)">‹</button>
    <img id="lightbox-img" src="" alt="">
    <button class="lightbox-nav lightbox-next" onclick="navigateLightbox(1)">›</button>
  </div>
</div>

<script>
  // Album data
  const albums = {
    'golden-gate': {
      title: 'Golden Gate Bridge',
      subtitle: 'San Francisco, California · August 2025',
      photos: [
        '/assets/img/photography/IMG_2976.JPEG',
        '/assets/img/photography/IMG_2993.JPEG',
        '/assets/img/photography/IMG_3009.JPEG',
        '/assets/img/photography/IMG_3018.JPEG',
        '/assets/img/photography/IMG_3022.JPEG',
        '/assets/img/photography/IMG_3028.JPEG',
        '/assets/img/photography/IMG_3032.JPEG',
        '/assets/img/photography/IMG_3037.JPEG',
        '/assets/img/photography/IMG_3042.JPEG',
        '/assets/img/photography/IMG_3046.JPEG',
        '/assets/img/photography/IMG_3049.JPEG',
        '/assets/img/photography/IMG_3051.JPEG'
      ]
    },
    'kos-island': {
      title: 'Kos Island',
      subtitle: 'Greece · Summer 2025',
      photos: [
        '/assets/img/photography/KosIsland_Greece/IMG_1194.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1213.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1216.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1217.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1218.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1223.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1225.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1228.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1230.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1232.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1238.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1239.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1241.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1243.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1247.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1252.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1253.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1254.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1255.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1305.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1312.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1341.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1360.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1373.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1384.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1387.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1389.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1393.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1401.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1409.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1417.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1421.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1425.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1430.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1432.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1436.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1440.JPEG',
        '/assets/img/photography/KosIsland_Greece/IMG_1443.JPEG'
      ]
    },
    'tokyo': {
      title: 'Tokyo',
      subtitle: 'Japan · June 2024',
      photos: [
        '/assets/img/photography/tokyo_01.jpg',
        '/assets/img/photography/tokyo_02.jpg',
        '/assets/img/photography/tokyo_03.jpg',
        '/assets/img/photography/tokyo_04.jpg',
        '/assets/img/photography/tokyo_05.jpg',
        '/assets/img/photography/tokyo_06.jpg',
        '/assets/img/photography/tokyo_07.jpg',
        '/assets/img/photography/tokyo_08.jpg'
      ]
    },
    'santorini': {
      title: 'Santorini',
      subtitle: 'Greece · August 2023',
      photos: [
        '/assets/img/photography/santorini_01.jpg',
        '/assets/img/photography/santorini_02.jpg',
        '/assets/img/photography/santorini_03.jpg',
        '/assets/img/photography/santorini_04.jpg',
        '/assets/img/photography/santorini_05.jpg',
        '/assets/img/photography/santorini_06.jpg',
        '/assets/img/photography/santorini_07.jpg',
        '/assets/img/photography/santorini_08.jpg',
        '/assets/img/photography/santorini_09.jpg'
      ]
    }
  };

  const albumOrder = ['santorini', 'tokyo', 'kos-island', 'golden-gate'];
  let currentAlbumIndex = 0;
  let currentLightboxImages = [];
  let currentLightboxIndex = 0;

  // ============================================
  // MODAL FUNCTIONS
  // ============================================
  
  function openAlbum(albumId) {
    currentAlbumIndex = albumOrder.indexOf(albumId);
    const album = albums[albumId];
    
    // Update modal content
    document.getElementById('modal-title').textContent = album.title;
    document.getElementById('modal-subtitle').textContent = album.subtitle;
    
    // Build photo grid
    const photoGrid = document.getElementById('modal-photo-grid');
    photoGrid.innerHTML = '';
    
    album.photos.forEach((photo, index) => {
      const photoItem = document.createElement('div');
      photoItem.className = 'modal-photo-item';
      photoItem.onclick = () => openLightboxFromModal(albumId, index);
      
      const img = document.createElement('img');
      img.src = photo;
      img.alt = album.title;
      
      photoItem.appendChild(img);
      photoGrid.appendChild(photoItem);
    });
    
    // Update navigation buttons
    updateModalNavigation();
    
    // Show modal with smooth animation
    const overlay = document.getElementById('modal-overlay');
    const container = document.getElementById('modal-container');
    
    overlay.classList.add('active');
    // Small delay for smooth transition
    setTimeout(() => {
      container.classList.add('active');
    }, 50);
    
    document.body.style.overflow = 'hidden';
    
    // Recalculate masonry after images load
    setTimeout(resizeAllMasonryItems, 100);
  }

  function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    const container = document.getElementById('modal-container');
    
    overlay.classList.remove('active');
    container.classList.remove('active');
    
    // Wait for animation to complete before allowing scroll
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 500);
  }

  function navigateAlbum(direction) {
    currentAlbumIndex += direction;
    
    if (currentAlbumIndex < 0) {
      currentAlbumIndex = albumOrder.length - 1;
    } else if (currentAlbumIndex >= albumOrder.length) {
      currentAlbumIndex = 0;
    }
    
    const albumId = albumOrder[currentAlbumIndex];
    
    // Close and reopen with new album (smooth transition)
    const modalContainer = document.getElementById('modal-container');
    modalContainer.style.opacity = '0';
    
    setTimeout(() => {
      openAlbum(albumId);
      modalContainer.style.opacity = '1';
    }, 200);
  }

  function updateModalNavigation() {
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');
    
    // Always enable navigation (circular)
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  // ============================================
  // LIGHTBOX FUNCTIONS
  // ============================================
  
  function openLightboxFromModal(albumId, photoIndex) {
    currentLightboxImages = albums[albumId].photos;
    currentLightboxIndex = photoIndex;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = currentLightboxImages[currentLightboxIndex];
    lightbox.classList.add('active');
  }

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
  }

  function navigateLightbox(direction) {
    currentLightboxIndex += direction;
    
    if (currentLightboxIndex < 0) {
      currentLightboxIndex = currentLightboxImages.length - 1;
    } else if (currentLightboxIndex >= currentLightboxImages.length) {
      currentLightboxIndex = 0;
    }
    
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
      lightboxImg.src = currentLightboxImages[currentLightboxIndex];
      lightboxImg.style.opacity = '1';
    }, 150);
  }

  // ============================================
  // KEYBOARD NAVIGATION
  // ============================================
  
  document.addEventListener('keydown', function(e) {
    const modalActive = document.getElementById('modal-container').classList.contains('active');
    const lightboxActive = document.getElementById('lightbox').classList.contains('active');
    
    if (lightboxActive) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      }
    } else if (modalActive) {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        navigateAlbum(-1);
      } else if (e.key === 'ArrowRight') {
        navigateAlbum(1);
      }
    }
  });

  // ============================================
  // MASONRY LAYOUT
  // ============================================
  
  function resizeMasonryItem(item) {
    const grid = item.closest('.modal-photo-grid');
    if (!grid) return;
    
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const img = item.querySelector('img');
    
    if (img.complete) {
      const imgHeight = img.getBoundingClientRect().height;
      const rowSpan = Math.ceil((imgHeight + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = 'span ' + rowSpan;
    } else {
      img.addEventListener('load', function() {
        const imgHeight = img.getBoundingClientRect().height;
        const rowSpan = Math.ceil((imgHeight + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = 'span ' + rowSpan;
      });
    }
  }

  function resizeAllMasonryItems() {
    const allItems = document.querySelectorAll('.modal-photo-item');
    allItems.forEach(item => resizeMasonryItem(item));
  }

  window.addEventListener('resize', resizeAllMasonryItems);
</script>