/**
 * Script Portofolio Nazwa Riskia Khairani
 * Pure Vanilla JavaScript (Tanpa Framework)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark Mode / Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle('active');
    if (navBackdrop) navBackdrop.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu() {
    navMenu.classList.remove('active');
    if (navBackdrop) navBackdrop.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
  if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);
  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  // 3. Sticky Navbar & Scroll Progress
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTop = document.getElementById('btn-back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / docHeight) * 100;

    if (scrollProgress) scrollProgress.style.width = `${scrollPercent}%`;

    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (correspondingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          correspondingLink.classList.add('active');
        } else {
          correspondingLink.classList.remove('active');
        }
      }
    });
  });

  // 5. Gallery Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const karyaCards = document.querySelectorAll('.karya-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      karyaCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Video / Karya Modal Preview
  const modal = document.getElementById('videoModal');
  const modalClose = document.getElementById('modalCloseBtn');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  function openModal(title, desc, ytId) {
    if (!modal) return;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    if (ytId) {
      modalVideoPlayer.innerHTML = `
        <iframe width="100%" height="340" src="https://www.youtube.com/embed/${ytId}?autoplay=1" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `;
    } else {
      modalVideoPlayer.innerHTML = `
        <div style="background:#0f172a; padding:60px 20px; text-align:center; color:#94a3b8; border-radius:12px;">
          <i class="fa-solid fa-book-open" style="font-size:3rem; color:#38bdf8; margin-bottom:12px;"></i>
          <p style="color:#fff; font-size:1.1rem; font-weight:600;">Dokumentasi & Naskah Publikasi</p>
          <p style="font-size:0.9rem;">Karya fisik & digital terbit resmi. Silakan hubungi via WhatsApp untuk informasi rilis.</p>
        </div>
      `;
    }
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (modalVideoPlayer) modalVideoPlayer.innerHTML = '';
    document.body.style.overflow = '';
  }

  karyaCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-video-title');
      const desc = card.getAttribute('data-video-desc');
      const ytId = card.getAttribute('data-video-yt');
      openModal(title, desc, ytId);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // 7. Copy Email Toast
  const copyButtons = document.querySelectorAll('.btn-copy');
  const toastBox = document.getElementById('toastBox');

  function showToast(message) {
    if (!toastBox) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>${message}</span>`;
    toastBox.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Email berhasil disalin: ${text}`);
        });
      } else {
        const temp = document.createElement('textarea');
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast(`Email berhasil disalin: ${text}`);
      }
    });
  });
});
