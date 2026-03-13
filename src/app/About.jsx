import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        .about-app {
          --erp-primary: #630330;
          --erp-primary-hover: #4a0224;
          --erp-primary-light: #f3d4e5;
          --erp-secondary: #f2da00;
          --erp-dark: #111111;
          --erp-text: #4a5568;
          --erp-bg: #ffffff;
          --erp-bg-alt: #fafafa;
          --erp-border: #eaeaea;

          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--erp-text);
          background-color: var(--erp-bg);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        /* Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }

        /* Typography */
        .text-gradient {
          background: linear-gradient(135deg, var(--erp-primary) 0%, #aa0552 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-tag {
          display: inline-block;
          padding: 6px 14px;
          backgroundColor: var(--erp-primary-light);
          color: var(--erp-primary);
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Layout Utilities */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-padding {
          padding: 100px 0;
        }

        /* About specific styling */
        .about-header-section {
          position: relative;
          background: radial-gradient(circle at top left, rgba(243, 212, 229, 0.4) 0%, rgba(255, 255, 255, 0) 50%), #ffffff;
          padding-top: 100px;
          padding-bottom: 80px;
        }

        .about-blob {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, rgba(99, 3, 48, 0.04) 0%, rgba(99, 3, 48, 0) 100%);
          border-bottom-right-radius: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .about-image-wrapper {
          position: relative;
          width: 100%;
          height: 480px;
          border-radius: 24px;
          overflow: visible;
        }

        .about-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        }

        .quote-box {
          position: absolute;
          bottom: -40px;
          right: -40px;
          background: linear-gradient(135deg, var(--erp-primary), #8a0543);
          border-radius: 20px;
          padding: 40px;
          max-width: 380px;
          box-shadow: 0 20px 40px rgba(99, 3, 48, 0.3);
          z-index: 10;
        }

        /* Vision & Mission Cards */
        .nav-card {
          background-color: #ffffff;
          padding: 50px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          position: relative;
          z-index: 2;
          overflow: hidden;
        }
        
        .nav-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 100%;
          background: var(--erp-primary);
        }

        .vm-bg-shape {
          position: absolute;
          background-color: var(--erp-primary-light);
          opacity: 0.5;
          z-index: 1;
          border-radius: 40px;
        }

        /* Flex Layouts */
        .flex-row {
          display: flex;
          align-items: center;
          gap: 60px;
        }
        
        .flex-row-reverse {
          display: flex;
          align-items: center;
          gap: 60px;
          flex-direction: row-reverse;
        }

        .flex-1 { flex: 1; }
        .flex-img { flex: 0 0 500px; position: relative; }

        /* Responsive Design */
        @media screen and (max-width: 1024px) {
          .flex-row, .flex-row-reverse {
            flex-direction: column;
            gap: 40px;
          }
          .flex-img {
            flex: auto;
            width: 100%;
          }
          .quote-box {
            bottom: -20px;
            right: 20px;
            left: 20px;
            max-width: none;
            padding: 24px;
          }
          .about-image-wrapper {
            height: 380px;
            margin-bottom: 50px;
          }
        }

        @media screen and (max-width: 768px) {
          .about-header-section {
            padding-top: 80px;
          }
          h2.section-title {
            font-size: 38px !important;
          }
          .quote-box {
            position: relative;
            bottom: 0;
            right: 0;
            left: 0;
            transform: translateY(-20px);
            margin: 0 15px;
          }
          .nav-card {
            padding: 30px;
          }
          .vm-bg-shape {
            display: none;
          }
          .vm-image-container {
            width: 100% !important;
            margin: 0 !important;
          }
        }
      `}</style>

      <div className="about-app">
        {/* ── About Hero Section ── */}
        <section className="about-header-section">
          <div className="about-blob"></div>
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>

            <div className="flex-row">
              {/* Right Side - Content (Moves to Top on Mobile) */}
              <div className="flex-1 animate-fade-in-up">
                <span className="section-tag" style={{ background: 'var(--erp-primary-light)', color: 'var(--erp-primary)' }}>
                  {t('IDENTITAS PERUSAHAAN', 'COMPANY IDENTITY')}
                </span>
                <h2 className="section-title" style={{
                  fontSize: '52px',
                  fontWeight: 800,
                  color: 'var(--erp-dark)',
                  lineHeight: 1.15,
                  letterSpacing: '-1px',
                  marginBottom: '30px'
                }}>
                  {t('Lebih Dari Sekadar', 'More Than Just')} <br />
                  <span className="text-gradient">{t('Pengembang IT', 'IT Developers')}</span>
                </h2>

                <p style={{
                  fontSize: '17px',
                  color: '#555',
                  lineHeight: 1.8,
                  marginBottom: '20px',
                  textAlign: 'justify'
                }}>
                  {t('PT. Karya Mulya Korpora adalah pionir teknologi Software House & IT Solution yang berfokus pada arsitektur perangkat lunak skalabilitas tinggi. Kami mengotomatisasi kerumitan operasional melalui ekosistem Website Enterprise, ERP (Enterprise Resource Planning), dan Custom Software spesifik industri.', 'PT. Karya Mulya Korpora is a technology pioneer in Software House & IT Solutions focused on high-scalability software architecture. We automate operational complexity through an Enterprise Website, ERP (Enterprise Resource Planning), and industry-specific Custom Software ecosystem.')}
                </p>
                <p style={{
                  fontSize: '17px',
                  color: '#555',
                  lineHeight: 1.8,
                  textAlign: 'justify'
                }}>
                  {t('Kami memberdayakan UMKM hingga korporasi multinasional dengan infrastruktur digital yang aman, cerdas, dan responsif. Memastikan setiap klien memiliki keunggulan kompetitif yang nyata.', 'We empower SMEs to multinational corporations with secure, intelligent, and responsive digital infrastructure, ensuring every client gains a real competitive advantage.')}
                </p>
              </div>

              {/* Left Side - Image with Quote */}
              <div className="flex-img animate-fade-in-up delay-100">
                <div className="about-image-wrapper">
                  <img src="/img/about.jpg" alt="Workspace Team Kalako" />

                  {/* Quote Box overlay */}
                  <div className="quote-box">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" style={{ marginBottom: '15px' }}>
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                    <p style={{
                      margin: 0,
                      color: '#ffffff',
                      fontSize: '16px',
                      lineHeight: 1.7,
                      fontWeight: 500,
                      letterSpacing: '0.2px'
                    }}>
                      {t('"Menghubungkan proses manajerial yang rumit ke dalam satu sistem interface cerdas yang elegan dan mudah dikendalikan."', '"Connecting complex managerial processes into one smart, elegant, and easy-to-control interface system."')}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Vision & Mission Section ── */}
        <section className="section-padding" style={{ backgroundColor: '#f9f9fc', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative background circle */}
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,3,48,0.03) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>

            {/* Vision Row */}
            <div className="flex-row" style={{ marginBottom: '100px' }}>

              {/* Vision Content */}
              <div className="flex-1 nav-card animate-fade-in-up">
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#aaa', letterSpacing: '2px', textTransform: 'uppercase' }}>{t('Idealisme Perusahaan', 'Company Idealism')}</span>
                <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--erp-dark)', margin: '15px 0 25px', lineHeight: 1.1 }}>
                  Our <span className="text-gradient">Vision</span>
                </h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--erp-primary)', borderRadius: '2px', marginBottom: '30px' }}></div>
                <p style={{ fontSize: '17px', color: '#555', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
                  {t('Menjadi penyedia solusi arsitektur teknologi terpercaya secara global. Kami berdedikasi menghadirkan sistem ERP, Website Application, dan Custom Software terintegrasi untuk membantu bisnis berakselerasi, terukur akurat, serta bertumbuh berkelanjutan di era komputasi modern.', 'To become a globally trusted technology architecture solution provider. We are dedicated to delivering integrated ERP systems, Website Applications, and Custom Software to help businesses accelerate, measure accurately, and grow sustainably in the modern computing era.')}
                </p>
              </div>

              {/* Vision Image */}
              <div className="flex-img animate-fade-in-up delay-100" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="vm-bg-shape" style={{ top: '-30px', right: '-30px', width: '90%', height: '100%' }}></div>
                <div className="vm-image-container" style={{ width: '90%', height: '360px', position: 'relative', zIndex: 2, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(99, 3, 48, 0.15)' }}>
                  <img src="/img/vision.jpg" alt="Visi Perusahaan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

            </div>

            {/* Mission Row (Reversed) */}
            <div className="flex-row-reverse">

              {/* Mission Content */}
              <div className="flex-1 nav-card animate-fade-in-up delay-100">
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#aaa', letterSpacing: '2px', textTransform: 'uppercase' }}>{t('Dedikasi Operasional', 'Operational Dedication')}</span>
                <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--erp-dark)', margin: '15px 0 25px', lineHeight: 1.1 }}>
                  Our <span className="text-gradient">Mission</span>
                </h2>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--erp-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: 'var(--erp-primary)', fontWeight: 800 }}>01</span>
                    </div>
                    <p style={{ fontSize: '16.5px', color: '#555', lineHeight: 1.7, margin: 0, paddingTop: '6px' }}>
                      {t('Merekayasa solusi perangkat lunak yang dirancang berstandar profesional, memiliki arsitektur dinamis (scalable), serta kepatuhan mutlak pada protokol keamanan data enterprise.', 'Engineer software solutions with professional standards, dynamic (scalable) architecture, and full compliance with enterprise data security protocols.')}
                    </p>
                  </li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--erp-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: 'var(--erp-primary)', fontWeight: 800 }}>02</span>
                    </div>
                    <p style={{ fontSize: '16.5px', color: '#555', lineHeight: 1.7, margin: 0, paddingTop: '6px' }}>
                      {t('Mendistribusikan sistem ERP yang aplikatif, intuitif (*user-friendly*), & terjangkau guna mendukung revolusi efisiensi operasional bagi entitas korporat maupun bisnis UMKM progresif.', 'Deliver practical, intuitive (user-friendly), and affordable ERP systems to support an operational efficiency revolution for corporate entities and progressive SMEs.')}
                    </p>
                  </li>
                </ul>
              </div>

              {/* Mission Image (Placeholder using about/vision style or standard container) */}
              <div className="flex-img animate-fade-in-up" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="vm-bg-shape" style={{ bottom: '-30px', left: '-30px', width: '90%', height: '100%', backgroundColor: '#630330', opacity: 0.1 }}></div>
                <div className="vm-image-container" style={{ width: '90%', height: '360px', position: 'relative', zIndex: 2, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}>
                  {/* Here we reuse about.jpg or vision.jpg if a mission-specific one isn't available, applying a slight filter so it looks distinct */}
                  <img src="/img/about.jpg" alt="Misi Perusahaan" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} />
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </>
  )
}

export default About
