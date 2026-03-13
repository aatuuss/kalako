import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const featureSectionRef = useRef(null)
  const [activeService, setActiveService] = useState('web')
  const [openSolution, setOpenSolution] = useState('desain')
  const [activeFeature, setActiveFeature] = useState('dashboard')

  const serviceData = {
    web: {
      key: 'web',
      tabLabel: 'Web & App Development',
      title: 'Web & Application Development',
      image: '/img/web.jpg',
      imageAlt: 'Web Development',
      desc1: 'Solusi berbasis web modern untuk membangun kehadiran digital dan sistem operasional yang scalable.',
      desc2: 'Kami mengembangkan website dan aplikasi web dengan arsitektur yang aman, responsif, dan optimal untuk performa bisnis.',
      points: ['Company Profile Website', 'Landing Page']
    },
    erp: {
      key: 'erp',
      tabLabel: 'Enterprise Resource Planning',
      title: 'ERP System Development',
      image: '/img/erpsystem.jpg',
      imageAlt: 'ERP System Development',
      desc1: 'Sistem ERP terintegrasi untuk otomatisasi dan kontrol penuh atas operasional bisnis.',
      desc2: 'Kami merancang sistem ERP adaptif dan skalabel yang disesuaikan secara khusus dengan proses inti industri Anda.',
      points: ['Retail Management System', 'Project Base Management System']
    },
    custom: {
      key: 'custom',
      tabLabel: 'Custom Software Development',
      title: 'Custom Software Development',
      image: '/img/custom.jpg',
      imageAlt: 'Custom Software Development',
      desc1: 'Pengembangan software khusus sesuai kebutuhan unik bisnis Anda.',
      desc2: 'Kami menghadirkan solusi yang dirancang secara spesifik untuk mendukung proses internal dan otomatisasi operasional.',
      points: ['Mobile Application']
    }
  }

  const activeCard = serviceData[activeService]

  const solutionItems = [
    {
      key: 'desain',
      title: 'Desain Website ',
      description:
        'Kami menyediakan solusi desain dan pengembangan website modern yang membantu bisnis tampil lebih profesional, mudah diakses, dan siap bersaing di era digital.',
      points: [
        'Website company profile',
        'Website e-commerce',
        'Landing page marketing',
        'Website portal & sistem',
        'UI/UX modern dan profesional',
        'Responsive (mobile & tablet friendly)'
      ]
    },
    {
      key: 'erp',
      title: 'ERP System',
      description:
        'Kami menghadirkan sistem ERP terintegrasi untuk mempermudah pengelolaan keuangan, stok, dan operasional bisnis melalui laporan otomatis dan dashboard real-time yang informatif.',
      points: [
        'Modul keuangan & akuntansi',
        'Multi gudang',
        'Laporan otomatis',
        'dashboard real-time',
      ]
    },
    {
      key: 'software',
      title: 'Software',
      description:
        'Kami mengembangkan aplikasi web custom dengan dukungan maintenance dan upgrade untuk membantu bisnis melakukan digitalisasi proses secara efektif dan berkelanjutan.',
      points: [
        'Aplikasi web',
        'Maintenance & upgrade',
        'Digitalisasi proses bisnis'
      ]
    }
  ]

  const featureData = {
    dashboard: {
      key: 'dashboard',
      tabLabel: 'Dashboard Analitik',
      title: 'Pantau Performa Bisnis Secara Real-Time dalam Satu Dashboard.',
      image: '/img/dashboard.png',
      imageAlt: 'Dashboard Analytics',
      desc1: 'Satu sistem terintegrasi untuk memonitor stok, penjualan, customer, pemasukan, hingga riwayat transaksi secara akurat dan terpusat.',
      points: [
        'Dilengkapi Grafik & Laporan Otomatiss',
        'Semua Aktivitas Operasional Terkontrol Penuh.'
      ]
    },
    stok: {
      key: 'stok',
      tabLabel: 'Stok Retail ',
      title: 'Kontrol Stok dan Kadaluarsa Produk Secara Real-Time.',
      image: '/img/stok.png',
      imageAlt: 'Stok Retail',
      desc1: 'Satu sistem terintegrasi untuk memantau ketersediaan barang, status stok, harga jual, kategori, hingga notifikasi masa kadaluarsa dalam satu dashboard yang terpusat.',
      points: [
        'Dilengkapi Filter & Manajemen Produk Lengkap',
        'Manajemen Inventaris Lebih Terkontrol dan Efisien'
      ]
    },
    transaksi: {
      key: 'transaksi',
      tabLabel: 'Transaksi kasir',
      title: 'Pemrosesan Transaksi Tingkat Lanjut',
      image: '/img/transaksi.png',
      imageAlt: 'Transaksi Kasir',
      desc1: 'Kelola penjualan dengan pencarian produk instan, pengaturan jumlah dan diskon, perhitungan subtotal otomatis, hingga total belanja yang terupdate secara real-time.',
      points: [
        'Perhitungan Otomatis & Kontrol Pembayaran',
        'Setiap Transaksi Tercatat dan Terkelola dengan Rapi'
      ]
    },
    history: {
      key: 'history',
      tabLabel: 'History Transaksi',
      title: 'Pantau Kelola Riwayat Transaksi Secara Detail dan Terstruktur.',
      image: '/img/history.png',
      imageAlt: 'History Transaksi',
      desc1: 'Akses seluruh data transaksi berdasarkan rentang tanggal, lengkap dengan informasi kasir, jumlah item, total pembayaran, dan waktu transaksi dalam satu sistem terpusat.',
      points: [
        'Dilengkapi Fitur Filter & Export Data',
        'Transaksi Tercatat Otomatis dan Diaudit Kapan Saja'
      ]
    },
    laporan: {
      key: 'laporan',
      tabLabel: 'Laporan Keuangan',
      title: 'Pantau Performa Penjualan Bisnis Secara Real-Time.',
      image: '/img/laporan.png',
      imageAlt: 'Laporan Keuangan',
      desc1: 'Semua data penjualan tersaji dalam satu dashboard mulai dari total transaksi, pendapatan, hingga produk terlaris.',
      points: [
        'Analisis perkembangan bisnis dengan laporan harian, bulanan, dan tahunan yang mudah dipahami.',
        'Lengkap dengan fitur Export PDF dan Excel untuk mempermudah dokumentasi dan analisis data.'
      ]
    }
  }

  const activeFeatureCard = featureData[activeFeature]

  return (
    <div className="erp-app">
      {/* ── Internal Styling (Without CSS File Dependency) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .erp-app {
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
        }

        /* Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes blobMove {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        /* Buttons */
        .btn-primary {
          padding: 16px 36px;
          background: linear-gradient(135deg, var(--erp-primary) 0%, #8b0a48 100%);
          color: white;
          border: none;
          border-radius: 100px;
          font-size: 15.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 25px rgba(99, 3, 48, 0.25);
          font-family: 'Inter', sans-serif;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 35px rgba(99, 3, 48, 0.35);
          filter: brightness(1.1);
        }

        .btn-outline {
          padding: 14px 34px;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          color: var(--erp-primary);
          border: 1.5px solid var(--erp-primary);
          border-radius: 100px;
          font-size: 15.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Inter', sans-serif;
        }

        .btn-outline:hover {
          background-color: var(--erp-primary);
          color: white;
          transform: translateY(-3px);
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          position: relative;
          background: #ffffff;
          display: flex;
          align-items: flex-start;
          overflow: hidden;
          padding-top: 0px;
          padding-bottom: 40px;
        }

        .hero-bg-accent {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 3, 48, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          z-index: 0;
          pointer-events: none;
        }

        .accent-1 { top: -100px; right: -100px; animation: blobMove 15s infinite alternate; }
        .accent-2 { bottom: -150px; left: -100px; animation: blobMove 20s infinite alternate-reverse; }

        .hero-blob {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          background: linear-gradient(135deg, rgba(99, 3, 48, 0.03) 0%, rgba(99, 3, 48, 0) 100%);
          border-bottom-left-radius: 40%;
          pointer-events: none;
          z-index: 1;
        }

        .hero-img {
          animation: float 8s ease-in-out infinite;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.12));
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Services Tabs */
        .service-tab {
          padding: 14px 32px;
          background-color: transparent;
          color: var(--erp-text);
          border: 1px solid var(--erp-border);
          border-radius: 50px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .service-tab:hover {
          border-color: var(--erp-primary);
          color: var(--erp-primary);
        }

        .service-tab.active {
          background-color: var(--erp-primary);
          color: white;
          border-color: var(--erp-primary);
          box-shadow: 0 4px 15px rgba(99, 3, 48, 0.2);
        }

        /* Feature/Service Card */
        .premium-card {
          background: white;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .premium-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        /* Accordion */
        .accordion-item {
          background: white;
          border-radius: 16px;
          border: 1px solid var(--erp-border);
          padding: 24px;
          transition: all 0.3s ease;
          margin-bottom: 16px;
          cursor: pointer;
        }

        .accordion-item:hover {
          border-color: var(--erp-primary-light);
          box-shadow: 0 4px 20px rgba(99, 3, 48, 0.05);
        }

        .accordion-item.active {
          border-color: var(--erp-primary);
          box-shadow: 0 8px 30px rgba(99, 3, 48, 0.1);
        }

        .accordion-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--erp-bg-alt);
          color: var(--erp-dark);
          font-size: 20px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .accordion-item.active .accordion-btn {
          background-color: var(--erp-primary);
          color: white;
          transform: rotate(180deg);
        }

        /* CTA Banner */
        .cta-banner {
          background: linear-gradient(135deg, var(--erp-primary) 0%, #aa0552 50%, #3d0a28 100%);
          background-size: 200% 200%;
          animation: gradientMove 10s ease infinite;
          border-radius: 22px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 12px 28px rgba(99, 3, 48, 0.2);
        }

        .cta-banner::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
          z-index: 1;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }

        .cta-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -10%;
          width: 50%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%);
          transform: rotate(-45deg);
          pointer-events: none;
          z-index: 1;
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 18px;
          padding: 22px 20px;
          position: relative;
          z-index: 2;
          box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .glass-panel-content {
          max-width: 420px;
          position: relative;
          z-index: 2;
          order: 2;
          transform: translateX(-26px);
        }

        .glass-panel-img-container {
          width: 240px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          perspective: 1000px;
          order: 1;
        }

        .glass-panel-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          margin-bottom: -24px;
          filter: drop-shadow(0 14px 24px rgba(0,0,0,0.3));
          transform: rotateY(-15deg) rotateX(10deg);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .cta-banner:hover .glass-panel-img {
          transform: rotateY(0deg) rotateX(0deg) scale(1.03) translateY(-6px);
          filter: drop-shadow(0 40px 70px rgba(0,0,0,0.5));
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

        .text-gradient {
          background: linear-gradient(135deg, var(--erp-primary) 0%, #aa0552 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Responsive Design */
        @media screen and (max-width: 992px) {
          .hero-section {
            padding-top: 120px;
            padding-bottom: 80px;
            min-height: auto;
          }
          /* Hero Section Mobile Fixes */
          .hero-flex {
            flex-direction: column !important;
            text-align: center;
          }
          .hero-content {
            width: 100% !important;
            margin-bottom: 60px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            padding: 0 15px;
          }
          .hero-content h1 {
            font-size: 42px !important;
            margin-bottom: 20px !important;
          }
          .hero-content p {
            margin-left: auto !important;
            margin-right: auto !important;
            font-size: 16px !important;
          }
          .hero-img-container {
            width: 100% !important;
            justify-content: center !important;
            margin-top: 20px;
          }
          .hero-img {
            width: 100% !important;
            margin: 0 !important;
            max-width: 500px !important;
            height: auto !important;
          }
          .hero-blob {
            width: 100%;
            height: 50%;
            top: auto;
            bottom: 0;
            border-bottom-left-radius: 0;
            border-top-left-radius: 50%;
            background: linear-gradient(180deg, rgba(99, 3, 48, 0.02) 0%, rgba(99, 3, 48, 0.05) 100%);
          }
          .hero-bg-accent {
            width: 300px;
            height: 300px;
          }
          
          /* Cards */
          .premium-card {
            flex-direction: column !important;
            gap: 40px !important;
            padding: 30px !important;
          }
          .premium-card > div {
            flex: auto !important;
            width: 100%;
          }
          
          /* Accordion Layout */
          .accordion-layout {
            flex-direction: column !important;
            gap: 30px !important;
          }
          .accordion-layout > div:first-child {
            position: relative !important;
            top: 0 !important;
            flex: auto !important;
            width: 100%;
            margin-bottom: 12px;
          }
          .accordion-layout h2 {
            font-size: 34px !important;
            line-height: 1.15 !important;
          }
          .accordion-layout p {
            font-size: 15px !important;
          }
          .accordion-layout .accordion-item {
            padding: 20px !important;
            border-radius: 14px !important;
          }
          .accordion-layout .accordion-item h3 {
            font-size: 19px !important;
          }
          
          /* Banner CTA Fixes */
          .glass-panel {
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: left !important;
            padding: 26px 22px !important;
            gap: 14px !important;
            border-radius: 20px !important;
          }
          .glass-panel-content {
            max-width: 100% !important;
            margin-left: 0 !important;
            transform: none !important;
            order: 1 !important;
          }
          .glass-panel h3 {
             font-size: 30px !important;
             line-height: 1.2 !important;
          }
          .glass-panel-img-container {
             width: 100% !important;
             justify-content: center !important;
             margin: 10px 0 0 0 !important;
             perspective: none !important;
             order: 2 !important;
          }
          .glass-panel-img {
            width: min(72vw, 300px) !important;
            height: auto !important;
            margin-bottom: -14px !important;
            transform: none !important;
            filter: drop-shadow(0 14px 24px rgba(0,0,0,0.28)) !important;
          }
             @media screen and (max-width: 576px) {
          .hero-content h1 {
            font-size: 38px !important;
          }
          .btn-group {
            flex-direction: column;
            width: 100%;
            gap: 14px !important;
          }
          .btn-group button {
            width: 100%;
          }
          .service-tab {
            width: 100%;
          }

          .cta-banner {
            border-radius: 20px !important;
          }
          .glass-panel {
            padding: 30px 20px !important;
            border-radius: 20px !important;
            gap: 14px !important;
            text-align: center !important;
          }
          .glass-panel h3 {
            font-size: 26px !important;
            margin-bottom: 12px !important;
          }
          .glass-panel p {
            font-size: 15px !important;
            max-width: 100% !important;
          }
          .glass-panel-img {
            width: min(85vw, 250px) !important;
            margin-bottom: -10px !important;
          }
          .premium-card {
             padding: 24px !important;
             border-radius: 20px !important;
          }
          .card-img-side {
             flex: auto !important;
             width: 100% !important;
          }
          .card-img-side div {
             height: 250px !important;
          }
        }
     }
      `}</style>

      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="hero-bg-accent accent-1"></div>
        <div className="hero-bg-accent accent-2"></div>
        <div className="hero-blob"></div>
        
        <div className="container hero-flex" style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '40px' }}>
 
          <div className="hero-content" style={{ width: '48%' }}>
            <span className="animate-fade-in-up" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: 'var(--erp-primary-light)', color: 'var(--erp-primary)', borderRadius: '100px', fontSize: '13.5px', fontWeight: 700, marginBottom: '24px', letterSpacing: '1px' }}>
              REVOLUSI DIGITAL & ERP
            </span>
            <h1 className="animate-fade-in-up delay-100" style={{
              fontSize: '64px',
              fontWeight: 900,
              color: 'var(--erp-dark)',
              lineHeight: 1.1,
              letterSpacing: '-2px',
              marginBottom: '24px'
            }}>
              Saatnya Bisnis<br />
              <span className="text-gradient">Anda Naik Level</span>
            </h1>
            <p className="animate-fade-in-up delay-200" style={{
              fontSize: '18px',
              color: '#5a6b82',
              lineHeight: 1.6,
              marginBottom: '42px',
              maxWidth: '520px',
              fontWeight: 400
            }}>
              Sederhanakan kompleksitas bisnis Anda dengan solusi Enterprise Resource Planning (ERP) mutakhir yang dirancang untuk skala dan efisiensi jangka panjang.
            </p>
            <div className="btn-group animate-fade-in-up delay-300" style={{ display: 'flex', gap: '18px' }}>
              <button
                className="btn-primary"
                onClick={() => featureSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                Mulai Eksplorasi Fitur
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button className="btn-outline" onClick={() => navigate('/contact')}>Dapatkan Solusi</button>
            </div>
          </div>
 
          <div className="hero-img-container animate-fade-in-up delay-400" style={{ width: '52%', display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
            {/* Decorative dots for hero image */}
            <div style={{ position: 'absolute', top: '10%', right: '10%', width: '80px', height: '80px', backgroundImage: 'radial-gradient(var(--erp-primary) 2px, transparent 2px)', backgroundSize: '15px 15px', opacity: 0.15, zIndex: -1 }}></div>
            
            <img
              src="/img/erp.png"
              alt="Platform ERP Kalako Dashboard"
              className="hero-img"
              style={{
                width: '130%',
                maxWidth: '950px',
                objectFit: 'contain',
                marginRight: '-32%',
                marginBottom: '-15%'
              }}
            />
          </div>
 
        </div>
      </section>

      {/* ── Capabilities Section ── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--erp-bg)', marginTop: '-84px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="animate-fade-in-up">
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--erp-primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Our Service</span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--erp-dark)', margin: '16px auto', maxWidth: '800px', lineHeight: 1.3 }}>
              Temukan solusi teknologi yang tepat untuk <br /> <span className="text-gradient">pertumbuhan bisnis Anda</span>
            </h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {Object.values(serviceData).map((service) => (
              <button
                key={service.key}
                className={`service-tab ${activeService === service.key ? 'active' : ''}`}
                onClick={() => setActiveService(service.key)}
              >
                {service.tabLabel}
              </button>
            ))}
          </div>
          <div className="premium-card animate-fade-in-up delay-300" style={{ display: 'flex', gap: '60px', alignItems: 'center', maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)' }}>
            <div className="card-img-side" style={{ flex: '0 0 340px' }}>
              <div style={{
                height: '380px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(99, 3, 48, 0.12)',
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--erp-primary)', opacity: 0.05, zIndex: 1 }}></div>
                <img src={activeCard.image} alt={activeCard.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
              </div>
            </div>

            <div className="card-content-side" style={{ flex: 1 }}>
              <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--erp-dark)', marginBottom: '18px', letterSpacing: '-0.5px' }}>{activeCard.title}</h3>
              <p style={{ fontSize: '16.5px', color: '#5a6b82', lineHeight: 1.7, marginBottom: '20px' }}>{activeCard.desc1}</p>
              <p style={{ fontSize: '16.5px', color: '#5a6b82', lineHeight: 1.7, marginBottom: '32px' }}>{activeCard.desc2}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
                {activeCard.points.map((point) => (
                  <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--erp-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="11" height="9" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="var(--erp-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--erp-dark)' }}>{point}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
                Pelajari Selengkapnya
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Enterprise Solutions (Accordion) ── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--erp-bg-alt)', marginTop: '-56px' }}>
        <div className="container accordion-layout" style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>

          <div style={{ flex: '0 0 380px', position: 'sticky', top: '120px' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '4px', backgroundColor: 'var(--erp-primary)', borderRadius: '2px', marginBottom: '24px' }}></span>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--erp-dark)', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-1px' }}>
              Solusi <span className="text-gradient">ERP</span><br />
            </h2>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7, marginBottom: '30px' }}>
              Fitur Solusi menyediakan layanan pengembangan website, sistem ERP, dan software khusus untuk membantu bisnis meningkatkan efisiensi dan produktivitas melalui sistem terintegrasi, modern, dan scalable.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/img/kalako_logo.png" style={{ height: '30px', filter: 'grayscale(100%) opacity(0.7)' }} alt="Partner" />
              </div>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {solutionItems.map((item) => {
              const isOpen = openSolution === item.key
              return (
                <div
                  key={item.key}
                  className={`accordion-item ${isOpen ? 'active' : ''}`}
                  onClick={() => setOpenSolution(isOpen ? '' : item.key)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: isOpen ? 800 : 700, color: isOpen ? 'var(--erp-primary)' : 'var(--erp-dark)', margin: 0 }}>
                      {item.title}
                    </h3>
                    <button className="accordion-btn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                  </div>

                  <div style={{
                    maxHeight: isOpen ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isOpen ? 1 : 0
                  }}>
                    <div style={{ paddingTop: '20px', marginTop: '20px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                      <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '20px' }}>{item.description}</p>
                      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                        {item.points.map((point) => (
                          <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <div style={{ marginTop: '5px', color: 'var(--erp-primary)' }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--erp-dark)' }}>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section >

      {/* ── CTA Banner ── */}
      <section style={{ padding: '0 24px', position: 'relative', top: '-60px', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="cta-banner">
            {/* Dekorasi Orb Latar Belakang */}
            <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)', filter: 'blur(24px)', zIndex: 1 }}></div>
            <div style={{ position: 'absolute', bottom: '-20%', left: '5%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)', filter: 'blur(16px)', zIndex: 1 }}></div>

            <div className="glass-panel">
              <div className="glass-panel-content">
                <span style={{
                  display: 'inline-block',
                  padding: '7px 16px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#ffffff',
                  borderRadius: '30px',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginBottom: '18px',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(5px)'
                }}>
                  Solusi Masa Depan Bisnis Anda
                </span>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: 900,
                  color: '#ffffff',
                  marginBottom: '10px',
                  lineHeight: 1.15,
                  letterSpacing: '-1.1px',
                  textShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                  Bawa Perusahaan Anda ke <span style={{ color: '#f2da00', textShadow: '0 0 20px rgba(242, 218, 0, 0.3)' }}>Level Tertinggi.</span>
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.92)',
                  marginBottom: '16px',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: '380px'
                }}>
                  Jangan biarkan sistem lama menghambat pertumbuhan. Konsultasikan transformasi digital Anda dengan tim ahli kami secara gratis hari ini.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                  <button style={{
                    backgroundColor: '#ffffff',
                    color: 'var(--erp-primary)',
                    padding: '11px 20px',
                    borderRadius: '50px',
                    fontSize: '13px',
                    fontWeight: 800,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.25)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)' }}
                    onClick={() => window.location.href = '/contact'}>
                    Jadwalkan Konsultasi Gratis
                  </button>
                  <Link to="/about" style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s'
                  }} onMouseEnter={e => e.currentTarget.style.transform = 'translateX(5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                    Pelajari Metode Kami
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </div>
              <div className="glass-panel-img-container">
                <img src="/img/konsultasi1.png" alt="Konsultan Akselerasi ERP" className="glass-panel-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Features Focus ── */}
      <section ref={featureSectionRef} className="section-padding" style={{ backgroundColor: '#ffffff', paddingTop: '60px' }}>
        <div className="container">

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '38px', fontWeight: 800, color: 'var(--erp-dark)', marginBottom: '16px' }}>Fitur & Menu Kalako Retail</h2>
            <p style={{ fontSize: '16px', color: '#666', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>Kami menyediakan berbagai Fitur yang mudah anda gunakan dalam mengelola sistem kasir</p>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
            {Object.values(featureData).map((feat) => (
              <button
                key={feat.key}
                className={`service-tab ${activeFeature === feat.key ? 'active' : ''}`}
                style={{ padding: '12px 26px', fontSize: '14px', borderRadius: '12px' }}
                onClick={() => setActiveFeature(feat.key)}
              >
                {feat.tabLabel}
              </button>
            ))}
          </div>

          <div className="premium-card animate-fade-in-up" style={{ display: 'flex', gap: '80px', alignItems: 'center', background: '#ffffff', border: '1px solid rgba(0,0,0,0.04)' }}>
            <div className="card-img-side" style={{ flex: '0 0 500px' }}>
              <div style={{ borderRadius: '24px', border: '1px solid rgba(0,0,0,0.06)', backgroundColor: '#ffffff', padding: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--erp-primary), #aa0552)' }}></div>
                <img src={activeFeatureCard.image} alt={activeFeatureCard.imageAlt} style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
              </div>
            </div>

            <div className="card-content-side" style={{ flex: 1 }}>
              <span style={{ display: 'inline-block', padding: '7px 15px', backgroundColor: 'rgba(99,3,48,0.06)', color: 'var(--erp-primary)', borderRadius: '30px', fontSize: '12.5px', fontWeight: 800, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.8px', border: '1px solid rgba(99,3,48,0.1)' }}>Modul {activeFeatureCard.tabLabel}</span>
              <h3 style={{ fontSize: '34px', fontWeight: 900, color: 'var(--erp-dark)', marginBottom: '20px', lineHeight: 1.2, letterSpacing: '-0.5px' }}>{activeFeatureCard.title}</h3>
              <p style={{ fontSize: '17px', color: '#5a6b82', lineHeight: 1.7, marginBottom: '36px' }}>{activeFeatureCard.desc1}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {activeFeatureCard.points.map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'linear-gradient(135deg, var(--erp-primary) 0%, #8b0a48 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(99,3,48,0.25)' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--erp-dark)', margin: 0 }}>{point}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home
