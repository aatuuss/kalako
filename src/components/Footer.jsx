import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#111111',
      color: '#ffffff',
      padding: '80px 0 40px',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Column 1: Logo & Vision */}
          <div>
            <img src="/img/kalako_logo.png" alt="Kalako Logo" style={{ height: '40px', marginBottom: '24px', filter: 'brightness(0) invert(1)' }} />
            <p style={{ color: '#a0aec0', lineHeight: 1.7, fontSize: '15px', marginBottom: '24px' }}>
              Memberdayakan ekosistem bisnis melalui arsitektur teknologi yang inovatif, skalabel, dan aman. Solusi ERP masa depan untuk efisiensi hari ini.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '18px' }}>𝕏</span>
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '18px' }}>in</span>
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '18px' }}>ig</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>Navigasi Cepat</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Beranda', 'Tentang', 'Layanan', 'Kontak'].map((item, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <Link to={`/${['home', 'about', 'service', 'contact'][index]}`} style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#ffffff'} onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>Hubungi Kami</h4>
            <div style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: '#630330' }}>📍</span>
              <p style={{ color: '#a0aec0', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Jl. Mayang No.08, Blundrejo, Blimbing, Kota Malang, Jawa Timur 65123</p>
            </div>
            <div style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ color: '#630330' }}>📞</span>
              <p style={{ color: '#a0aec0', fontSize: '14px', margin: 0 }}>+62-851-1710-1207</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ color: '#630330' }}>✉️</span>
              <p style={{ color: '#a0aec0', fontSize: '14px', margin: 0 }}>kalako.pro@gmail.com</p>
            </div>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>Mulai Bertransformasi</h4>
            <p style={{ color: '#a0aec0', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>Dapatkan wawasan terbaru tentang sistem ERP dan otomatisasi bisnis.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="email" placeholder="Email Anda" style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px', color: '#ffffff', fontSize: '14px' }} />
              <button style={{ backgroundColor: '#630330', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '12px 20px', fontWeight: 600, cursor: 'pointer' }}>Daftar</button>
            </div>
          </div>
        </div>

        <div style={{ pt: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
          <p style={{ color: '#718096', fontSize: '13px', margin: 0, paddingTop: '30px' }}>
            &copy; {new Date().getFullYear()} PT. Karya Mulya Korpora. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
