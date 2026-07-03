import React, { useRef, useState, useEffect } from 'react';
import { DollarSign, Users, Award, Gift, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const BusinessOpportunity: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = 328; // Item width (300px) + gap (28px)
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const items = track.querySelectorAll('.shorts-carousel-item');
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(itemCenter - trackCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    setTimeout(handleScroll, 100);
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="bisnis" className="business-opportunity section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge">Peluang Kemitraan</span>
          <h2>Join Kemitraan Gratis, Potensi Income <span className="text-gradient">Rp46 Juta/Bulan</span>. Mau?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Hanya dengan mengalihkan konsumsi kopi harian Anda dan membagikan manfaatnya, bangun aset bisnis pasif jangka panjang yang stabil.
          </p>
        </div>

        {/* Konsep Sederhana */}
        <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>
          Konsep Bisnis Sederhana <span className="text-gradient">1-1-1</span>
        </h3>
        <div className="grid-3-custom" style={{ marginBottom: '5rem' }}>
          {/* Langkah 1 */}
          <div className="feature-card reveal-card" style={{ padding: '2.5rem 2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', fontSize: '3rem', fontWeight: 'bold', color: 'rgba(212, 163, 115, 0.1)', fontFamily: 'var(--font-serif)' }}>01</div>
            <div className="icon-wrapper" style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
              <Calendar size={32} />
            </div>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Konsumsi Sendiri</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Cukup konsumsi 1 kotak kopi SH Juwara per bulan untuk menjaga kesehatan tubuh dan menjaga keaktifan kemitraan Anda.
            </p>
          </div>

          {/* Langkah 2 */}
          <div className="feature-card reveal-card" style={{ padding: '2.5rem 2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', fontSize: '3rem', fontWeight: 'bold', color: 'rgba(212, 163, 115, 0.1)', fontFamily: 'var(--font-serif)' }}>02</div>
            <div className="icon-wrapper" style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
              <Users size={32} />
            </div>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Ajak 1 Teman</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Kenalkan dan ajak minimal 1 orang teman setiap bulan untuk beralih ke kopi kesehatan Juwara yang nikmat ini.
            </p>
          </div>

          {/* Langkah 3 */}
          <div className="feature-card reveal-card" style={{ padding: '2.5rem 2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', fontSize: '3rem', fontWeight: 'bold', color: 'rgba(212, 163, 115, 0.1)', fontFamily: 'var(--font-serif)' }}>03</div>
            <div className="icon-wrapper" style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
              <ArrowRight size={32} />
            </div>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Duplikasi Konsisten</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Bimbing teman Anda untuk melakukan hal yang sama secara konsisten. Duplikasi selama 12 bulan membangun potensi pasif Rp46 Juta/bulan.
            </p>
          </div>
        </div>

        {/* Persentase Bonus & Skema Bagi Hasil */}
        <div className="grid-2" style={{ marginBottom: '5rem', alignItems: 'center' }}>
          <div className="desc-text">
            <span className="badge">Skema Transparan</span>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Skema Pembagian Bonus & Transparansi Hasil</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              Sistem bisnis dirancang seadil mungkin selama lebih dari 37 tahun teruji stabil tanpa risiko tutup poin yang memberatkan mitra bisnis.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '1.25rem' }}>✔</span> <strong>Bonus Prestasi Pribadi & Kelompok:</strong> 4% s/d 28%
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '1.25rem' }}>✔</span> <strong>Bonus Kepemimpinan / Royalti:</strong> 16.8%
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '1.25rem' }}>✔</span> <strong>Total Payout Perusahaan:</strong> Menurunkan 44.8% kembali ke mitra
              </li>
            </ul>
          </div>
          <div className="hero-image-container">
            <div className="product-placeholder" style={{ aspectRatio: '1/1', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '3.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>📈</div>
              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Rencana Adil & Stabil</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                Perhitungan poin generasi tanpa batas kedalaman dan tidak memerlukan kewajiban menimbun stok barang yang berlebihan.
              </p>
            </div>
          </div>
        </div>

        {/* Fasilitas Kemitraan VIP */}
        <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>
          Keuntungan & Fasilitas <span className="text-gradient">Diamond Executive</span>
        </h3>
        <div className="grid-3-custom" style={{ marginBottom: '5rem' }}>
          {/* Fasilitas 1 */}
          <div className="feature-card reveal-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div className="icon-wrapper" style={{ margin: '0 auto 1.5rem auto', color: 'var(--accent-primary)', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 163, 115, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Gift size={28} />
            </div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>Travel VIP Dunia</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Dapatkan tiket perjalanan luar negeri gratis sebanyak 2 kali dalam setahun dengan akomodasi bintang lima dan pelayanan eksklusif.
            </p>
          </div>

          {/* Fasilitas 2 */}
          <div className="feature-card reveal-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div className="icon-wrapper" style={{ margin: '0 auto 1.5rem auto', color: 'var(--accent-primary)', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 163, 115, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={28} />
            </div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>Fasilitas Mobil</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Tunjangan dana kepemilikan mobil mewah yang diberikan secara rutin untuk memperbarui kendaraan operasional Anda setiap 4 tahun.
            </p>
          </div>

          {/* Fasilitas 3 */}
          <div className="feature-card reveal-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div className="icon-wrapper" style={{ margin: '0 auto 1.5rem auto', color: 'var(--accent-primary)', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 163, 115, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={28} />
            </div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>Aset yang Diwariskan</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Seluruh jaringan bisnis dan passive income yang telah Anda bangun dapat diwariskan secara hukum kepada keluarga tercinta.
            </p>
          </div>
        </div>

        {/* Testimonial YouTube Shorts Showcase */}
        <div style={{ marginTop: '5rem', position: 'relative' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>
            Testimoni Nyata <span className="text-gradient">Mitra Kopi Juwara</span>
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem auto', textAlign: 'center', fontSize: '1rem' }}>
            Dengarkan kisah sukses dan pembuktian langsung dari para mitra yang telah merasakan manfaat kesehatan serta peluang bisnis Kopi Juwara.
          </p>
          
          <div className="shorts-carousel-container">
            {/* Prev Button */}
            <button className="carousel-btn carousel-btn-prev" onClick={() => scroll('left')} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>

            <div className="shorts-carousel-track" ref={trackRef}>
              {/* Video 1 */}
              <div className={`shorts-carousel-item ${centerIndex === 0 ? 'active-center' : ''}`}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ko1EIf7pNMY" 
                  title="Testimoni Juwara 1" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  style={{ borderRadius: '12px', border: '1px solid var(--border-color)', aspectRatio: '9/16' }}
                ></iframe>
              </div>
              {/* Video 2 */}
              <div className={`shorts-carousel-item ${centerIndex === 1 ? 'active-center' : ''}`}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/bsVDVCFjtrM" 
                  title="Testimoni Juwara 2" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  style={{ borderRadius: '12px', border: '1px solid var(--border-color)', aspectRatio: '9/16' }}
                ></iframe>
              </div>
              {/* Video 3 */}
              <div className={`shorts-carousel-item ${centerIndex === 2 ? 'active-center' : ''}`}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Mkwm2U_YROg" 
                  title="Testimoni Juwara 3" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  style={{ borderRadius: '12px', border: '1px solid var(--border-color)', aspectRatio: '9/16' }}
                ></iframe>
              </div>
              {/* Video 4 */}
              <div className={`shorts-carousel-item ${centerIndex === 3 ? 'active-center' : ''}`}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/-vbq-Qhdmj8" 
                  title="Testimoni Juwara 4" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  style={{ borderRadius: '12px', border: '1px solid var(--border-color)', aspectRatio: '9/16' }}
                ></iframe>
              </div>
            </div>

            {/* Next Button */}
            <button className="carousel-btn carousel-btn-next" onClick={() => scroll('right')} aria-label="Next">
              <ChevronRight size={24} />
            </button>
            
            {/* Scroll Indicator Hint */}
            <div style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <span>← Geser atau gunakan tombol panah untuk melihat testimoni lainnya →</span>
            </div>
          </div>
        </div>

        {/* Call to Action Member */}
        <div style={{ marginTop: '5rem', padding: '3.5rem 2rem', borderRadius: '16px', background: 'linear-gradient(145deg, var(--bg-secondary), var(--bg-tertiary))', border: '1px solid var(--border-color)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Ganti Kopi Biasamu, <span className="text-gradient">Bangun Kerajaan Bisnismu!</span></h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Setiap hari Anda ngopi, saatnya ubah pengeluaran harian menjadi aset bisnis bernilai puluhan juta. Jangan tunda lagi kesempatan terbaik untuk bergabung di jaringan kemitraan Kopi Juwara sekarang juga!
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', textAlign: 'left', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontSize: '1.25rem', lineHeight: '1' }}>✦</span>
              <p style={{ fontSize: '0.95rem', margin: 0 }}><strong style={{ color: 'var(--text-primary)' }}>Gabung 100% Gratis:</strong> Tanpa modal pendaftaran, langsung dapatkan ID kemitraan resmi.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontSize: '1.25rem', lineHeight: '1' }}>✦</span>
              <p style={{ fontSize: '0.95rem', margin: 0 }}><strong style={{ color: 'var(--text-primary)' }}>Pasar Sangat Luas:</strong> Kopi dinikmati 79% warga Indonesia, mempermudah penjualan & repeat order cepat.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontSize: '1.25rem', lineHeight: '1' }}>✦</span>
              <p style={{ fontSize: '0.95rem', margin: 0 }}><strong style={{ color: 'var(--text-primary)' }}>Kebebasan Waktu:</strong> Bisnis fleksibel yang bisa Anda jalankan dari rumah maupun sambil bersantai.</p>
            </div>
          </div>
          <a href="#beli" className="btn btn-primary" style={{ fontSize: '1rem', padding: '1.2rem 3rem' }}>Ambil Peluang Kemitraan Sekarang & Mulai Sukses</a>
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunity;
