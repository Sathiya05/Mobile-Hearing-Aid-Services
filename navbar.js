// ClearSound - Hearing Services Navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  // Insert the HTML structure
  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-[100] transition-colors duration-500">
  <div class="relative z-[70] bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-sm">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-20 md:h-24 gap-8">

        <!-- Logo Section -->
        <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0">
            <div class="w-11 h-11 rounded-xl bg-[#14b8a6] flex items-center justify-center shadow-lg shadow-[#14b8a6]/20">
                <i class="fa-solid fa-ear-listen text-white text-lg"></i>
            </div>
            <div class="flex flex-col">
                <span class="text-xl font-black tracking-tight text-slate-800 dark:text-white transition-colors">
                    Clear<span class="text-[#14b8a6]">Sound</span>
                </span>
                <span class="text-[9px] tracking-[0.15em] uppercase text-slate-500 dark:text-slate-400 font-bold leading-none mt-1">
                     Hearing Services
                </span>
            </div>
        </a>

        <!-- Desktop Navigation -->
        <div id="desktopNav" class="hidden xl:flex items-center justify-center gap-4 text-[15px] font-semibold flex-1">
          <!-- Home Dropdown -->
          <div class="relative group/home">
            <button id="homeBtn" class="nav-link flex items-center space-x-1 px-3 py-2 transition-all duration-300 text-slate-700 dark:text-slate-200">
              <span>Home</span>
              <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover/home:rotate-180 text-slate-400"></i>
            </button>
            <div id="homeMenu" class="hidden absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-xl rounded-xl py-2 z-50 border border-gray-100 dark:border-slate-700">
              <a href="index.html" class="dropdown-link block px-5 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-[#14b8a6]">Home 1</a>
              <a href="home2.html" class="dropdown-link block px-5 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-[#14b8a6]">Home 2</a>
            </div>
          </div>

          <a href="about.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">About</a>

         
          <a href="services.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">Services</a>

          <a href="hearing-aids.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">Hearing Aids</a>
          <a href="resources.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">Resources</a>
          <a href="contact.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">Contact</a>

          <!-- Dashboard Dropdown -->
          <div class="relative group/dashboard">
            <button id="dashboardBtn" class="nav-link flex items-center space-x-1 px-3 py-2 transition-all duration-300 text-slate-700 dark:text-slate-200">
              <span>Dashboard</span>
              <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover/dashboard:rotate-180 text-slate-400"></i>
            </button>
            <div id="dashboardMenu" class="hidden absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-xl rounded-xl py-2 z-50 border border-gray-100 dark:border-slate-700">
              <a href="user.html" class="dropdown-link block px-5 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-[#14b8a6]">User</a>
              <a href="admin.html" class="dropdown-link block px-5 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-[#14b8a6]">Admin</a>
            </div>
          </div>
        </div>

        <!-- Desktop Action Buttons -->
        <div class="relative z-[60] hidden xl:flex items-center gap-4 shrink-0">
          <div class="flex items-center gap-2">
            <!-- RTL Toggle -->
            <button id="rtlToggle" class="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:border-[#14b8a6] hover:text-[#14b8a6] dark:hover:text-[#14b8a6] transition-all" title="Toggle RTL">
              <i class="fa-solid fa-arrow-right-arrow-left"></i>
            </button>
            <!-- Theme Toggle -->
            <button id="darkToggle" class="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:border-[#14b8a6] hover:text-[#14b8a6] dark:hover:text-[#14b8a6] transition-all">
              <i id="darkIcon" class="fa-solid fa-moon"></i>
            </button>
          </div>
          <div class="flex items-center gap-3 ml-2">
              <a href="login.html" class="flex items-center justify-center px-5 py-2.5 rounded-xl border-2 border-[#3b82f6] text-[#3b82f6] font-bold text-sm bg-transparent hover:bg-[#3b82f6] hover:text-white transition-all duration-300 gap-2">
                  <i class="fa-solid fa-arrow-right-to-bracket"></i> Login
              </a>
              <a href="signup.html" class="flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#10b981] text-white font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#10b981]/20">Sign Up</a>
          </div>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="relative z-[60] xl:hidden flex items-center h-full">
          <button id="mobileBtn" class="w-10 h-10 flex items-center justify-center text-slate-900 dark:text-white focus:outline-none">
            <i id="mobileIcon" class="fa-solid fa-bars-staggered text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Menu Sidebar -->
  <div id="mobileMenu" class="fixed top-0 left-0 w-full h-[100dvh] bg-white dark:bg-slate-900 z-[50] flex-col px-6 pt-28 pb-20 xl:hidden hidden overflow-y-auto">
    <div id="mobileNavLinks" class="flex flex-col gap-2 text-sm font-bold">
      
      <!-- Mobile Home Dropdown -->
      <div class="w-full border-b border-slate-100 dark:border-slate-800">
        <button id="mobileHomeBtn" class="flex items-center justify-between w-full py-4 text-slate-900 dark:text-white">
          <span>Home</span>
          <i id="mobileHomeIcon" class="fa-solid fa-chevron-down text-sm transition-transform duration-300"></i>
        </button>
        <div id="mobileHomeMenu" class="hidden flex-col bg-slate-50 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden">
          <a href="index.html" class="mobile-sublink block px-6 py-4 text-base text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">Home 1</a>
          <a href="home2.html" class="mobile-sublink block px-6 py-4 text-base text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">Home 2</a>
        </div>
      </div>

      <a href="about.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">About</a>

      <!-- Mobile Services Dropdown -->
    
      <a href="services.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">Services</a>

      <a href="hearing-aids.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">Hearing Aids</a>
      <a href="resources.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">Resources</a>
      <a href="contact.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">Contact</a>

      <!-- Mobile Dashboard Dropdown -->
      <div class="w-full border-b border-slate-100 dark:border-slate-800">
        <button id="mobileDashboardBtn" class="flex items-center justify-between w-full py-4 text-slate-900 dark:text-white">
          <span>Dashboard</span>
          <i id="mobileDashboardIcon" class="fa-solid fa-chevron-down text-sm transition-transform duration-300"></i>
        </button>
        <div id="mobileDashboardMenu" class="hidden flex-col bg-slate-50 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden">
          <a href="user.html" class="mobile-sublink block px-6 py-4 text-base text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">User</a>
          <a href="admin.html" class="mobile-sublink block px-6 py-4 text-base text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">Admin</a>
        </div>
      </div>
    </div>

    <!-- Mobile Action Buttons -->
    <div class="btns mt-auto pt-8 flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <button id="mobileRtlToggle" class="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-600 dark:text-slate-300 hover:border-[#14b8a6] transition-all">
          <i class="fa-solid fa-arrow-right-arrow-left"></i> Toggle RTL
        </button>
        <button id="mobileDarkToggle" class="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-600 dark:text-slate-300 hover:border-[#14b8a6] transition-all">
          <i id="mobileDarkIcon" class="fa-solid fa-moon"></i> Toggle Theme
        </button>
      </div>
      <div class="flex flex-col gap-3">
        <a href="login.html" class="w-full py-4 flex items-center justify-center gap-2 rounded-xl bg-transparent border-2 border-[#3b82f6] text-[#3b82f6] font-bold text-sm shadow-sm hover:bg-[#3b82f6] hover:text-white transition-all"><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</a>
        <a href="signup.html" class="w-full py-4 flex items-center justify-center rounded-xl bg-[#10b981] text-white font-bold text-sm shadow-lg shadow-[#10b981]/20">Sign Up</a>
      </div>
    </div>
  </div>
</nav>
`;

  /* CSS STYLES INJECTION */
  const style = document.createElement('style');
  style.textContent = `
    .nav-link { position: relative; transition: color 0.3s ease; }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 3px;
      border-radius: 4px;
      background: #14b8a6; /* Teal */
      transition: width 0.3s ease;
      box-shadow: 0 0 10px rgba(20, 184, 166, 0.4);
    }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }
    
    .nav-link.active, .dropdown-link.active { color: #14b8a6 !important; }
    .dark .nav-link.active, .dark .dropdown-link.active { color: #14b8a6 !important; }

    .mobile-link.active, .mobile-sublink.active, #mobileHomeBtn.active, #mobileServicesBtn.active, #mobileDashboardBtn.active { 
      color: #14b8a6 !important; 
    }
    .dark .mobile-link.active, .dark .mobile-sublink.active, .dark #mobileHomeBtn.active, .dark #mobileServicesBtn.active, .dark #mobileDashboardBtn.active {
      color: #14b8a6 !important;
    }
    @media (max-width: 1280px) {
  #desktopNav {
    font-size: 13px;
    gap: 8px;
  }
}
    
    /* Guarantee display toggling works for mobile menu */
    #mobileMenu.hidden { display: none !important; }
    #mobileMenu:not(.hidden) { display: flex !important; }
    body.menu-open { overflow: hidden !important; }
  `;
  document.head.appendChild(style);

  /* INTERACTION & HIGHLIGHT LOGIC */
  const homeBtn = document.getElementById("homeBtn");
  const homeMenu = document.getElementById("homeMenu");

  const servicesBtn = document.getElementById("servicesBtn");
  const servicesMenu = document.getElementById("servicesMenu");

  const dashboardBtn = document.getElementById("dashboardBtn");
  const dashboardMenu = document.getElementById("dashboardMenu");

  const mobileBtn = document.getElementById("mobileBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileIcon = document.getElementById("mobileIcon");
  
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");

  const mobileServicesBtn = document.getElementById("mobileServicesBtn");
  const mobileServicesMenu = document.getElementById("mobileServicesMenu");
  const mobileServicesIcon = document.getElementById("mobileServicesIcon");

  const mobileDashboardBtn = document.getElementById("mobileDashboardBtn");
  const mobileDashboardMenu = document.getElementById("mobileDashboardMenu");
  const mobileDashboardIcon = document.getElementById("mobileDashboardIcon");

  // Highlight Current Page Logic
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link, .dropdown-link, .mobile-sublink');

  allNavLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');

      const parentDropdowns = [
        { menu: homeMenu, btn: homeBtn },
        { menu: servicesMenu, btn: servicesBtn },
        { menu: dashboardMenu, btn: dashboardBtn }
      ];

      parentDropdowns.forEach(({ menu, btn }) => {
        if (menu && menu.contains(link)) {
          btn?.classList.add('active');
        }
      });

      const mobileDropdowns = [
        { menu: mobileHomeMenu, btn: mobileHomeBtn, icon: mobileHomeIcon },
        { menu: mobileServicesMenu, btn: mobileServicesBtn, icon: mobileServicesIcon },
        { menu: mobileDashboardMenu, btn: mobileDashboardBtn, icon: mobileDashboardIcon }
      ];

      mobileDropdowns.forEach(({ menu, btn, icon }) => {
        if (menu && menu.contains(link)) {
          btn?.classList.add('active');
          menu?.classList.remove('hidden');
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    }
  });

  // Desktop Dropdown Toggles
  homeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    servicesMenu?.classList.add("hidden");
    dashboardMenu?.classList.add("hidden");
    homeMenu?.classList.toggle("hidden");
  });

  servicesBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    homeMenu?.classList.add("hidden");
    dashboardMenu?.classList.add("hidden");
    servicesMenu?.classList.toggle("hidden");
  });

  dashboardBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    homeMenu?.classList.add("hidden");
    servicesMenu?.classList.add("hidden");
    dashboardMenu?.classList.toggle("hidden");
  });

  // Mobile Submenu Toggles
  mobileHomeBtn?.addEventListener("click", () => {
    const isHidden = mobileHomeMenu.classList.toggle("hidden");
    mobileHomeIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
  });

  mobileServicesBtn?.addEventListener("click", () => {
    const isHidden = mobileServicesMenu.classList.toggle("hidden");
    mobileServicesIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
  });

  mobileDashboardBtn?.addEventListener("click", () => {
    const isHidden = mobileDashboardMenu.classList.toggle("hidden");
    mobileDashboardIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
  });

  // Mobile Menu Toggle
  mobileBtn.onclick = () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("menu-open");
    mobileIcon.className = isHidden ? "fa-solid fa-bars-staggered text-2xl" : "fa-solid fa-xmark text-2xl";
  };

  // Close menus on click outside
  document.addEventListener("click", () => { 
      homeMenu?.classList.add("hidden");
      servicesMenu?.classList.add("hidden");
      dashboardMenu?.classList.add("hidden");
  });

  // Theme Logic
  const themeToggles = [document.getElementById("darkToggle"), document.getElementById("mobileDarkToggle")];

  const updateIcons = (isDark) => {
    const iconClass = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    if (document.getElementById("darkIcon")) document.getElementById("darkIcon").className = iconClass;
    if (document.getElementById("mobileDarkIcon")) document.getElementById("mobileDarkIcon").className = iconClass;
  };

  themeToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("clearsound-theme", isDark ? "dark" : "light");
    updateIcons(isDark);
  }));

  // RTL Toggle Logic
  const rtlToggles = [document.getElementById("rtlToggle"), document.getElementById("mobileRtlToggle")];

  rtlToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isRtl = document.documentElement.getAttribute("dir") === "rtl";
    document.documentElement.setAttribute("dir", isRtl ? "ltr" : "rtl");
    localStorage.setItem("clearsound-rtl", isRtl ? "ltr" : "rtl");
  }));

  // Check saved theme preference on load
  if (localStorage.getItem("clearsound-theme") === "dark") {
    document.documentElement.classList.add("dark");
    updateIcons(true);
  }

  // Check saved RTL preference on load
  if (localStorage.getItem("clearsound-rtl") === "rtl") {
    document.documentElement.setAttribute("dir", "rtl");
  }
});
