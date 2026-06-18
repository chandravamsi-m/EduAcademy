// EduAcademy Global JS

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRtl();
  initMobileMenu();
  initDropdowns();
  initDashboardTabs();
  initFaqAccordion();
});

// --- Theme Management (Light / Dark) ---
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  applyTheme(currentTheme);
  
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(activeTheme);
      localStorage.setItem('theme', activeTheme);
    });
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('dark');
  }
}

// --- RTL Management (Left-to-Right / Right-to-Left) ---
function initRtl() {
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  const currentDir = localStorage.getItem('direction') || 'ltr';
  
  applyDirection(currentDir);
  
  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeDir = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(activeDir);
      localStorage.setItem('direction', activeDir);
    });
  });
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  if (dir === 'rtl') {
    document.documentElement.classList.add('rtl-mode');
  } else {
    document.documentElement.classList.remove('rtl-mode');
  }
  
  // Update toggle button text dynamically
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggleBtns.forEach(btn => {
    btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  });
}

// --- Mobile Menu Toggle ---
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenu = document.getElementById('mobile-menu');
  
  function openMenu() {
    if (mobileMenu && mobileMenuOverlay) {
      mobileMenu.classList.remove('hidden');
      mobileMenuOverlay.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.remove('translate-x-full', 'rtl:-translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        mobileMenuOverlay.classList.remove('opacity-0');
        mobileMenuOverlay.classList.add('opacity-100');
      }, 10);
    }
  }

  function closeMenu() {
    if (mobileMenu && mobileMenuOverlay) {
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      mobileMenu.classList.remove('translate-x-0');
      if (isRtl) {
        mobileMenu.classList.add('rtl:-translate-x-full');
      } else {
        mobileMenu.classList.add('translate-x-full');
      }
      mobileMenuOverlay.classList.remove('opacity-100');
      mobileMenuOverlay.classList.add('opacity-0');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
        mobileMenuOverlay.classList.add('hidden');
      }, 300);
    }
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMenu);
  }
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMenu);
  }
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMenu);
  }
}

// Global mobile dropdown accordion handler
window.toggleMobileDropdown = function(id) {
  const dropdown = document.getElementById(id);
  const chevronId = id.replace('-dropdown', '-chevron');
  const chevron = document.getElementById(chevronId);
  if (dropdown) {
    dropdown.classList.toggle('hidden');
    if (chevron) {
      chevron.classList.toggle('rotate-180');
    }
  }
};

// --- Dropdowns (Profile, Notifications, etc.) ---
function initDropdowns() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = toggle.getAttribute('data-dropdown');
      const targetDropdown = document.getElementById(targetId);
      
      if (targetDropdown) {
        // Close other dropdowns first
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== targetDropdown) menu.classList.add('hidden');
        });
        targetDropdown.classList.toggle('hidden');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.add('hidden');
    });
  });
}

// --- Dashboard Sidebar Tab Switching ---
function initDashboardTabs() {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const dashboardSections = document.querySelectorAll('.dashboard-section');

  if (sidebarLinks.length > 0 && dashboardSections.length > 0) {
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetSectionId = link.getAttribute('data-section');
        if (!targetSectionId) return;

        e.preventDefault();

        // Update active class on sidebar items
        sidebarLinks.forEach(item => {
          item.classList.remove('bg-indigo-700', 'text-white', 'bg-indigo-50', 'text-indigo-600', 'dark:bg-slate-700', 'dark:text-white');
          // Add default styling back
          item.classList.add('text-gray-600', 'hover:bg-gray-100', 'dark:text-gray-300', 'dark:hover:bg-slate-800');
        });

        // Add active styling to clicked item
        link.classList.remove('text-gray-600', 'hover:bg-gray-100', 'dark:text-gray-300', 'dark:hover:bg-slate-800');
        // Check if inside dashboard (which could use blue/indigo theme)
        link.classList.add('bg-indigo-600', 'text-white');

        // Hide all sections
        dashboardSections.forEach(section => {
          section.classList.add('hidden');
        });

        // Show target section
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
          targetSection.classList.remove('hidden');
        }
      });
    });
  }
}

// --- Faq Accordion Logic ---
function initFaqAccordion() {
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const icon = header.querySelector('.faq-icon');
      
      if (body) {
        body.classList.toggle('hidden');
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      }
    });
  });
}
