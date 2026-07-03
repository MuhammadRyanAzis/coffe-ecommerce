import React from 'react';
import { Award, BadgeCheck, Activity } from 'lucide-react';

const Accreditation: React.FC = () => {
  return (
    <section id="akreditasi" className="accreditation section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Sertifikasi & <span className="text-gradient">Kredibilitas Dunia</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Kopi SH Juwara diproduksi dengan standar farmasi tertinggi menggunakan Yung Kien Ganoderma yang telah diakui oleh lembaga kesehatan internasional.
          </p>
        </div>

        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {/* Perkebunan & Pabrik */}
          <div className="desc-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="badge">Pusat Budidaya Terbesar</span>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Pabrik & Perkebunan Yung Kien (Taiwan)</h3>
            <p style={{ marginBottom: '1.2rem', color: 'var(--text-secondary)' }}>
              Ganoderma yang digunakan dalam Kopi Juwara dibudidayakan di perkebunan bioteknologi terbesar di dunia milik Shuang Hor Group di Taiwan. 
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Melalui riset intensif selama lebih dari 4 tahun, proses penanaman hingga ekstraksi dilakukan dalam lingkungan steril dengan kontrol kualitas yang sangat ketat untuk menghasilkan konsentrasi zat aktif (Polisakarida & Triterpenoid) yang optimal.
            </p>
          </div>

          <div className="hero-image-container">
            <div className="product-placeholder" style={{ aspectRatio: '16/10', display: 'flex', flexDirection: 'column', padding: '1rem', justifyContent: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔬</div>
              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Yung Kien Biotechnology</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                Fasilitas riset modern Shuang Hor Group yang didedikasikan khusus untuk penelitian fungsional Ganoderma Lingzhi sejak 1987.
              </p>
            </div>
          </div>
        </div>

        <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2.5rem', fontFamily: 'var(--font-serif)' }}>
          3 Akreditasi Makanan Kesehatan <span className="text-gradient">Pemerintah Taiwan</span>
        </h3>

        <div className="grid-3-custom">
          {/* Sertifikat 1 */}
          <div className="feature-card" style={{ textAlign: 'left', padding: '2.5rem 2rem' }}>
            <div className="icon-wrapper" style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
              <BadgeCheck size={32} />
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>NO. A00003</span>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Keseimbangan Imun</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Secara ilmiah terbukti membantu meningkatkan produksi antibodi dan meregulasi aktivitas sel imun tubuh (T-cells & Natural Killer cells) untuk menangkal radikal bebas serta virus.
            </p>
          </div>

          {/* Sertifikat 2 */}
          <div className="feature-card" style={{ textAlign: 'left', padding: '2.5rem 2rem' }}>
            <div className="icon-wrapper" style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
              <Activity size={32} />
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>NO. A00005</span>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Kesehatan Fungsi Liver</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Membantu menurunkan indeks GOT/GPT pada hati, melindungi organ liver dari akumulasi racun kimiawi (toksin), dan memicu regenerasi sel hati yang sehat.
            </p>
          </div>

          {/* Sertifikat 3 */}
          <div className="feature-card" style={{ textAlign: 'left', padding: '2.5rem 2rem' }}>
            <div className="icon-wrapper" style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
              <Award size={32} />
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>NO. A00069</span>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Anti-Penuaan (Anti-Aging)</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Kandungan antioksidan fungsional tinggi membantu meminimalisir kerusakan seluler akibat penuaan dini dan menjaga vitalitas metabolisme tubuh secara keseluruhan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
