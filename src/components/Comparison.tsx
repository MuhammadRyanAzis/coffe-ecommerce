import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="comparison section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container desc-content">
        <div className="desc-image">
          <div className="product-placeholder" style={{ aspectRatio: '1/1', background: 'var(--bg-tertiary)', padding: 0 }}>
            <img src="/foto-produk-2.jpg" alt="Infografis Perbandingan Kafein" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="placeholder-text">[ Infografis Perbandingan Kafein ]<br/><span style="font-size: 1rem; color: var(--text-muted)">(Juwara vs Kopi Warung)</span></div>'; }} />
          </div>
        </div>
        <div className="desc-text">
          <h2>Kopi Ramah <span className="text-gradient">Jantung & Lambung</span></h2>
          <p>
            Tahukah Anda? Kopi sachet biasa di pasaran seringkali mengandung lebih dari 300mg kafein yang dapat memicu jantung berdebar dan asam lambung naik.
          </p>
          <p>
            Juwara Kopi diformulasikan secara presisi dengan **kandungan kafein hanya 100mg** per sajian.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem' }}>✔</span> 100% Bebas pewarna tiruan
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem' }}>✔</span> 100% Bebas pengawet kimia
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem' }}>✔</span> Energi stabil tanpa rasa gelisah
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
