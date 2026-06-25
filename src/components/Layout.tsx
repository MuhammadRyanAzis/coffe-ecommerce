import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Coffee, ShoppingBag, Menu, X } from 'lucide-react';
import './Layout.css';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="layout">
      <nav className="navbar glass-panel">
        <div className="container nav-container">
          <Link to="/" className="nav-brand">
            <Coffee className="brand-icon" />
            <span className="text-gradient">Kopi Sehat Premium</span>
          </Link>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/">Beranda</Link>
            <Link to="/about">Tentang Kami</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Kontak</Link>
            <Link to="/join" className="btn btn-primary">Join Mitra</Link>
          </div>

          <div className="nav-actions">
            <button className="icon-btn">
              <ShoppingBag />
            </button>
            <button className="mobile-menu-btn icon-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <Coffee className="brand-icon" size={32} />
            <h3 className="text-gradient">Kopi Sehat Premium</h3>
            <p className="text-muted mt-4">Pilihan kopi terbaik untuk gaya hidup sehat Anda. Aman untuk lambung dan jantung.</p>
          </div>
          <div className="footer-links">
            <h4>Tautan Singkat</h4>
            <Link to="/shop">Beli Kopi</Link>
            <Link to="/about">Kisah Kami</Link>
            <Link to="/join">Peluang Bisnis</Link>
          </div>
          <div className="footer-contact">
            <h4>Kontak Kami</h4>
            <p className="text-muted">De Tridaya Residence, Bekasi</p>
            <p className="text-muted">info@kopi-premium.id</p>
            <p className="text-muted">0851-8333-XXXX</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-muted">&copy; 2026 Kopi Sehat Premium. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
