import React from 'react';

const Variants: React.FC = () => {
  return (
    <section className="variants section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Pilih Sesuai <span className="text-gradient">Selera Anda</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Dua varian istimewa untuk menyesuaikan gaya hidup sehat Anda.</p>
        </div>
        <div className="grid-2">
          <div className="feature-card" style={{ padding: '2rem', border: '1px solid var(--accent-primary)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: '-15px', right: '20px', background: 'var(--accent-primary)', color: 'var(--bg-primary)', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem', zIndex: 1 }}>Bebas Gula</div>
            <div style={{ width: '100%', aspectRatio: '1/1', marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/jualan1.jpg" alt="Kopi Juwara 3 in 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span style="color:var(--text-muted)">[ Masukkan Foto Pertama Di Sini ]</span>'; }} />
            </div>
            <h3 style={{ fontSize: '2rem' }}>3 in 1</h3>
            <p style={{ marginBottom: '2rem', flexGrow: 1 }}>Pilihan sempurna bagi Anda yang ingin menjaga kadar gula darah atau penderita diabetes. Rasa kopi premium yang pekat dengan sensasi <i>creamy</i> dari VCO.</p>
            <a href="#beli" className="btn btn-outline" style={{ width: '100%' }}>Pilih 3 in 1</a>
          </div>
          
          <div className="feature-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', aspectRatio: '1/1', marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/jualan2.jpg" alt="Kopi Juwara 4 in 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span style="color:var(--text-muted)">[ Masukkan Foto Kedua Di Sini ]</span>'; }} />
            </div>
            <h3 style={{ fontSize: '2rem' }}>4 in 1</h3>
            <p style={{ marginBottom: '2rem', flexGrow: 1 }}>Diperkaya dengan tambahan gula tebu asli rendah kalori untuk profil rasa manis alami yang lembut dan seimbang tanpa berlebihan.</p>
            <a href="#beli" className="btn btn-outline" style={{ width: '100%' }}>Pilih 4 in 1</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variants;
