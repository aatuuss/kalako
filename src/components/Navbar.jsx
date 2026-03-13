import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServiceSubMenuOpen, setIsServiceSubMenuOpen] = useState(false)
  const location = useLocation()

  // Track scroll for sticky glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const links = [
    { name: 'home', label: 'Beranda', path: '/home' },
    { name: 'about', label: 'Tentang', path: '/about' },
    { 
      name: 'service', 
      label: 'Layanan', 
      path: '/service',
      isDropdown: true,
      subItems: [
        { label: 'Web & App Development', path: '/website', icon: '💻' },
        { label: 'Enterprise Resource Planning (ERP)', path: '/servicem', icon: '📊' },
        { label: 'Custom Software Development', path: '/cutsomweb', icon: '🚀' }
      ]
    },
    { name: 'contact', label: 'Kontak', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <style>{`
        @keyframes navSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95) translateY(-10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes linkEntrance {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .navbar-animate {
          animation: navSlideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .stagger-item {
          opacity: 0;
          animation: linkEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .nav-link {
          position: relative;
          color: #4a5568;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 8px 0;
          display: block;
        }

        .nav-link:hover {
          color: #630330;
          transform: translateY(-1px);
        }

        .nav-link.active {
          color: #630330;
          font-weight: 600;
        }

        .nav-indicator {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          height: 3px;
          background-color: #630330;
          border-radius: 4px;
          width: 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
        }

        .nav-link:hover .nav-indicator, .nav-link.active .nav-indicator {
          width: 24px;
          opacity: 1;
        }

        .mobile-menu-toggle {
          display: none;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-toggle:hover {
          border-color: #630330;
          background: #fdf2f7;
          transform: scale(1.05);
        }

        .mobile-menu-panel {
          display: none;
        }

        .mobile-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          color: #2d3748;
          font-size: 16px;
          font-weight: 600;
          padding: 16px 12px;
          border-bottom: 1px solid rgba(237, 242, 247, 0.5);
          transition: all 0.2s ease;
        }

        .mobile-link:active {
          background: #f7fafc;
        }

        .mobile-link.active {
          color: #630330;
        }

        @media screen and (max-width: 992px) {
          .nav-desktop,
          .nav-actions-desktop {
            display: none !important;
          }

          .mobile-menu-toggle {
            display: inline-flex;
          }

          .mobile-menu-panel {
            display: block;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            pointer-events: none;
            transform: translateY(-8px);
            transition: all 0.3s ease;
            border-top: 1px solid #edf2f7;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
          }

          .mobile-menu-panel.open {
            max-height: 550px;
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }
        }

        /* Desktop Dropdown Styles */
        .dropdown-container {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 15px);
          left: 50%;
          transform: translateX(-50%) translateY(15px);
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          min-width: 320px;
          border-radius: 20px;
          box-shadow: 0 25px 60px -15px rgba(0,0,0,0.12);
          padding: 15px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.8);
          z-index: 100;
        }

        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 16px;
          height: 16px;
          background: white;
          border-left: 1px solid rgba(0, 0, 0, 0.03);
          border-top: 1px solid rgba(0, 0, 0, 0.03);
          z-index: -1;
        }

        .dropdown-container:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 14px 18px;
          color: #4a5568;
          text-decoration: none;
          font-size: 14.5px;
          font-weight: 500;
          border-radius: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 5px;
        }

        .dropdown-item:last-child {
          margin-bottom: 0;
        }

        .dropdown-item:hover {
          background-color: #fcf5f9;
          color: #630330;
          transform: translateX(8px);
          box-shadow: 0 4px 12px rgba(99, 3, 48, 0.04);
        }

        .dropdown-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7fafc;
          border-radius: 10px;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .dropdown-item:hover .dropdown-icon {
          background: white;
          transform: scale(1.1) rotate(5deg);
        }

        .mobile-submenu {
          max-height: 0;
          overflow: hidden;
          background: rgba(248, 250, 252, 0.8);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 16px;
          margin: 0 12px;
        }

        .mobile-submenu.open {
          max-height: 500px;
          margin-top: 5px;
          margin-bottom: 12px;
          padding: 10px 0;
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.02);
        }

        .mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          color: #4a5568;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          border-bottom: 1px solid rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
        }

        .mobile-sub-link:hover {
          color: #630330;
          background: rgba(99, 3, 48, 0.02);
        }

        .mobile-sub-link:last-child {
          border-bottom: none;
        }
      `}</style>

      <nav
        className="navbar-animate"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 1000,
          width: '100%',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: isScrolled ? 'blur(25px) saturate(180%)' : 'blur(10px)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.08)' : '0 1px 0px rgba(0, 0, 0, 0.05)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: isScrolled ? '14px 4%' : '20px 4%',
            transition: 'padding 0.3s ease'
          }}
        >
          {/* Logo Section - Left */}
          <Link to="/home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/img/kalako_logo.png"
              alt="Kalako Logo"
              style={{
                height: isScrolled ? 36 : 46,
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: isScrolled ? 'brightness(1)' : 'brightness(1.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) rotate(-2deg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0)'
              }}
            />
          </Link>

          {/* Navigation Links - Center */}
          <ul className="nav-desktop" style={{
            display: 'flex',
            gap: '36px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}>
            {links.map((l, index) => {
              const active = isActive(l.path)

              if (l.isDropdown) {
                return (
                  <li 
                    key={l.name} 
                    className="dropdown-container stagger-item" 
                    style={{ 
                      position: 'relative',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div
                      className={`nav-link ${active ? 'active' : ''}`}
                      style={{ 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {l.label}
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="nav-indicator" style={{ width: active ? '20px' : '0', opacity: active ? 1 : 0 }} />
                    </div>
                    
                    <div className="dropdown-menu">
                      {l.subItems.map((sub, idx) => (
                        <Link key={idx} to={sub.path} className="dropdown-item">
                          <div className="dropdown-icon">{sub.icon}</div>
                          <span style={{ flex: 1 }}>{sub.label}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </li>
                )
              }

              return (
                <li 
                  key={l.name} 
                  className="stagger-item"
                  style={{ 
                    position: 'relative',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <Link
                    to={l.path}
                    className={`nav-link ${active ? 'active' : ''}`}
                  >
                    {l.label}
                    <div className="nav-indicator" style={{ width: active ? '20px' : '0', opacity: active ? 1 : 0 }} />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Action Section - Right */}
          <div className="nav-actions-desktop" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {/* Language Selector */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#4a5568',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '6px 12px',
                borderRadius: '8px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7fafc'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span style={{ fontSize: '16px' }}>🌐</span>
              <span>ID</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '2px' }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* CTA Button */}
            <Link to="/contact" className="stagger-item" style={{ textDecoration: 'none', animationDelay: '0.4s' }}>
              <button
                style={{
                  padding: '13px 32px',
                  background: 'linear-gradient(135deg, #630330 0%, #8b0a48 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 8px 25px rgba(99, 3, 48, 0.25)',
                  fontFamily: "'Inter', sans-serif",
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(99, 3, 48, 0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 3, 48, 0.25)'
                }}
              >
                Hubungi Kami
              </button>
            </Link>
          </div>

          <button
            className="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#630330" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
                : <><line x1="3" y1="7" x2="21" y2="7"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="17" x2="21" y2="17"></line></>}
            </svg>
          </button>
        </div>

        <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : ''}`}>
          <div style={{ padding: '6px 4%' }}>
            {links.map((l, index) => {
              const active = isActive(l.path)
              
              if (l.isDropdown) {
                return (
                  <div key={l.name} className="stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div 
                      className={`mobile-link ${active ? 'active' : ''}`}
                      onClick={() => setIsServiceSubMenuOpen(!isServiceSubMenuOpen)}
                    >
                      <span>{l.label}</span>
                      <span style={{ 
                        fontSize: '16px', 
                        transform: isServiceSubMenuOpen ? 'rotate(90deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease'
                      }}>›</span>
                    </div>
                    <div className={`mobile-submenu ${isServiceSubMenuOpen ? 'open' : ''}`}>
                      {l.subItems.map((sub, idx) => (
                        <Link 
                          key={idx} 
                          to={sub.path} 
                          className="mobile-sub-link"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsServiceSubMenuOpen(false)
                          }}
                        >
                          <span style={{ fontSize: '18px' }}>{sub.icon}</span>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={l.name}
                  to={l.path}
                  className={`mobile-link ${active ? 'active' : ''} stagger-item`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{l.label}</span>
                  <span style={{ fontSize: '16px' }}>›</span>
                </Link>
              )
            })}

            <div className="stagger-item" style={{ padding: '14px 4px 18px 4px', animationDelay: '0.4s' }}>
              <Link to="/contact" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    backgroundColor: '#630330',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Hubungi Kami
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
