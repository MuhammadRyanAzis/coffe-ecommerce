import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '2rem 0', zIndex: 10 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>
          Juwara Kopi
        </div>
        <div>
          <a href="#beli" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Pesan Sekarang</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
