import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <h1>Tinggalkan Kopi Sachetmu, <span className="text-gradient">Beralih ke Kopi Kesehatan</span></h1>
          <p>Rasakan perpaduan sempurna kenikmatan 100% Arabika Premium dan manfaat terapi Yung Kien Ganoderma. Lebih aman, lebih nikmat, dan energi tahan lama tanpa rasa berdebar.</p>
          <div className="badges">
            <span className="badge">BPOM Certified</span>
            <span className="badge">100% Halal</span>
            <span className="badge">Bebas Lemak Trans</span>
          </div>
          <a href="#keunggulan" className="btn btn-primary">Kenapa Juwara Kopi?</a>
        </div>
        <div className="hero-image-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="product-placeholder" style={{ padding: 0 }}>
            <img src="/foto-produk-1.jpg" alt="Foto Produk Kopi Juwara" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="placeholder-text">[ Foto Produk Kopi Juwara ]<br/><span style="font-size: 1rem; color: var(--text-muted)">(Menampilkan Varian 3-in-1 & 4-in-1)</span></div>'; }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
