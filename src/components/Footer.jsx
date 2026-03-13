import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const iconWrapStyle = {
  width: '22px',
  height: '22px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#101010',
  flexShrink: 0,
}

const textLinkStyle = {
  textDecoration: 'none',
  color: '#141414',
  fontSize: '15px',
  lineHeight: '1.55',
}

const socialLinkStyle = {
  width: '30px',
  height: '30px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9ea3ad',
  textDecoration: 'none',
}

const whatsappLinkStyle = {
  ...socialLinkStyle,
}

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.41 2 5.5 4.91 5.5 8.5c0 4.64 5.21 11.76 5.43 12.06a1.33 1.33 0 0 0 2.14 0c.22-.3 5.43-7.42 5.43-12.06C18.5 4.91 15.59 2 12 2Zm0 9.25A2.75 2.75 0 1 1 12 5.75a2.75 2.75 0 0 1 0 5.5Z" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.56 3.53.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.23.19 2.42.56 3.53a1 1 0 0 1-.24 1.01l-2.2 2.25Z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2 .26v.13l7 4.82 7-4.82v-.13a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75Zm14 2.56-6.43 4.42a1 1 0 0 1-1.14 0L5 9.57v7.68c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V9.57Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2.8" />
    <circle cx="8" cy="8" r="0.9" fill="currentColor" stroke="none" />
    <path d="M8 10.7v5.8" />
    <path d="M11.7 16.5v-5.8h2.8v1.1c.5-.8 1.35-1.25 2.45-1.25 1.7 0 2.65 1.1 2.65 3.1v2.85" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3.4 20.6 4.9 16.9a8.6 8.6 0 1 1 3 3l-4.5.7Z" />
    <path d="M9.6 8.8c.2-.3.43-.35.64-.35h.4c.14 0 .33.03.48.34l.55 1.2c.1.2.08.35-.02.52l-.18.28-.28.28c-.1.11-.16.22-.06.4.1.18.45.76.98 1.22.66.58 1.2.77 1.36.85.17.08.28.07.39-.06.11-.12.42-.49.53-.66.11-.16.21-.14.36-.07.15.06.95.45 1.11.53.17.08.28.13.32.2.05.08.05.45-.09.84-.14.39-.82.75-1.12.78-.3.03-.67.1-2.2-.5-1.87-.74-3.05-2.57-3.15-2.7-.1-.13-.75-.98-.75-1.87 0-.88.46-1.33.63-1.55Z" />
  </svg>
)

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #cdcdcd',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <style>
        {`
          .footer-main {
            display: grid;
            grid-template-columns: 1.7fr 0.65fr 1fr;
            gap: 48px;
            padding: 42px 0 34px;
          }

          .footer-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            padding: 22px 0 14px;
          }

          @media (max-width: 900px) {
            .footer-main {
              grid-template-columns: 1fr;
              gap: 28px;
            }

            .footer-bottom {
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}
      </style>

      <div
        style={{
          width: '100%',
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 26px',
          boxSizing: 'border-box',
        }}
      >
        <div className="footer-main">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '-5px', marginBottom: '17px' }}>
              <img
                src="/img/kalako.png"
                alt="Kalako"
                style={{ width: '80px', height: 'auto', display: 'block' }}
              />
              <span
                style={{
                  color: '#630330',
                  fontSize: '32px',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '0.5px',
                  textTransform: 'lowercase',
                  marginBottom: '-10px',
                }}
              >
                kalako
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '370px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={iconWrapStyle}>
                  <LocationIcon />
                </span>
                <p style={{ margin: 0, color: '#141414', fontSize: '15px', lineHeight: '1.45' }}>
                  Jl. Mayang No.08, Bunulrejo, Kec. Blimbing, Kota
                  <br />
                  Malang, Jawa Timur 65123
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={iconWrapStyle}>
                  <PhoneIcon />
                </span>
                <a href="tel:+6282334553192" style={textLinkStyle}>
                  +62 823-3455-3192
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={iconWrapStyle}>
                  <MailIcon />
                </span>
                <a href="mailto:kalako.pro@gmail.com" style={textLinkStyle}>
                  kalako.pro@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ margin: '8px 0 14px', fontSize: '22px', lineHeight: '1.2', color: '#111111', fontWeight: 700 }}>
              {t('Tentang Kami', 'About Us')}
            </h3>
            <Link to="/Contact" style={textLinkStyle}>
              {t('Hubungi Kami', 'Contact Us')}
            </Link>
          </div>

          <div>
            <h3 style={{ margin: '8px 0 14px', fontSize: '22px', lineHeight: '1.2', color: '#111111', fontWeight: 700 }}>
              {t('Layanan Kami', 'Our Services')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link to="/Service" style={textLinkStyle}>
                {t('Layanan Sistem ERP', 'ERP System Service')}
              </Link>
              <Link to="/Website" style={textLinkStyle}>
                {t('Layanan Pengembangan Website', 'Website Development Service')}
              </Link>
              <Link to="/Customweb" style={textLinkStyle}>
                {t('Layanan Pengembangan Software Kustom', 'Custom Software Development Service')}
              </Link>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', height: '1px', backgroundColor: '#909090' }} />

        <div className="footer-bottom">
          <p style={{ margin: 0, color: '#141414', fontSize: '14px', lineHeight: '1.5' }}>
            {t('© 2026 PT. Karya Mulya Korpora. Semua Hak Dilindungi.', '© 2026 PT. Karya Mulya Korpora. All Rights Reserved.')}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={socialLinkStyle}>
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/kalako.id/" target="_blank" rel="noreferrer" aria-label="Instagram" style={socialLinkStyle}>
              <InstagramIcon />
            </a>
            <a href="https://wa.me/6282334553192" target="_blank" rel="noreferrer" aria-label="WhatsApp" style={whatsappLinkStyle}>
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
