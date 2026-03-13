import React, { useMemo, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const modulePortfolio = [
  {
    id: 1,
    title: 'Process & Energy Module',
    image: '/img/page1.png',
    bullets: [
      'Combined Pyrolysis',
      'Continuous',
      'Pyrolysis Reactor Design',
      'Gasoline Blending Calculator',
      'Heat Release Estimation',
    ],
  },
  {
    id: 2,
    title: 'Fluid & Flow Engineering',
    image: '/img/page2.png',
    bullets: [
      'Pressure Drop & Pipe Sizing',
      'Pump & Compressor Selection',
      'Turn Phase Flow Calculation',
      'Natural Gas Flare & Sizing',
    ],
  },
  {
    id: 3,
    title: 'Heat Transfer & Thermal System',
    image: '/img/page3.png',
    bullets: [
      'Heat Exchanger Design',
      'LMTD & Correction Factor',
      'Insulation Heat Loss',
      'Jacketed Vessel Heat Transfer',
    ],
  },
  {
    id: 4,
    title: 'Chemical & Separation Process',
    image: '/img/page4.png',
    bullets: ['Distillation Column Design', 'Vapor Liquid Equilibria', 'Flash Calculation'],
  },
  {
    id: 5,
    title: 'Equipment & Mechanical Design',
    image: '/img/page5.png',
    bullets: [
      'Vessel Thickness Calculation',
      'Separator Sizing',
      'Safety Valve Sizing',
      'Orifice & Instrument Calculation',
    ],
  },
  {
    id: 6,
    title: 'Utilities & Supporting Tools',
    image: '/img/page6.png',
    bullets: [
      'Steam Table & Unit Conversion',
      'Gas Conversion',
      'Psychrometric Analysis',
      'Engineering Property Estimation',
    ],
  },
];

const portfolioNumbers = [1, 2, 3, 4, 5, 6];

const Customweb = () => {
  const { t } = useLanguage();
  const serviceTabs = [
    {
      id: 'mobile-app',
      label: t('Aplikasi Mobile', 'Mobile Application'),
      title: t('Aplikasi Mobile', 'Mobile Application'),
      description: t(
        'Solusi aplikasi mobile modern berbasis Android dan iOS untuk mempermudah akses informasi, monitoring, dan layanan pelanggan secara real-time.',
        'Modern Android and iOS mobile app solutions to simplify access to information, monitoring, and real-time customer services.'
      ),
    },
    {
      id: 'ims',
      label: t('Sistem Manajemen Internal', 'Internal Management System'),
      title: t('Sistem Manajemen Internal', 'Internal Management System'),
      description: t(
        'Pembuatan sistem manajemen internal seperti ERP dan dashboard analitik untuk membantu pengambilan keputusan yang lebih cepat dan akurat.',
        'Development of internal management systems such as ERP and analytics dashboards to support faster and more accurate decision making.'
      ),
    },
    {
      id: 'automation',
      label: t('Sistem Otomasi Bisnis', 'Business Automation System'),
      title: t('Sistem Otomasi Bisnis', 'Business Automation System'),
      description: t(
        'Kami membantu mengotomatisasi proses bisnis mulai dari workflow, laporan, hingga integrasi antar sistem agar perusahaan lebih efisien dan kompetitif.',
        'We help automate business processes from workflows and reports to cross-system integrations so companies become more efficient and competitive.'
      ),
    },
  ];

  const [activeService, setActiveService] = useState(serviceTabs[0].id);
  const [activeModule, setActiveModule] = useState(1);

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

  const selectedService = useMemo(
    () => serviceTabs.find((service) => service.id === activeService) || serviceTabs[0],
    [activeService]
  );

  const handlePrevModule = () => {
    setActiveModule((prev) => (prev === 1 ? modulePortfolio.length : prev - 1));
  };

  const handleNextModule = () => {
    setActiveModule((prev) => (prev === modulePortfolio.length ? 1 : prev + 1));
  };

  return (
    <>
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

        .portfolio-card { transition: transform 0.28s ease, box-shadow 0.28s ease !important; }
        .portfolio-card:hover { transform: translateY(-6px) !important; box-shadow: 0 14px 36px rgba(0,0,0,0.12) !important; }
        .customweb-readmore-btn,
        .customweb-cta-button { transition: transform 0.2s ease, box-shadow 0.2s ease !important; }
        .customweb-readmore-btn:hover,
        .customweb-cta-button:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 18px rgba(0,0,0,0.18) !important; }

        .customweb-root * {
          box-sizing: border-box;
        }

        .customweb-hero-copy {
          transform: translateY(34px);
          margin-bottom: -34px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .customweb-readmore-btn {
          padding: 10px 30px;
          border-radius: 999px;
          background-color: #ffe8f3;
          color: #630330;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          margin-bottom: 60px;
        }

        .customweb-info-content {
          flex: 1.2;
          font-size: 15px;
          color: #1f1f1f;
          margin: 0;
          line-height: 1.6;
        }

        .customweb-service-tabs {
          flex: 0 0 320px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .customweb-service-detail {
          flex: 1;
          padding-top: 8px;
        }

        .customweb-portfolio-nav {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
          position: relative;
        }

        .customweb-portfolio-line {
          position: absolute;
          left: 20px;
          right: 20px;
          top: 50%;
          height: 2px;
          background-color: #6f6f6f;
          transform: translateY(-50%);
          z-index: 1;
        }

        .customweb-portfolio-numbers {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .customweb-cta-inner {
          width: 100%;
          max-width: 1100px;
          position: relative;
        }

        .customweb-cta-title {
          margin: 0;
          color: #ffffff;
          font-size: 25px;
          line-height: 1.4;
          font-weight: 700;
          max-width: 720px;
        }

        .customweb-cta-desc {
          margin: 12px 0 0;
          color: #ffffff;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 400;
          opacity: 0.9;
        }

        .customweb-cta-button {
          position: relative;
          z-index: 3;
          margin-top: -20px;
          border: none;
          background-color: #ffffff;
          color: #000000;
          border-radius: 999px;
          padding: 12px 28px;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          flex-shrink: 0;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .portfolio-slider-window {
          overflow: hidden;
          width: 100%;
        }

        .portfolio-slider-track {
          display: flex;
          width: 100%;
          transition: transform 420ms ease;
          will-change: transform;
        }

        .portfolio-slide {
          min-width: 100%;
          width: 100%;
          padding: 0 4px;
        }

        .portfolio-card {
          width: 100%;
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #e8d8e0;
          min-height: 560px;
          max-width: 360px;
          margin: 0 auto;
        }

        .customweb-top-card {
          width: 800px;
          height: 320px;
        }

        .customweb-info-row,
        .customweb-service-row,
        .customweb-cta-box {
          display: flex;
        }

        @media (max-width: 1200px) {
          .customweb-section-padding {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          .customweb-top-card {
            max-width: 100%;
          }
        }

        @media (max-width: 1024px) {
          .customweb-info-row,
          .customweb-service-row,
          .customweb-cta-box {
            flex-direction: column;
          }

          .customweb-hero-copy {
            transform: none;
            margin-bottom: 18px;
          }

          .customweb-info-row {
            margin-top: 0 !important;
            gap: 20px !important;
          }

          .customweb-info-content,
          .customweb-service-tabs,
          .customweb-service-detail {
            width: 100%;
            flex: 1 1 auto;
          }

          .customweb-service-row {
            gap: 24px !important;
          }

          .customweb-portfolio-nav {
            gap: 10px;
          }

          .customweb-portfolio-numbers {
            justify-content: center;
          }

          .customweb-cta-inner {
            padding: 0 16px;
          }

          .customweb-cta-box {
            padding: 30px 28px !important;
            align-items: flex-start !important;
          }

          .customweb-cta-button {
            margin-top: 0;
          }

          .customweb-cutout-base,
          .customweb-cutout-mask-middle,
          .customweb-cutout-mask-right-bottom,
          .customweb-cutout-mask-right-top,
          .customweb-cutout-middle,
          .customweb-cutout-pink {
            display: none;
          }

          .customweb-cta-box {
            border-bottom-right-radius: 24px !important;
          }

          .customweb-top-card {
            width: 100%;
            max-width: 800px;
            height: auto;
            min-height: 260px;
          }
        }

        @media (max-width: 768px) {
          .customweb-section-padding {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .customweb-title-main {
            font-size: 26px !important;
          }

          .customweb-section-title {
            font-size: 22px !important;
          }

          .customweb-portfolio-title {
            font-size: 28px !important;
          }

          .customweb-readmore-btn {
            margin-bottom: 28px;
          }

          .customweb-info-content,
          .customweb-service-detail p {
            font-size: 14px !important;
            line-height: 1.55 !important;
          }

          .customweb-portfolio-nav {
            gap: 8px;
          }

          .customweb-portfolio-line {
            display: none;
          }

          .customweb-portfolio-nav-arrow {
            width: 34px !important;
            height: 34px !important;
            min-width: 34px !important;
            font-size: 20px !important;
          }

          .customweb-portfolio-numbers button {
            width: 34px !important;
            height: 34px !important;
            font-size: 13px !important;
          }

          .portfolio-card {
            min-height: 0;
          }

          .portfolio-card img {
            height: 220px !important;
          }

          .customweb-cta-inner {
            padding: 0 8px;
            overflow: hidden;
          }

          .customweb-cta-box {
            padding: 24px 16px !important;
            gap: 14px !important;
          }

          .customweb-cta-title {
            font-size: 20px;
          }

          .customweb-cta-desc {
            font-size: 14px;
          }

          .customweb-cta-button {
            width: 100%;
            margin-top: 4px;
            padding: 11px 20px;
          }

          .customweb-top-card {
            min-height: 220px;
          }
        }

        @media (max-width: 480px) {
          .customweb-section-padding {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }

          .customweb-title-main {
            font-size: 22px !important;
          }

          .customweb-section-title {
            font-size: 20px !important;
          }

          .customweb-portfolio-title {
            font-size: 24px !important;
          }

          .customweb-readmore-btn {
            width: 100%;
          }

          .portfolio-slide {
            padding: 0;
          }
        }
      `}</style>

      <div className="customweb-root" style={{ width: '100%', fontFamily: "'Poppins', sans-serif" }}>
        <section
          style={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            paddingBottom: '100px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '270px',
              left: 0,
              width: '100%',
              height: '300px',
              backgroundImage: 'url(/img/back.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '250px',
                background: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 100%)',
                zIndex: 2,
              }}
            />
          </div>

          <div
            className="customweb-section-padding"
            style={{
              position: 'relative',
              zIndex: 4,
              width: '100%',
              maxWidth: '1200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '50px',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <div className="customweb-hero-copy anim-el anim-up">
              <h1
                className="customweb-title-main"
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#630330',
                  textAlign: 'center',
                  lineHeight: '1.4',
                  margin: '0 0 32px 0',
                  letterSpacing: '-0.7px',
                }}
              >
                Layanan Perusahaan Pengembangan
                <br />
                {t('Perangkat Lunak Kustom', 'Custom Software Development')}
              </h1>

              <button
                className="customweb-readmore-btn"
                type="button"
                onClick={() => {
                  const element = document.getElementById('custom-software-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{}}
              >
                {t('BACA SELENGKAPNYA', 'READ MORE')}
              </button>
            </div>

            <div
              className="customweb-top-card anim-el anim-up anim-d2"
              style={{
                marginTop: '24px',
                borderRadius: '12px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '8px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <div style={{ flex: 1, backgroundColor: '#f9f9f9', position: 'relative' }}>
                <img
                  src="/img/custom.png"
                  alt="App Dashboard Preview"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
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
            padding: '80px 20px',
            backgroundColor: '#ffffff',
          }}
        >
          <div style={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column' }}>
            <div
              className="customweb-info-row"
              style={{
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '28px',
                marginTop: '-30px',
              }}
            >
              <h2
                id="custom-software-section"
                className="customweb-section-title anim-el anim-left"
                style={{
                  flex: 1,
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#000000',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                Custom Software untuk
                <br />
                {t('Meningkatkan Efisiensi dan', 'Improve Efficiency and')}
                <br />
                {t('Produktivitas', 'Productivity')}
              </h2>

              <p className="customweb-info-content anim-el anim-right">
                {t('Layanan Custom Software Development kami berfokus pada pembuatan solusi digital yang dirancang khusus sesuai kebutuhan bisnis Anda. Kami membantu perusahaan mengembangkan sistem yang fleksibel, aman, dan dapat berkembang seiring pertumbuhan bisnis.', 'Our Custom Software Development service focuses on creating digital solutions tailored to your business needs. We help companies build systems that are flexible, secure, and scalable as the business grows.')}
              </p>
            </div>

            <hr
              style={{
                border: 'none',
                borderTop: '2px solid #4a4a4a',
                margin: '40px 0 60px 0',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2
                className="customweb-section-title"
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#000000',
                  marginBottom: '32px',
                  lineHeight: '1.4',
                }}
              >
                Layanan yang Kami
                <br />
                {t('Sediakan', 'Provide')}
              </h2>

              <div className="customweb-service-row" style={{ gap: '40px', alignItems: 'flex-start' }}>
                <div className="customweb-service-tabs anim-el anim-left">
                  {serviceTabs.map((service) => {
                    const isActive = service.id === activeService;

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setActiveService(service.id)}
                        style={{
                          padding: '14px 20px',
                          backgroundColor: isActive ? '#630330' : '#f5f5f5',
                          color: isActive ? '#ffffff' : '#000000',
                          borderRadius: '6px',
                          fontSize: '16px',
                          fontWeight: 500,
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 220ms ease',
                        }}
                      >
                        {service.label}
                      </button>
                    );
                  })}
                </div>

                <div className="customweb-service-detail anim-el anim-right anim-d1">
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#000000',
                      marginBottom: '16px',
                      marginTop: 0,
                    }}
                  >
                    {selectedService.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#1f1f1f',
                      lineHeight: '1.6',
                      margin: 0,
                    }}
                  >
                    {selectedService.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            width: '100%',
            padding: '30px 20px 50px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '100%', maxWidth: '820px' }}>
            <h2
              className="customweb-portfolio-title anim-el anim-up"
              style={{
                margin: 0,
                textAlign: 'center',
                fontSize: '32px',
                lineHeight: '1.2',
                color: '#111111',
                fontWeight: 800,
              }}
            >
              Portofolio Modul
              <br />
              {t('Kami', 'Our')}
            </h2>

            <p
              style={{
                margin: '16px auto 30px',
                maxWidth: '760px',
                textAlign: 'center',
                color: '#2d2d2d',
                fontSize: '17px',
                lineHeight: '1.6',
              }}
            >
              {t('Kami telah mengembangkan berbagai modul perhitungan dan sistem engineering digital untuk membantu perusahaan meningkatkan efisiensi, akurasi, dan kecepatan analisis teknis.', 'We have developed various calculation modules and digital engineering systems to help companies improve efficiency, accuracy, and speed of technical analysis.')}
            </p>

            <div className="customweb-portfolio-nav">
              <button
                className="customweb-portfolio-nav-arrow"
                type="button"
                onClick={handlePrevModule}
                aria-label={t('Modul sebelumnya', 'Previous module')}
                style={{
                  width: '40px',
                  height: '40px',
                  minWidth: '40px',
                  borderRadius: '50%',
                  border: '1.5px solid #630330',
                  backgroundColor: '#f2a7c8',
                  color: '#630330',
                  fontSize: '24px',
                  cursor: 'pointer',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {'<'}
              </button>

              <div className="customweb-portfolio-line" />

              <div className="customweb-portfolio-numbers">
                {portfolioNumbers.map((number) => {
                  const isActive = number === activeModule;

                  return (
                    <button
                      key={number}
                      type="button"
                      onClick={() => setActiveModule(number)}
                      aria-label={t(`Pilih modul ${number}`, `Select module ${number}`)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '1.5px solid #630330',
                        backgroundColor: isActive ? '#630330' : '#f2a7c8',
                        color: isActive ? '#ffffff' : '#630330',
                        fontWeight: 700,
                        fontSize: '15px',
                        cursor: 'pointer',
                        transition: 'all 220ms ease',
                      }}
                    >
                      {number}
                    </button>
                  );
                })}
              </div>

              <button
                className="customweb-portfolio-nav-arrow"
                type="button"
                onClick={handleNextModule}
                aria-label={t('Modul berikutnya', 'Next module')}
                style={{
                  width: '40px',
                  height: '40px',
                  minWidth: '40px',
                  borderRadius: '50%',
                  border: '1.5px solid #630330',
                  backgroundColor: '#f2a7c8',
                  color: '#630330',
                  fontSize: '24px',
                  cursor: 'pointer',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {'>'}
              </button>
            </div>

            <div className="portfolio-slider-window anim-el anim-up anim-d1">
              <div
                className="portfolio-slider-track"
                style={{ transform: `translateX(-${(activeModule - 1) * 100}%)` }}
              >
                {modulePortfolio.map((item) => (
                  <div key={item.id} className="portfolio-slide">
                    <article className="portfolio-card">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '290px',
                          objectFit: 'cover',
                        }}
                      />

                      <div style={{ padding: '18px 16px 22px' }}>
                        <h3
                          style={{
                            margin: '0 0 10px',
                            fontSize: '20px',
                            color: '#1c1c1c',
                          }}
                        >
                          {item.title}
                        </h3>

                        <ul
                          style={{
                            margin: 0,
                            paddingLeft: '18px',
                            listStyleType: 'disc',
                            listStylePosition: 'outside',
                            color: '#2f2f2f',
                            lineHeight: '1.7',
                            fontSize: '14px',
                          }}
                        >
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '24px 10px 70px',
          }}
        >
          <div className="customweb-cta-inner">
            <div
              className="customweb-cutout-base"
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

            <div
              className="customweb-cutout-mask-middle"
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

            <div
              className="customweb-cutout-mask-right-bottom"
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

            <div
              className="customweb-cutout-mask-right-top"
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

            <div
              className="customweb-cutout-middle"
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

            <div
              className="customweb-cutout-pink"
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

            <div
              className="customweb-cta-box"
              style={{
                position: 'relative',
                zIndex: 4,
                backgroundColor: '#630330',
                borderRadius: '32px',
                borderBottomRightRadius: '0px',
                padding: '40px 50px',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                overflow: 'visible',
              }}
            >
              <div style={{ position: 'relative', zIndex: 3 }}>
                <h3 className="customweb-cta-title">
                  Konsultasikan kebutuhan sistem Anda sekarang juga 
                  <br />
                  {t('halaman Contact Us.', 'via the Contact Us page.')}
                </h3>
                <p className="customweb-cta-desc">
                  {t('Solusi terpadu untuk bisnis anda', 'Integrated solutions for your business')}
                </p>
              </div>

              <a
                className="customweb-cta-button"
                href="/contact"
                style={{}}
              >
                {t('HUBUNGI KAMI', 'CONTACT US')}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Customweb;
