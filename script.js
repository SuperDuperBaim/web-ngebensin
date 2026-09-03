/* ==========================================================================
   Ngebensin Interactive Logic
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Language Dictionary & Switching Logic ---
  const translations = {
    id: {
      "nav-features": "Fitur",
      "nav-preview": "Tampilan",
      "hero-badge": "APLIKASI PENCATAT BENSIN",
      "hero-title": "Catat setiap kali kamu isi bensin secara OFFLINE !",
      "hero-desc": "Ngebensin membantumu mencatat pengeluaran bensin, total liter, SPBU favorit, sampai riwayat pengisian semua dalam satu aplikasi yang simpel dan modern.",
      "btn-download": "Download Sekarang",
      "btn-features": "Lihat Fitur",
      "hero-subtext": "Android · Ringan · Tanpa ribet",
      "card-expense-label": "TOTAL PENGELUARAN",
      "card-liters-label": "TOTAL LITER",
      "preview-badge": "TAMPILAN APLIKASI",
      "preview-title": "Tampilan Aplikasi",
      "preview-desc": "Simpel dan Modern",
      "features-badge": "FITUR UNGGULAN",
      "features-title": "Semua yang kamu butuhkan, tanpa ribet.",
      "features-desc": "Didesain simpel dan cepat.",
      "feature-1-title": "Catat Pengisian",
      "feature-1-desc": "Satu ketukan untuk menambah catatan baru harga, liter, SPBU, dan tanggal disimpan otomatis.",
      "feature-2-title": "Total Pengeluaran & Liter",
      "feature-2-desc": "Ketahui seketika berapa banyak pengeluaran dan liter bensin yang telah kamu isi.",
      "feature-3-title": "Statistik SPBU & Bensin",
      "feature-3-desc": "Lihat SPBU mana yang paling sering kamu kunjungi dan jenis bensin apa yang paling sering kamu beli.",
      "feature-4-title": "Riwayat Pengisian",
      "feature-4-desc": "Setiap pengisian tercatat dengan rapi. Periksa kembali kapan saja, lengkap dengan semua rinciannya.",
      "feature-5-title": "Banyak Kendaraan",
      "feature-5-desc": "Punya lebih dari satu motor atau mobil? Simpan catatan terpisah untuk setiap kendaraan dengan mudah.",
      "feature-6-title": "Simpel dan Modern",
      "feature-6-desc": "Antarmuka bersih dengan warna-warna hangat yang nyaman di mata tanpa menu yang membingungkan.",
      "cta-title": "Mulai catat pengeluaran bensin kamu sekarang !!",
      "cta-desc": "Buat catatan pengeluaran bensin jadi lebih mudah !!",
      "cta-btn": "Unduh untuk Android",
      "cta-subtext": "Gratis · Android APK",
      "cta-status-pill": "File APK Terverifikasi Aman",
      "footer-dev-note": "Aplikasi ini masih dalam tahap pengembangan. Aku sangat menerima dan mengapresiasi kritik serta saran kamu!",
      "stat-visitors": "Pengunjung",
      "stat-downloads": "Download"
    },
    en: {
      "nav-features": "Features",
      "nav-preview": "Preview",
      "hero-badge": "FUEL LOG APP",
      "hero-title": "Track every fill-up, 100% OFFLINE!",
      "hero-desc": "Ngebensin helps you log your gas expenses, total liters, favorite gas stations, and your fill-up history all in one simple, modern app.",
      "btn-download": "Download Now",
      "btn-features": "View Features",
      "hero-subtext": "Android · Lightweight · Hassle-free",
      "card-expense-label": "TOTAL EXPENSES",
      "card-liters-label": "TOTAL LITERS",
      "preview-badge": "APP PREVIEW",
      "preview-title": "App Preview",
      "preview-desc": "Simple and Modern",
      "features-badge": "TOP FEATURES",
      "features-title": "Everything you need, zero hassle.",
      "features-desc": "Designed to be simple and fast.",
      "feature-1-title": "Log a Fill-Up",
      "feature-1-desc": "One tap to add a new record: price, liters, station, and date are saved automatically.",
      "feature-2-title": "Total Spending & Liters",
      "feature-2-desc": "Instantly know how much you've spent and how many liters of fuel you've filled.",
      "feature-3-title": "Station & Fuel Stats",
      "feature-3-desc": "See which stations you visit most and which fuel type you buy most often.",
      "feature-4-title": "Fill-Up History",
      "feature-4-desc": "Every fill-up neatly recorded. Check back anytime, complete with all the details.",
      "feature-5-title": "Multi-Vehicle",
      "feature-5-desc": "Got more than one bike or car? Keep separate records per vehicle with ease.",
      "feature-6-title": "Simple & Modern",
      "feature-6-desc": "A clean interface with warm, easy-on-the-eyes colors, no confusing menus.",
      "cta-title": "Start logging your fuel expenses now!",
      "cta-desc": "Make tracking your fuel expenses easier!",
      "cta-subtext": "Free · Android APK",
      "cta-status-pill": "Verified Safe APK File",
      "footer-dev-note": "This app is currently in active development. I warmly welcome your feedback, critiques, and suggestions!",
      "stat-visitors": "Visitors",
      "stat-downloads": "Downloads"
    },
  };

  const idBtn = document.getElementById('lang-id');
  const enBtn = document.getElementById('lang-en');
  const translatableElements = document.querySelectorAll('[data-translate]');

  function setLanguage(lang) {
    // 1. Toggle active button class
    if (lang === 'id') {
      idBtn.classList.add('active');
      enBtn.classList.remove('active');
      document.documentElement.setAttribute('lang', 'id');
      document.title = "Ngebensin - Catat setiap kali kamu isi bensin";
    } else {
      enBtn.classList.add('active');
      idBtn.classList.remove('active');
      document.documentElement.setAttribute('lang', 'en');
      document.title = "Ngebensin - Track every time you fill up";
    }

    // 2. Translate with smooth micro-fade animation
    translatableElements.forEach(element => {
      const translationKey = element.getAttribute('data-translate');
      if (translations[lang][translationKey]) {
        // Subtle fade transition out
        element.style.opacity = '0';
        element.style.transform = 'translateY(4px)';
        element.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        
        setTimeout(() => {
          element.textContent = translations[lang][translationKey];
          // Fade back in
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 200);
      }
    });

    // Save language selection to localStorage
    localStorage.setItem('ngebensin_lang', lang);
  }

  // Event Listeners for language switch
  idBtn.addEventListener('click', () => setLanguage('id'));
  enBtn.addEventListener('click', () => setLanguage('en'));

  // Initialize Language
  const savedLang = localStorage.getItem('ngebensin_lang') || 'id';
  setLanguage(savedLang);


  // --- 2. Dynamic Scroll Header Transition ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  // --- 3. Hardware-Accelerated Intersection Observer for Scroll Reveals ---
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once visible, stop tracking this element
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12, // triggers when 12% of element is in viewport
    rootMargin: '0px 0px -40px 0px' // offset bottom triggers slightly earlier for smooth flow
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  // --- 4. Smooth Scrolling to Nav Anchors ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Calculate offset for fixed header
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  // --- 5. Dynamic Footer Year Update ---
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // --- 6. Carousel Logic ---
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.querySelector('.carousel-btn-prev');
  const nextBtn = document.querySelector('.carousel-btn-next');
  let currentSlide = 0;
  let autoSlideInterval;

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => goToSlide(currentSlide + 1), 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  if (prevBtn && nextBtn && track) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
      startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
      startAutoSlide();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goToSlide(i);
        startAutoSlide();
      });
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    const viewport = document.querySelector('.carousel-viewport');

    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoSlide();
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
      }
      startAutoSlide();
    }, { passive: true });

    // Start auto-slide
    startAutoSlide();
  }
});
