import React from 'react'

const Service = () => {
  const serviceCategories = [
    {
      title: "Core ERP Solutions",
      description: "Sistem pusat yang mengintegrasikan seluruh departemen perusahaan Anda ke dalam satu database terpadu.",
      features: ["Manajemen Keuangan", "Pengadaan Berbasis AI", "Human Resource Systems", "Aset & Inventori"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      title: "Custom Software Development",
      description: "Pengembangan perangkat lunak yang dirancang khusus untuk memenuhi kebutuhan bisnis unik industri Anda.",
      features: ["Mobile App Development", "High-Performance Web Apps", "API Integration", "Legacy System Migration"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Transformasikan data mentah menjadi wawasan strategis untuk pengambilan keputusan yang lebih cepat dan akurat.",
      features: ["Real-time Reporting", "Predictive Analytics", "Data Visualization", "Operational Dashboard"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    }
  ]

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        .service-app {
          --erp-primary: #630330;
          --erp-primary-hover: #4a0224;
          --erp-primary-light: #f3d4e5;
          --erp-dark: #111111;
          --erp-text: #4a5568;
          --erp-bg: #ffffff;
          --erp-bg-alt: #f9f9fc;
          --erp-border: #eaeaea;

          font-family: 'Inter', sans-serif;
          color: var(--erp-text);
          background-color: var(--erp-bg);
          overflow-x: hidden;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }

        .text-gradient {
          background: linear-gradient(135deg, var(--erp-primary) 0%, #aa0552 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-padding {
          padding: 100px 0;
        }

        .service-header {
          background: radial-gradient(circle at bottom center, rgba(243, 212, 229, 0.3) 0%, rgba(255, 255, 255, 0) 70%), #ffffff;
          padding-top: 140px;
          padding-bottom: 80px;
          text-align: center;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: white;
          padding: 50px;
          border-radius: 32px;
          border: 1px solid var(--erp-border);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(99, 3, 48, 0.1);
          border-color: var(--erp-primary-light);
        }

        .icon-box {
          width: 70px;
          height: 70px;
          background-color: var(--erp-primary-light);
          color: var(--erp-primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          transition: all 0.3s ease;
        }

        .service-card:hover .icon-box {
          background-color: var(--erp-primary);
          color: white;
          transform: rotate(10deg);
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 30px 0 0 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-weight: 500;
          color: var(--erp-dark);
        }

        .check-icon {
          color: var(--erp-primary);
          flex-shrink: 0;
        }

        /* Mobile Adjustments */
        @media screen and (max-width: 768px) {
          .service-header {
            padding-top: 100px;
          }
          h1 {
            font-size: 42px !important;
          }
          .service-card {
            padding: 30px;
          }
        }
      `}</style>

      <div className="service-app">
        <header className="service-header">
          <div className="container">
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              backgroundColor: 'var(--erp-primary-light)',
              color: 'var(--erp-primary)',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 700,
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }} className="animate-fade-in-up">Ekosistem Digital Kami</span>
            <h1 style={{ fontSize: '56px', fontWeight: 800, color: 'var(--erp-dark)', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '24px' }} className="animate-fade-in-up delay-100">
              Layanan <span className="text-gradient">Terintegrasi</span> <br /> Untuk Masa Depan
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--erp-text)', maxWidth: '700px', margin: '0 auto' }} className="animate-fade-in-up delay-200">
              Dari arsitektur inti hingga antarmuka pelanggan, kami menyediakan spektrum penuh solusi teknologi untuk memperkuat keunggulan kompetitif perusahaan Anda.
            </p>
          </div>
        </header>

        <section className="section-padding" style={{ backgroundColor: 'var(--erp-bg-alt)' }}>
          <div className="container">
            <div className="service-grid">
              {serviceCategories.map((service, index) => (
                <div key={index} className={`service-card animate-fade-in-up delay-${(index + 1) * 100}`}>
                  <div className="icon-box">
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--erp-dark)', marginBottom: '16px' }}>{service.title}</h3>
                  <p style={{ fontSize: '15.5px', color: 'var(--erp-text)', lineHeight: 1.6 }}>{service.description}</p>

                  <ul className="feature-list">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="feature-item">
                        <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section Placeholder */}
        <section className="section-padding" style={{ textAlign: 'center' }}>
          <div className="container animate-fade-in-up">
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--erp-dark)', marginBottom: '30px' }}>Siap Mengotomatisasi Bisnis Anda?</h2>
            <p style={{ fontSize: '18px', color: 'var(--erp-text)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Konsultasikan tantangan operasional Anda dengan tim ahli kami dan temukan solusi yang tepat sasaran.
            </p>
            <button style={{
              backgroundColor: 'var(--erp-primary)',
              color: 'white',
              padding: '18px 45px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(99, 3, 48, 0.2)'
            }}
              onClick={() => window.location.href = '/contact'}>
              Mulai Konsultasi Gratis
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Service
