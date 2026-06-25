import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="keunggulan" className="features section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Formulasi 4 Negara untuk <span className="text-gradient">Kualitas Paripurna</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Dikembangkan melalui riset selama 4 tahun, memadukan bahan baku premium dari seluruh dunia.
          </p>
        </div>
        
        <div className="grid-2">
          <div className="feature-card">
            <div className="feature-icon">☕</div>
            <h3>100% Arabika Premium (Brazil)</h3>
            <p>Diproses melalui teknik <i>fresh roasting</i> berstandar ISO Internasional. Menghadirkan cita rasa otentik yang lembut tanpa perisa buatan.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍄</div>
            <h3>Yung Kien Ganoderma (Taiwan)</h3>
            <p>Mendapat penghargaan dari otoritas kesehatan Taiwan. Menjaga daya tahan tubuh, melindungi fungsi hati, dan aman untuk penderita asam lambung.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🥥</div>
            <h3>Krimer VCO Murni (Belanda)</h3>
            <p>Terbuat dari Minyak Kelapa Murni (non-hidrogenasi) yang 100% bebas lemak trans berbahaya. Lebih gurih dan aman untuk jantung.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎋</div>
            <h3>Gula Tebu Alami (Indonesia)</h3>
            <p>Gula tebu rendah kalori yang menyeimbangkan rasa dengan sempurna, aman dikonsumsi harian (Hanya tersedia di varian 4 in 1).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
