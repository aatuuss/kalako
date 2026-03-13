import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Service = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const els = document.querySelectorAll('.anim-el');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('anim-visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="service-root"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '0',
        overflowX: 'hidden',
        backgroundColor: '#fff', // Latar belakang utama putih
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        .anim-el { opacity: 0; --anim-delay: 0s; }
        .anim-el.anim-visible.anim-up    { animation: fadeUp    0.65s var(--anim-delay) ease both; }
        .anim-el.anim-visible.anim-left  { animation: fadeLeft  0.65s var(--anim-delay) ease both; }
        .anim-el.anim-visible.anim-right { animation: fadeRight 0.65s var(--anim-delay) ease both; }
        .anim-el.anim-visible.anim-scale { animation: scaleIn   0.65s var(--anim-delay) ease both; }
        .anim-d1 { --anim-delay: 0.12s; }
        .anim-d2 { --anim-delay: 0.24s; }
        .anim-d3 { --anim-delay: 0.36s; }
        .anim-d4 { --anim-delay: 0.48s; }

        .service-card { transition: transform 0.28s ease, box-shadow 0.28s ease !important; }
        .service-card:hover { transform: translateY(-6px) !important; box-shadow: 0 14px 36px rgba(0,0,0,0.12) !important; }
        .service-cta-button { transition: transform 0.2s ease, box-shadow 0.2s ease !important; }
        .service-cta-button:hover { transform: translateY(-2px) !important; box-shadow: 0 8px 24px rgba(255,255,255,0.35) !important; }

        .service-info-title,
        .service-services-title {
          font-size: 32px;
          line-height: 1.25;
        }

        .service-cta-title {
          margin: 0;
          color: #ffffff;
          font-size: 25px;
          line-height: 1.4;
          font-weight: 700;
          max-width: 720px;
        }

        .service-cta-desc {
          margin: 12px 0 0;
          color: #ffffff;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 400;
          opacity: 0.9;
        }

        @media (max-width: 1100px) {
          .service-hero-inner { flex-direction: column !important; min-height: auto !important; }
          .service-hero-left { flex: none !important; width: 100% !important; padding: 40px 5% !important; }
          .service-hero-right { flex: none !important; width: 100% !important; min-height: 220px !important; }
          .service-hero-title { font-size: 34px !important; }
          .service-info-row { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
          .service-image-strips { margin-left: 0 !important; }
          .service-info-content { margin-left: 0 !important; max-width: 100% !important; }
          .service-cards-section-inner { margin: 0 auto !important; padding: 0 20px !important; }
          .service-cards-row { flex-wrap: wrap !important; justify-content: center !important; }
          .service-cards-inner { flex-wrap: wrap !important; justify-content: center !important; }
          .service-card { width: 100% !important; max-width: 340px !important; }
          .service-blob-container { width: 320px !important; height: 320px !important; }
          .service-cta-inner { margin: 0 auto !important; padding: 0 16px !important; }
          .service-cta-box { flex-direction: column !important; align-items: flex-start !important; padding: 32px 28px !important; gap: 20px !important; }
          .service-cta-button { margin-top: 0 !important; }
          .service-cutout-base { width: 58% !important; height: 42px !important; bottom: -18px !important; border-radius: 0 0 22px 22px !important; }
          .service-cutout-mask-middle { width: 36% !important; height: 22px !important; border-top-left-radius: 22px !important; }
          .service-cutout-mask-right-bottom { width: 18% !important; height: 22px !important; }
          .service-cutout-mask-right-top { width: 18% !important; height: 22px !important; bottom: 22px !important; border-top-left-radius: 22px !important; }
          .service-cutout-middle { width: 36% !important; height: 22px !important; border-top-left-radius: 22px !important; border-bottom-right-radius: 22px !important; }
          .service-cutout-pink { width: 18% !important; height: 22px !important; bottom: 22px !important; border-top-left-radius: 22px !important; border-bottom-right-radius: 22px !important; }
        }

        @media (max-width: 992px) {
          .service-cutout-base,
          .service-cutout-mask-middle,
          .service-cutout-mask-right-bottom,
          .service-cutout-mask-right-top,
          .service-cutout-middle,
          .service-cutout-pink {
            display: none !important;
          }

          .service-cta-box {
            border-bottom-right-radius: 24px !important;
          }

          .service-info-title,
          .service-services-title {
            font-size: 28px !important;
          }
        }

        @media (max-width: 768px) {
          .service-hero-title { font-size: 26px !important; }
          .service-hero-left { padding: 28px 16px !important; }
          .service-hero-right { min-height: 160px !important; }
          .service-image-strips { display: none !important; }
          .service-info-content { margin-left: 0 !important; }
          .service-blob-container { display: none !important; }
          .service-cards-section-inner { margin: 0 !important; padding: 0 12px !important; }
          .service-cards-inner { width: 100%; gap: 16px !important; }
          .service-card { max-width: 100% !important; }
          .service-cta-inner { margin: 0 8px !important; overflow: hidden; }
          .service-cta-box { padding: 24px 16px !important; }
          .service-rating-star { font-size: 24px !important; }
          .service-rating-label { font-size: 15px !important; margin-left: 6px !important; }
          .service-info-title,
          .service-services-title { font-size: 24px !important; }
          .service-info-desc { font-size: 15px !important; line-height: 1.55 !important; }
          .service-cta-title { font-size: 20px !important; }
          .service-cta-desc { font-size: 14px !important; }
          .service-cta-button {
            width: 100%;
            justify-content: center;
            margin-top: 6px !important;
            padding: 12px 20px !important;
          }
        }

        @media (max-width: 480px) {
          .service-hero-title { font-size: 22px !important; }
          .service-info-title,
          .service-services-title { font-size: 21px !important; }
          .service-cta-title { font-size: 18px !important; line-height: 1.35 !important; }
        }
      `}</style>
      <div
        className="service-hero-inner"
        style={{
          width: '100%',
          maxWidth: '1440px',
          minHeight: '420px',
          position: 'relative',
          display: 'flex',
          overflow: 'hidden',
          backgroundColor: '#fff',
          marginTop: '0',
        }}
      >
        {/* Sisi Kiri: Konten Teks */}
        <div
          className="service-hero-left anim-el anim-left"
          style={{
            flex: '1.2',
            padding: '20px 5% 40px 8%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 2, // Memastikan teks di atas gradien jika ada overlap
          }}
        >
          <h1
            className="service-hero-title"
            style={{
              margin: 0,
              fontSize: '50px',
              fontWeight: '600',
              lineHeight: '1.1',
              color: '#000',
              letterSpacing: '-1px',
            }}
          >
            {t('Layanan Sistem', 'Our')}
            <br />
            {t('ERP Perusahaan Kami', 'Company ERP Services')}
          </h1>

          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            {/* Menggunakan Bintang Kuning */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className="service-rating-star" style={{ color: '#FFB800', fontSize: '32px' }}>
                  ★
                </span>
              ))}
            </div>
            <span
              className="service-rating-label"
              style={{
                fontSize: '17px',
                fontWeight: '700',
                color: '#000',
                textTransform: 'lowercase',
                marginLeft: '10px'
              }}
            >
              {t('layanan kami', 'our services')}
            </span>
          </div>
        </div>

        {/* Sisi Kanan: Gambar dengan Gradasi Stacked */}
        <div
          className="service-hero-right anim-el anim-right anim-d2"
          style={{
            flex: '1',
            position: 'relative',
            minHeight: '250px',
          }}
        >
          {/* Gambar Dashboard */}
          <img
            src="/img/hero-erp.png" // Pastikan path gambar benar
            alt="ERP Dashboard"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left center',
            }}
          />

          {/* Overlay Gradasi untuk efek memudar (Fade) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              // Gradasi dari Putih Pekat ke Transparan agar menyatu dengan background kiri
              background: 'linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0.8) 9%, transparent 35%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          height: '1px',
          backgroundColor: '#d8d8d8',
        }}
      />


      <section
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '50px 20px 54px',
        }}
      >
        <div
          className="service-info-row"
          style={{
            width: '100%',
            maxWidth: '1380px',
            display: 'flex',
            alignItems: 'center',
            gap: '44px',
          }}
        >
          <div className="service-image-strips anim-el anim-left" style={{ display: 'flex', alignItems: 'flex-start', gap: '4px', marginLeft: '50px' }}>
            <div
              style={{
                width: '86px',
                height: '282px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/img/laptop.jpg"
                alt="Transformasi digital bisnis"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '12% center',
                }}
              />
            </div>

            <div
              style={{
                width: '90px',
                height: '282px',
                overflow: 'hidden',
                marginTop: '24px',
              }}
            >
              <img
                src="/img/laptop.jpg"
                alt="ERP System modern"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '46% center',
                }}
              />
            </div>
          </div>

          <div className="service-info-content anim-el anim-right" style={{ maxWidth: '700px', marginLeft: '30px' }}>
            <h2
              className="service-info-title"
              style={{
                margin: 0,
                color: '#121212',
                fontSize: '32px',
                lineHeight: '1.25',
                fontWeight: 700,
                letterSpacing: '-0.4px',
              }}
            >
              Transformasi Digital Bisnis
              <br />
              {t('dengan ERP System Modern', 'with Modern ERP Systems')}
            </h2>

            <p
              className="service-info-desc"
              style={{
                marginTop: '22px',
                marginBottom: 0,
                color: '#1f1f1f',
                fontSize: '16px',
                lineHeight: '1.45',
                fontWeight: 400,
                maxWidth: '690px',
              }}
            >
              {t('Kami menyediakan ERP dengan fitur Dashboard, Prospects, Projects, Project Status, dan Role Managment, satu ERP Retail dengan POS, manajemen stok, dan laporan penjualan untuk mendukung operasional bisnis yang lebih cepat dan terkontrol.', 'We provide ERP with Dashboard, Prospects, Projects, Project Status, and Role Management features, plus retail ERP with POS, stock management, and sales reporting to support faster and more controlled business operations.')}
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '6px 0 56px', // remove horizontal padding to allow shape to touch edge
          overflow: 'hidden', // to prevent horizontal scroll
        }}
      >
        <div className="service-cards-section-inner" style={{ width: '100%', maxWidth: '1380px', margin: '0 0 0 45px' }}>
          <h2
            className="service-services-title anim-el anim-up"
            style={{
              margin: '0 0 18px 14px',
              color: '#121212',
              fontSize: '32px',
              lineHeight: '1.18',
              fontWeight: 700,
              letterSpacing: '-0.3px',
            }}
          >
            {t('Layanan Perusahaan', 'Company Services')}
            <br />
            {t('Kami', 'We Provide')}
          </h2>

          <div
            className="service-cards-row"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <div className="service-cards-inner" style={{ display: 'flex', gap: '24px' }}>
              <div
                className="service-card anim-el anim-up"
                style={{
                  width: '310px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #d8d8d8',
                  borderRadius: '24px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/img/project.png"
                  alt="Project Base"
                  style={{
                    width: '100%',
                    height: '235px',
                    objectFit: 'cover',
                    objectPosition: 'left top',
                  }}
                />

                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      margin: '0 0 16px',
                      color: '#171717',
                      fontSize: '26px',
                      lineHeight: '1.2',
                      fontWeight: 600,
                    }}
                  >
                    Project Base
                  </h3>

                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '24px',
                      color: '#333333',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      fontWeight: 400,
                      listStyleType: 'disc',
                    }}
                  >
                    <li>{t('Monitoring data bisnis secara real-time', 'Real-time business data monitoring')}</li>
                    <li>{t('Visualisasi performa proyek', 'Project performance visualization')}</li>
                    <li>{t('Manajemen data calon klien', 'Prospect data management')}</li>
                    <li>{t('Tracking', 'Tracking')}</li>
                    <li>{t('Perencanaan', 'Planning')}</li>
                    <li>{t('pembagian tugas', 'Task assignment')}</li>
                    <li>{t('Timeline dan target proyek', 'Project timeline and targets')}</li>
                    <li>{t('Update status secara real-time', 'Real-time status updates')}</li>
                  </ul>
                </div>
              </div>

              <div
                className="service-card anim-el anim-up anim-d2"
                style={{
                  width: '310px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #d8d8d8',
                  borderRadius: '24px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/img/retail.png"
                  alt="ERP Retail"
                  style={{
                    width: '100%',
                    height: '235px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />

                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      margin: '0 0 16px',
                      color: '#171717',
                      fontSize: '26px',
                      lineHeight: '1.2',
                      fontWeight: 600,
                    }}
                  >
                    ERP Retail
                  </h3>

                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '24px',
                      color: '#333333',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      fontWeight: 400,
                      listStyleType: 'disc',
                    }}
                  >
                    <li>{t('ERP manajemen keuangan dan akuntansi', 'ERP for finance and accounting management')}</li>
                    <li>{t('Sistem inventory dan warehouse', 'Inventory and warehouse systems')}</li>
                    <li>{t('Dashboard real-time untuk pengambilan keputusan', 'Real-time dashboards for decision making')}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="service-blob-container anim-el anim-scale anim-d1"
              style={{
                width: '450px',
                height: '450px',
                position: 'relative',
                flexShrink: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible', // Ubah kembali jadi visible agar ujung jari/image di atas tidak terpotong
              }}
            >
              <svg
                viewBox="0 0 450 450"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  transform: 'translateX(25%)', // Geser lingkarannya saja ke kanan sebanyak 25% dari lebarnya
                }}
              >
                <path
                  d="M108 76 C167 30 261 18 334 40 C401 60 441 117 450 186 L450 344 C437 398 395 434 330 444 C252 457 165 433 102 382 C42 333 14 257 19 186 C23 136 53 104 108 76 Z"
                  fill="#640d2f"
                />
              </svg>

              <img
                src="/img/dummy.webp"
                alt="Visual layanan"
                style={{
                  position: 'relative',
                  width: '90%',
                  height: 'auto',
                  objectFit: 'contain',
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '10px 10px 34px',
        }}
      >
        <div
          className="service-cta-inner anim-el anim-up"
          style={{
            width: '100%',
            maxWidth: '1100px',
            position: 'relative',
          }}
        >
          <div
            className="service-cutout-base"
            style={{
              position: 'absolute',
              left: 0,
              bottom: '-24px',
              width: '55%',
              height: '55px',
              backgroundColor: '#e6e6e6',
              borderRadius: '0 0 28px 28px',
              zIndex: 1,
            }}
          />

          {/* 1. Mask putih persis di bawah Grey layer */}
          <div
            className="service-cutout-mask-middle"
            style={{
              position: 'absolute',
              left: '70%',
              transform: 'translateX(-50%)',
              bottom: '0px',
              width: '30%',
              height: '30px',
              backgroundColor: '#ffffff',
              borderTopLeftRadius: '32px',
              zIndex: 5,
            }}
          />

          {/* 2. Mask putih solid di sudut kanan bawah (bawah layer Pink) */}
          <div
            className="service-cutout-mask-right-bottom"
            style={{
              position: 'absolute',
              right: 0,
              bottom: '0px',
              width: '15%',
              height: '30px',
              backgroundColor: '#ffffff',
              zIndex: 5,
            }}
          />

          {/* 3. Mask putih persis di bawah Pink layer */}
          <div
            className="service-cutout-mask-right-top"
            style={{
              position: 'absolute',
              right: 0,
              bottom: '30px',
              width: '15%',
              height: '30px',
              backgroundColor: '#ffffff',
              borderTopLeftRadius: '32px',
              zIndex: 5,
            }}
          />

          {/* 4. Layer Grey (Middle Cutout) */}
          <div
            className="service-cutout-middle"
            style={{
              position: 'absolute',
              left: '70%',
              transform: 'translateX(-50%)',
              bottom: '0px',
              width: '30%',
              height: '30px',
              backgroundColor: '#e6e6e6',
              borderTopLeftRadius: '32px',
              borderBottomRightRadius: '32px',
              zIndex: 6,
            }}
          />

          {/* 5. Layer Pink (Right Cutout) */}
          <div
            className="service-cutout-pink"
            style={{
              position: 'absolute',
              right: 0,
              bottom: '30px',
              width: '15%',
              height: '30px',
              backgroundColor: '#ffb2d9',
              borderTopLeftRadius: '32px',
              borderBottomRightRadius: '32px',
              zIndex: 7,
            }}
          />

          {/* Container Utama Maroon (Konten) */}
          <div
            className="service-cta-box"
            style={{
              position: 'relative',
              zIndex: 4,
              backgroundColor: '#5b0726',
              borderRadius: '32px',
              borderBottomRightRadius: '0px',
              padding: '40px 50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              overflow: 'visible',
            }}
          >
            {/* Kontainer Teks - pastikan zIndex lebih tinggi agar tidak tertutup */}
            <div style={{ position: 'relative', zIndex: 3 }}>
              <h3 className="service-cta-title">
                Kami hadir untuk membantu Anda membangun ERP System
                <br />
                {t('yang sesuai dengan kebutuhan bisnis Anda', 'that fits your business needs')}
              </h3>
              <p className="service-cta-desc">
                {t('Solusi terpadu untuk bisnis anda', 'Integrated solutions for your business')}
              </p>
            </div>

            {/* Tombol - pastikan zIndex lebih tinggi */}
            <a
              className="service-cta-button"
              href="/contact"
              style={{
                position: 'relative',
                zIndex: 3,
                marginTop: '-20px',
                border: 'none',
                backgroundColor: '#ffffff',
                color: '#000000',
                borderRadius: '999px',
                padding: '12px 28px',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                flexShrink: 0,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {t('HUBUNGI KAMI', 'CONTACT US')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;