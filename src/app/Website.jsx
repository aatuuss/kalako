import React, { useEffect } from 'react';

const Website = () => {
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

				.website-build-card-primary,
				.website-build-card-secondary { transition: transform 0.28s ease, box-shadow 0.28s ease !important; }
				.website-build-card-primary:hover,
				.website-build-card-secondary:hover { transform: translateY(-6px) !important; box-shadow: 0 14px 36px rgba(0,0,0,0.12) !important; }
				.website-hero-button,
				.website-cta-button,
				.website-wa-button { transition: transform 0.2s ease, box-shadow 0.2s ease !important; }
				.website-hero-button:hover,
				.website-cta-button:hover,
				.website-wa-button:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 18px rgba(0,0,0,0.15) !important; }

				.website-page * {
					box-sizing: border-box;
				}

				@media (max-width: 1200px) {
					.website-build-inner,
					.website-services-inner,
					.website-cta-box {
						max-width: 100% !important;
					}

					.website-services-inner {
						gap: 48px !important;
					}

					.website-hero-image-wrap {
						left: 43% !important;
						width: 520px !important;
					}
				}

				@media (max-width: 992px) {
					.website-hero-section {
						min-height: auto !important;
					}

					.website-hero-inner {
						height: auto !important;
						min-height: 0 !important;
						padding: 32px 16px 24px !important;
						display: flex !important;
						flex-direction: column !important;
						gap: 20px !important;
					}

					.website-hero-maroon {
						height: 180px !important;
						width: 100% !important;
						top: auto !important;
						bottom: 0 !important;
					}

					.website-hero-content {
						position: relative !important;
						left: 0 !important;
						top: 0 !important;
						z-index: 3 !important;
					}

					.website-hero-title {
						font-size: 34px !important;
					}

					.website-hero-badge {
						position: relative !important;
						right: auto !important;
						top: auto !important;
						width: 230px !important;
						margin-left: auto !important;
					}

					.website-hero-image-wrap {
						position: relative !important;
						left: 0 !important;
						top: 0 !important;
						transform: none !important;
						width: 100% !important;
						height: 240px !important;
						max-width: 640px !important;
						margin: 0 auto !important;
					}

					.website-build-section {
						padding: 42px 16px !important;
					}

					.website-build-inner {
						margin-left: 0 !important;
					}

					.website-build-cards {
						flex-direction: column !important;
					}

					.website-build-card-primary,
					.website-build-card-secondary {
						width: 100% !important;
						flex: 1 1 auto !important;
					}

					.website-build-card-secondary {
						flex-direction: column !important;
					}

					.website-build-card-media {
						flex: 0 0 220px !important;
					}

					.website-build-card-content {
						padding: 28px 24px !important;
					}

					.website-services-section {
						padding: 48px 16px !important;
					}

					.website-services-inner {
						flex-direction: column !important;
						gap: 28px !important;
					}

					.website-services-media,
					.website-services-content {
						width: 100% !important;
						flex: 1 1 auto !important;
					}

					.website-services-content {
						padding-right: 0 !important;
						margin-top: 0 !important;
					}

					.website-cta-section {
						padding: 0 16px 56px !important;
					}

					.website-cta-box {
						padding: 28px 24px !important;
						flex-direction: column !important;
						gap: 20px !important;
					}

					.website-cta-visual {
						align-self: center !important;
						height: 230px !important;
					}
				}

				@media (max-width: 768px) {
					.website-hero-title {
						font-size: 28px !important;
						line-height: 1.25 !important;
					}

					.website-hero-button {
						width: 100%;
						justify-content: center;
					}

					.website-hero-badge {
						display: none !important;
					}

					.website-hero-image-wrap {
						height: 200px !important;
					}

					.website-section-title {
						font-size: 26px !important;
						line-height: 1.3 !important;
					}

					.website-section-desc,
					.website-services-list p {
						font-size: 15px !important;
						line-height: 1.55 !important;
					}

					.website-build-card-primary,
					.website-build-card-content {
						padding: 24px 18px !important;
					}

					.website-cta-title {
						font-size: 20px !important;
					}

					.website-cta-button {
						width: 100%;
						text-align: center;
					}

					.website-cta-visual {
						display: none !important;
					}
				}

				@media (max-width: 480px) {
					.website-hero-title {
						font-size: 24px !important;
					}

					.website-section-title {
						font-size: 22px !important;
					}

					.website-hero-inner,
					.website-build-section,
					.website-services-section,
					.website-cta-section {
						padding-left: 12px !important;
						padding-right: 12px !important;
					}
				}
			`}</style>
			<div className="website-page">
			<section
				className="website-hero-section"
				style={{
					width: '100%',
					minHeight: '546px',
					backgroundColor: '#ffffff',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'stretch',
				}}
			>
				<div
					className="website-hero-inner"
					style={{
						width: '100%',
						maxWidth: '100%',
						height: '546px',
						position: 'relative',
						overflow: 'hidden',
						backgroundColor: '#ffffff',
						borderBottom: '1px solid #d2d2d2',
						fontFamily: "'Poppins', sans-serif",
					}}
				>
					<div
						className="website-hero-maroon"
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							width: '36.5%',
							height: '100%',
							backgroundColor: '#6a0034',
						}}
					/>

					<div
					className="website-hero-content anim-el anim-up"
						style={{
							position: 'absolute',
							left: '32px',
							top: '196px',
							zIndex: 2,
							color: '#0f0f0f',
						}}
					>
						<h1
							className="website-hero-title"
							style={{
								margin: 0,
								fontSize: '45px',
								lineHeight: '1.30',
								fontWeight: 700,
								letterSpacing: '-0.7px',
							}}
						>
							Layanan Website
							<br />
							Moderen
							<br />
							Perusahaan Kami
						</h1>

						<button
							className="website-hero-button"
							type="button"
							onClick={() => {
								const el = document.getElementById('bangun-website-profesional');
								if (el) el.scrollIntoView({ behavior: 'smooth' });
							}}
							style={{
								marginTop: '30px',
								border: '2px solid #6a0a68',
								borderRadius: '10px',
								backgroundColor: '#f8f8f8',
								color: '#1a1a1a',
								fontSize: '15px',
								fontWeight: 500,
								lineHeight: 1,
								padding: '12px 16px 13px',
								display: 'flex',
								alignItems: 'center',
								gap: '10px',
								cursor: 'pointer',
							}}
						>
							<span>Lihat Selengkapnya</span>
							<span style={{ fontSize: '15px', lineHeight: 0.8 }}>{'>'}</span>
						</button>
					</div>

					<div
						className="website-hero-badge"
						style={{
							position: 'absolute',
							right: '30px',
							top: '70px',
							zIndex: 3,
							width: '236px',
							height: '84px',
							borderRadius: '22px',
							padding: '17px 14px 14px',
							background: 'rgba(255, 255, 255, 0.70)',
							color: '#ffffff',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							boxSizing: 'border-box',
						}}
					>
						<div
							style={{
								fontSize: '20px',
								lineHeight: 1.30,
								fontWeight: 600,
							}}
						>
							Layanan
							<br />
							Website Kami
						</div>
						<div
							style={{
								position: 'absolute',
								right: '11px',
								bottom: '40px',
								color: '#ffc72b',
								fontSize: '25px',
								letterSpacing: '1px',
								lineHeight: 1,
							}}
						>
							{'★★★★★'}
						</div>
					</div>

					<div
					className="website-hero-image-wrap anim-el anim-up anim-d2"
						style={{
							position: 'absolute',
						left: '43%',
							transform: 'translateX(-50%)',
							top: '50%',
							marginTop: '-140px',
							zIndex: 2,
							width: '600px',
							height: '280px',
							backgroundColor: '#ffffff',
							boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
						}}
					>
						<img
							src="/img/web-hero.png"
							alt="Website preview"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								objectPosition: 'center top',
							}}
						/>
					</div>
				</div>
			</section>

			{/* NEW SECTION: Bangun Website Profesional */}
			<section
				id="bangun-website-profesional"
				className="website-build-section"
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					padding: '60px 20px',
				}}
			>
				<div
					className="website-build-inner"
					style={{
						width: '100%',
						maxWidth: '1380px',
						marginLeft: '10px',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{/* Header Texts */}
					<div className="website-build-header anim-el anim-up" style={{ maxWidth: '1100px', marginBottom: '40px' }}>
						<h2
							className="website-section-title"
							style={{
								fontSize: '32px',
								fontWeight: 700,
								color: '#000000',
								marginBottom: '24px',
								lineHeight: '1.3',
								letterSpacing: '-0.5px'
							}}
						>
							Bangun Website Profesional untuk Meningkatkan<br />
							Branding
						</h2>
						<p
							className="website-section-desc"
							style={{
								fontSize: '18px',
								fontWeight: 400,
								color: '#1f1f1f',
								lineHeight: '1.6',
								margin: 0,
							}}
						>
							Website Development adalah layanan pembuatan website modern, responsif, dan teroptimasi SEO
							yang membantu membangun identitas digital, meningkatkan kredibilitas, menjangkau lebih
							banyak pelanggan, serta mendukung pertumbuhan bisnis secara berkelanjutan.
						</p>
					</div>

					{/* Cards Row */}
					<div
						className="website-build-cards"
						style={{
							display: 'flex',
							gap: '24px',
							width: '100%',
							alignItems: 'stretch',
						}}
					>
						{/* Card 1: Custom Website Development */}
						<div
						className="website-build-card-primary anim-el anim-up"
							style={{
								flex: '0 0 35%', // Lebar sekitar 1/3 lebih
								border: '1px solid #1f1f1f',
								borderRadius: '32px',
								padding: '36px',
								display: 'flex',
								flexDirection: 'column',
								backgroundColor: '#ffffff',
							}}
						>
							<h3
								style={{
									fontSize: '20px',
									fontWeight: 600,
									color: '#000000',
									margin: '0 0 16px',
								}}
							>
								Custom Website Development
							</h3>
							<p
								style={{
									fontSize: '16px',
									color: '#1a1a1a',
									lineHeight: '1.5',
									margin: '0 0 auto',
								}}
							>
								Konsultasikan kebutuhan Anda sekarang dan wujudkan website profesional yang
								siap meningkatkan kredibilitas serta pertumbuhan bisnis Anda.
							</p>

							<hr
								style={{
									border: 'none',
									borderTop: '1px solid #e0e0e0',
									margin: '24px 0',
									width: '100%',
								}}
							/>

							<p
								style={{
									fontSize: '14px',
									fontWeight: 600,
									color: '#000000',
									margin: '0 0 16px',
								}}
							>
								Mulai Konsultasi Gratis Dengan Tim Kami
							</p>

							<a
								className="website-wa-button"
								href="https://wa.me/6282334553192"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									alignSelf: 'flex-start',
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
									backgroundColor: '#4e6bf2',
									color: '#ffffff',
									border: 'none',
									borderRadius: '999px',
									padding: '12px 24px',
									fontSize: '15px',
									fontWeight: 600,
									cursor: 'pointer',
									textDecoration: 'none',
								}}
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.846.5 3.577 1.365 5.068L2 22l4.932-1.365A9.954 9.954 0 0012 22z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M10 11.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm4.5 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm4.5 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" fill="currentColor" />
								</svg>
								Kontak Kami
							</a>
						</div>

						{/* Card 2: Website Maintenance */}
						<div
						className="website-build-card-secondary anim-el anim-up anim-d2"
							style={{
								flex: '1',
								border: '1px solid #1f1f1f',
								borderRadius: '32px',
								display: 'flex',
								overflow: 'hidden',
								backgroundColor: '#ffffff',
							}}
						>
							<div
								className="website-build-card-media"
								style={{
									flex: '0 0 45%',
									position: 'relative',
								}}
							>
								<img
									src="/img/contact.png" // Gunakan dummy yang ada
									alt="Website Maintenance"
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: '100%',
										objectFit: 'cover',
									}}
								/>
							</div>

							<div
								className="website-build-card-content"
								style={{
									flex: '1',
									padding: '50px 40px',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<h3
									style={{
										fontSize: '24px',
										fontWeight: 600,
										color: '#000000',
										margin: '0 0 20px',
										lineHeight: '1.3',
									}}
								>
									Website Maintenance<br />
									dan Support
								</h3>
								<p
									style={{
										fontSize: '16px',
										color: '#1f1f1f',
										lineHeight: '1.6',
										margin: 0,
									}}
								>
									Layanan pemeliharaan, update fitur, optimasi performa, dan monitoring keamanan secara berkala untuk memastikan website tetap stabil, aman, dan selalu optimal digunakan.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* NEW SECTION: Layanan Kami */}
			<section
				className="website-services-section"
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					padding: '80px 0',
					backgroundColor: '#ffffff',
				}}
			>
				<div
					className="website-services-inner"
					style={{
						width: '100%',
						maxWidth: '1440px',
						display: 'flex',
						alignItems: 'center',
						gap: '80px', // Jarak antara blok gambar dan teks
					}}
				>
					{/* Sisi Kiri: Gambar dengan Aksen Maroon */}
					<div
					className="website-services-media anim-el anim-left"
						style={{
							flex: '1',
							display: 'flex',
							height: '460px',
						}}
					>
						<div
							style={{
								width: '100%',
								height: '100%',
								display: 'flex',
							}}
						>
							<img
								src="/img/layanan.png" // Gambar sementara (placeholder)
								alt="Layanan Kami"
								style={{
									flex: '1',
									height: '80%',
									objectFit: 'cover',
									objectPosition: 'left center',
								}}
							/>
							<div
								style={{
									width: '48px', // Aksen lebar solid maroon di sisi kanan gambar
									height: '80%',
									backgroundColor: '#630330', // Warna konsisten dengan tombol hero (merah marun gelap)
								}}
							/>
						</div>
					</div>

					{/* Sisi Kanan: Daftar Layanan */}
					<div
					className="website-services-content anim-el anim-right anim-d1"
						style={{
							flex: '1',
							paddingRight: '60px',
							marginTop: '-90px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<h2
							style={{
								fontSize: '32px',
								fontWeight: 700,
								color: '#000000',
								marginBottom: '36px',
								lineHeight: '1.2',
							}}
						>
							Layanan Kami
						</h2>

						<div className="website-services-list" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
							{/* Item 1 */}
							<div>
								<h3
									style={{
										fontSize: '18px',
										fontWeight: 500,
										color: '#000000',
										margin: '0 0 6px 0',
									}}
								>
									• Company Profile Website
								</h3>
								<p
									style={{
										fontSize: '17px',
										color: '#1a1a1a',
										lineHeight: '1.6',
										margin: 0,
									}}
								>
									Website profesional untuk menampilkan profil, visi, misi, layanan,
									dan portofolio perusahaan secara menarik.
								</p>
							</div>

							{/* Item 2 */}
							<div>
								<h3
									style={{
										fontSize: '18px',
										fontWeight: 500,
										color: '#000000',
										margin: '0 0 6px 0',
									}}
								>
									• Landing Page
								</h3>
								<p
									style={{
										fontSize: '17px',
										color: '#1a1a1a',
										lineHeight: '1.6',
										margin: 0,
									}}
								>
									Halaman website yang fokus pada konversi dengan desain
									menarik dan strategi digital marketing.
								</p>
							</div>

							{/* Item 3 */}
							<div>
								<h3
									style={{
										fontSize: '18px',
										fontWeight: 500,
										color: '#000000',
										margin: '0 0 6px 0',
									}}
								>
									• Web Application
								</h3>
								<p
									style={{
										fontSize: '17px',
										color: '#1a1a1a',
										lineHeight: '1.6',
										margin: 0,
									}}
								>
									Pengembangan aplikasi web custom seperti ERP, CRM,
									dashboard, dan sistem bisnis lainnya.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* NEW SECTION: Call To Action (Hubungi Kami) */}
			<section
				className="website-cta-section"
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					padding: '10px 20px 90px',
					backgroundColor: '#ffffff',
				}}
			>
				<div
					className="website-cta-box anim-el anim-up"
					style={{
						width: '100%',
						maxWidth: '1200px',
						position: 'relative',
						border: '2px solid #630330', // Warna border maroon
						borderRadius: '40px',
						display: 'flex',
						alignItems: 'stretch',
						padding: '40px 60px',
						gap: '40px',
						// Agar gambar bisa overflow dari kontainer, pastikan overflow disabled / kelihatan
					}}
				>
					{/* Sisi Kiri: Teks CTA dan Tombol */}
					<div
						className="website-cta-content"
						style={{
							flex: '1',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							paddingRight: '0',
							zIndex: 2,
						}}
					>
						<h2
							className="website-cta-title"
							style={{
								fontSize: '24px',
								fontWeight: 700,
								color: '#000000',
								margin: '0 0 32px 0',
								lineHeight: '1.4',
								width: '100%',
								maxWidth: 'none',
							}}
						>
							Hubungi kami sekarang dan mulai bangun website profesional yang
							dapat meningkatkan kredibilitas serta menarik lebih banyak pelanggan.
						</h2>

						<a
							className="website-cta-button"
							href="/contact"
							style={{
								alignSelf: 'flex-start',
								padding: '12px 32px',
								borderRadius: '999px',
								border: '1px solid #630330', // Border maroon
								backgroundColor: '#ffe8f3', // Warna background pink pastel
								color: '#630330', // Warna teks maroon gelap
								fontSize: '15px',
								fontWeight: 700,
								cursor: 'pointer',
								textTransform: 'uppercase',
								letterSpacing: '0.5px',
								textDecoration: 'none',
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							CONTACT US
						</a>
					</div>

					{/* Sisi Kanan: Ruang Lingkaran Maroon dan Gambar */}
					<div
						className="website-cta-visual"
						style={{
							flex: '0 0 320px',
							position: 'relative',
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center',
						}}
					>
						{/* Background Circle Maroon */}
						<div
							className="website-cta-circle"
							style={{
								position: 'absolute',
								right: '0',
								top: '50%',
								transform: 'translateY(-50%)',
								width: '220px', // Diperkecil agar masuk ke dalam card
								height: '220px',
								backgroundColor: '#5b0726',
								borderRadius: '50%',
								zIndex: 1,
							}}
						/>

						{/* Gambar Karakter (Wanita HP) */}
						<img
							className="website-cta-image"
							src="/img/dummy-contact.png" // Tolong diganti dengan gambar wanita aslinya jika ada
							alt="Customer Service / User"
							style={{
								position: 'absolute',
								right: '25px',
								top: '-8%', // Naikkan posisi gambar agar lebih ke atas
								width: '150px',
								height: '130%', // Sesuaikan agar pas di atas lingkaran
								objectFit: 'cover',
								objectPosition: 'center',
								zIndex: 2,
							}}
						/>
					</div>
				</div>
			</section>
			</div>
		</>
	);
};

export default Website;
