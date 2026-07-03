import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="main-nav">
      <div className="container nav-wrapper">
        <div className="nav-logo">
          Juwara Kopi
        </div>
        <div>
          <a href="#beli" className="btn btn-primary nav-cta-btn">Pesan Sekarang</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
