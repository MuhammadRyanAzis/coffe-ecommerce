import React from 'react';
import { Heart, Shield, Brain, Sparkles, RefreshCw } from 'lucide-react';

const HealthBenefits: React.FC = () => {
  return (
    <section id="manfaat" className="health-benefits section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Manfaat Utama <span className="text-gradient">Yung Kien Ganoderma</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Lebih dari sekadar kopi nikmat. Setiap cangkir Kopi Juwara mengandung kebaikan herbal aktif untuk mendukung kesehatan jangka panjang Anda.
          </p>
        </div>

        <div className="grid-2">
          {/* Card 1: Imunitas */}
          <div className="feature-card" style={{ display: 'flex', gap: '1.5rem', textAlign: 'left', padding: '2rem' }}>
            <div className="icon-wrapper" style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 163, 115, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
              <Shield size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Sistem Imunitas & Proteksi</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Membantu mencegah perkembangan kanker, meringankan gejala alergi, serta meningkatkan resistensi tubuh terhadap infeksi virus dan bakteri.
              </p>
            </div>
          </div>

          {/* Card 2: Kardiovaskular */}
          <div className="feature-card" style={{ display: 'flex', gap: '1.5rem', textAlign: 'left', padding: '2rem' }}>
            <div className="icon-wrapper" style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 163, 115, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
              <Heart size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Kardiovaskular & Darah</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Membantu menstabilkan tekanan darah (hipertensi maupun hipotensi), mendukung sirkulasi darah yang lancar, serta menurunkan risiko serangan jantung dan stroke.
              </p>
            </div>
          </div>

          {/* Card 3: Otak & Saraf */}
          <div className="feature-card" style={{ display: 'flex', gap: '1.5rem', textAlign: 'left', padding: '2rem' }}>
            <div className="icon-wrapper" style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 163, 115, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
              <Brain size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Sistem Saraf & Relaksasi</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Mengatasi migrain, meredakan stres, meningkatkan kualitas tidur bagi penderita insomnia, serta membantu memelihara fungsi kognitif otak untuk mencegah Alzheimer.
              </p>
            </div>
          </div>

          {/* Card 4: Organ Dalam */}
          <div className="feature-card" style={{ display: 'flex', gap: '1.5rem', textAlign: 'left', padding: '2rem' }}>
            <div className="icon-wrapper" style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 163, 115, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
              <Sparkles size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Metabolisme & Proteksi Liver</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Mendukung stabilitas gula darah (anti-diabetes), meningkatkan fungsi filtrasi ginjal, dan secara proaktif melindungi fungsi sel hati dari zat toksik.
              </p>
            </div>
          </div>

          {/* Card 5: Pencernaan */}
          <div className="feature-card" style={{ display: 'flex', gap: '1.5rem', textAlign: 'left', padding: '2rem' }}>
            <div className="icon-wrapper" style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 163, 115, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
              <RefreshCw size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Kesehatan Pencernaan</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Sangat ramah untuk lambung (tidak memicu asam lambung berlebih) serta melancarkan sistem pembuangan untuk mengatasi sembelit kronis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
