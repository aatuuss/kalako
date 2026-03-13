import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(t('Pesan Anda telah dikirim! Tim kami akan segera menghubungi Anda.', 'Your message has been sent! Our team will contact you shortly.'))
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        .contact-page {
          background-color: #ffffff;
          font-family: 'Inter', sans-serif;
          color: #000000;
          padding: 80px 0;
          overflow: hidden;
          position: relative;
        }

        .container-contact {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: start;
          position: relative;
          z-index: 2;
        }

        /* Left Column */
        .left-column h1 {
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 24px;
          color: #111;
        }

        .left-column .intro-text {
          font-size: 15px;
          line-height: 1.6;
          color: #333;
          margin-bottom: 30px;
          max-width: 500px;
        }

        /* Form Styling */
        .form-grid-ref {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group-ref {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group-ref.full-width {
          grid-column: span 2;
        }

        .form-group-ref label {
          font-size: 13px;
          font-weight: 500;
          color: #555;
        }

        .form-group-ref input, 
        .form-group-ref textarea {
          padding: 14px 18px;
          border: 1px solid #ddd;
          border-radius: 12px;
          font-size: 15px;
          background: #fff;
          transition: border-color 0.3s;
        }

        .form-group-ref input:focus, 
        .form-group-ref textarea:focus {
          outline: none;
          border-color: #630330;
        }

        .btn-kirim {
          background-color: #630330;
          color: white;
          padding: 12px 35px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
          margin-top: 10px;
        }

        .btn-kirim:hover {
          background-color: #4a0224;
        }

        /* The Office Section */
        .the-office {
          margin-top: 60px;
        }

        .the-office h2 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .office-info-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          margin-bottom: 20px;
          font-size: 15px;
          line-height: 1.6;
        }

        .office-info-item strong {
          color: #000;
        }

        .office-info-item span {
          color: #333;
        }

        /* Right Column */
        .right-column {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          min-height: 500px;
        }

        .right-column .greeting-text {
          align-self: flex-start;
          margin-bottom: 40px;
          padding-left: 20px;
          z-index: 5;
          margin-top: 240px;
        }

        .right-column h3 {
          font-size: 26px;
          font-weight: 600;
          color: #333;
          margin-bottom: 12px;
        }

        .right-column h2 {
          font-size: 38px;
          font-weight: 800;
          line-height: 1.2;
          color: #000;
        }

        .image-container-ref {
          position: absolute;
          bottom: -80px;
          right: -100px;
          width: 500px;
          display: flex;
          justify-content: flex-end;
          pointer-events: none;
        }

        .maroon-blob {
          position: absolute;
          bottom: 30px;
          right: 0px;
          width: 90%;
          height: 75%;
          background: #630330;
          border-radius: 50% 10% 20% 50% / 50% 10% 20% 50%;
          z-index: 1;
        }

        .contact-img-ref {
          position: relative;
          width: 85%;
          height: auto;
          z-index: 2;
          display: block;
        }

        /* Vector Decorations */
        .vector-dot-pattern {
          position: absolute;
          top: 40px;
          right: 40px;
          width: 150px;
          height: 150px;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 12px;
          opacity: 0.1;
          z-index: 0;
        }

        .vector-dot {
          width: 4px;
          height: 4px;
          background-color: #630330;
          border-radius: 50%;
        }

        .vector-circle {
          position: absolute;
          top: -150px;
          left: -150px;
          width: 500px;
          height: 500px;
          border: 1px solid rgba(99, 3, 48, 0.05);
          border-radius: 50%;
          z-index: 0;
        }

        /* Responsive */
        @media screen and (max-width: 992px) {
          .container-contact {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 0 24px;
          }
          .right-column {
            order: -1;
            text-align: center;
            min-height: auto;
          }
          .right-column .greeting-text {
            align-self: center;
            padding-left: 0;
            margin-top: 0;
          }
          .image-container-ref {
            position: relative;
            bottom: 0;
            right: 0;
            width: 100%;
            justify-content: center;
            margin-top: 20px;
          }
          .maroon-blob {
            width: 320px;
            height: 320px;
            right: 50%;
            transform: translateX(50%);
            bottom: 0;
          }
          .contact-img-ref {
            width: 300px;
          }
        }
      `}</style>

      <div className="contact-page">
        {/* Background Vectors */}
        <div className="vector-circle"></div>
        <div className="vector-dot-pattern">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="vector-dot"></div>
          ))}
        </div>

        <div className="container-contact">

          {/* Sisi Kiri: Form & Info */}
          <div className="left-column">
            <h1>{t('Hubungi Kami', 'Contact Us')}</h1>
            <p className="intro-text">
              {t('Hubungi kami untuk kasus apapun yang terhubung dengan perusahaan atau layanan kami. Kami akan secepatnya dan sebisa mungkin membantu Anda.', 'Contact us for anything related to our company or services. We will help you as quickly and as best as we can.')}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid-ref">
                <div className="form-group-ref">
                  <label>{t('Nama depan *', 'First name *')}</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group-ref">
                  <label>{t('Nama belakang *', 'Last name *')}</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group-ref">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group-ref">
                  <label>{t('Nomor Telepon', 'Phone Number')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group-ref full-width">
                  <label>Subject *</label>
                  <textarea name="subject" value={formData.subject} onChange={handleChange} rows="6" required></textarea>
                </div>
              </div>
              <button type="submit" className="btn-kirim">{t('Kirim', 'Send')}</button>
            </form>

            <div className="the-office">
              <h2>{t('Kantor Kami', 'The Office')}</h2>
              <div className="office-info-item">
                <strong>{t('Tempat', 'Address')}</strong>
                <span>Jl. Mayang No.08, Bunulrejo, Kec. Blimbing, Kota Malang, Jawa Timur 65123</span>
              </div>
              <div className="office-info-item">
                <strong>{t('Telp', 'Phone')}</strong>
                <span>+62-851-1710-1207</span>
              </div>
              <div className="office-info-item">
                <strong>Email</strong>
                <span>kalako.pro@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Visual */}
          <div className="right-column">
            <div className="greeting-text">
              <h3>{t('Hubungi Kami', 'Contact Us')}</h3>
              <h2>{t('Diskusikan kebutuhan bisnis Anda dengan kami', 'Discuss your business needs with us')}</h2>
            </div>

            <div className="image-container-ref">
              <div className="maroon-blob"></div>
              <img src="/img/contact1.png" alt="Kalako Contact Team" className="contact-img-ref" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact
