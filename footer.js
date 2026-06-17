// ClearSound - Mobile Hearing Services Footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer"); //
  if (!footer) return; //

  footer.innerHTML = `
<footer class="w-full transition-colors duration-500 bg-slate-50 dark:bg-black border-t border-gray-200 dark:border-slate-800"> <!-- -->
  
  <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 grid gap-12 grid-cols-1 md:grid-cols-12"> <!--[cite: 2] -->

    <!-- Brand & Bio Section -->
    <div class="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8"> <!--[cite: 2] -->
    
               <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0"> <!--[cite: 2] -->
                    <div
                        class="w-11 h-11 rounded-xl bg-[#14b8a6] flex items-center justify-center shadow-lg shadow-[#14b8a6]/20">
                        <i class="fa-solid fa-ear-listen text-white text-lg"></i>
                    </div>
                    <div class="flex flex-col">
                        <span
                            class="text-xl font-black tracking-tight text-slate-900 dark:text-white transition-colors">
                            Clear<span class="text-[#14b8a6]">Sound</span>
                        </span>
                        <span
                            class="text-[9px] tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 font-bold leading-none mt-1">
                            Mobile Hearing Services
                        </span>
                    </div>
                </a>
                <br>
      <p class="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed mb-6"> <!--[cite: 2] -->
        We bring professional audiology services directly to your door. From comprehensive mobile hearing tests to expert hearing aid fittings and safe ear wax removal, experience better hearing in the comfort of your home.
      </p>
      
      <!-- Social Media Icons -->
      <div class="mt-8 flex gap-3"> <!--[cite: 2] -->
        <a href="#" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#14b8a6] hover:border-[#14b8a6] hover:text-white dark:hover:bg-[#14b8a6] dark:hover:text-white shadow-sm">
          <i class="fa-brands fa-facebook-f text-lg"></i>
        </a>
        <a href="#" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#14b8a6] hover:border-[#14b8a6] hover:text-white dark:hover:bg-[#14b8a6] dark:hover:text-white shadow-sm">
          <i class="fa-brands fa-instagram text-lg"></i>
        </a>
        <a href="tel:+1234567890" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#14b8a6] hover:border-[#14b8a6] hover:text-white dark:hover:bg-[#14b8a6] dark:hover:text-white shadow-sm">
          <i class="fa-solid fa-phone text-lg"></i>
        </a>
      </div>
    </div>

    <!-- Navigation Links -->
    <div class="md:col-span-4 lg:col-span-2"> <!--[cite: 2] -->
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#14b8a6]">Navigation</h3> <!--[cite: 2] -->
      <ul class="space-y-3 text-sm font-semibold"> <!--[cite: 2] -->
        <li><a href="about.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">About Us</a></li>
        <li><a href="services.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">All Services</a></li>
        <li><a href="book.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Book Appointment</a></li>
        <li><a href="contact.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Contact</a></li>
      </ul>
    </div>

    <!-- Services Links -->
    <div class="md:col-span-4 lg:col-span-2"> <!--[cite: 2] -->
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#14b8a6]">Services</h3> <!--[cite: 2] -->
      <ul class="space-y-3 text-sm font-semibold"> <!--[cite: 2] -->
        <li><a href="hearing-test.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Mobile Hearing Test</a></li>
        <li><a href="hearing-aids.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Hearing Aids</a></li>
        <li><a href="ear-wax.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Ear Wax Removal</a></li>
        <li><a href="corporate.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Follow-up Care</a></li>
      </ul>
    </div>

    <!-- Newsletter Section -->
    <div class="md:col-span-4 lg:col-span-4"> <!--[cite: 2] -->
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#14b8a6]">Hearing Health</h3> <!--[cite: 2] -->
      <p class="text-sm font-medium text-slate-600 dark:text-slate-400 mb-5 leading-relaxed"> <!--[cite: 2] -->
        Subscribe to receive updates on hearing health tips, new hearing aid technology, and exclusive mobile service offers directly to your inbox.
      </p>

      <form class="flex flex-col gap-3" id="newsletterForm"> <!--[cite: 2] -->
        <div class="relative">
          <input type="email" required placeholder="Enter your email address..." class="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-[#3b82f6] dark:focus:border-[#14b8a6] transition-all font-medium text-sm shadow-sm"> <!--[cite: 2] -->
        </div>
        <button type="submit" class="w-full py-3.5 rounded-xl font-bold text-sm bg-[#10b981] dark:bg-[#14b8a6] text-white dark:text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-black/5 dark:shadow-[#14b8a6]/10 flex items-center justify-center gap-2"> <!--[cite: 2] -->
          <span>Subscribe Now</span>
          <i class="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </form>
    </div>
  </div>

  <!-- Bottom Copyright Bar -->
  <div class="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-500"> <!--[cite: 2] -->
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.15em] font-bold text-slate-500 dark:text-slate-500"> <!--[cite: 2] -->
      
      <p>© ${new Date().getFullYear()} ClearSound Mobile Hearing Services. All rights reserved.</p> <!--[cite: 2] -->

      <div class="flex gap-6"> <!--[cite: 2] -->
        <a href="#" class="hover:text-[#3b82f6] dark:hover:text-[#14b8a6] transition-colors duration-300">Privacy Policy</a>
        <a href="#" class="hover:text-[#3b82f6] dark:hover:text-[#14b8a6] transition-colors duration-300">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT STYLES
  =============================== */
  const footerStyles = document.createElement('style'); //[cite: 2]
  footerStyles.textContent = `
    .footer-link:hover {
      color: #3b82f6 !important; /* Soft Blue */
      transform: translateX(6px);
    }
    
    .dark .footer-link:hover {
      color: #14b8a6 !important; /* Teal */
    }

    [dir="rtl"] .footer-link:hover {
      transform: translateX(-6px);
    }

    #newsletterForm input::placeholder {
      color: #94a3b8;
    }
    
    .dark #newsletterForm input::placeholder {
      color: #475569;
    }
  `;
  document.head.appendChild(footerStyles); //[cite: 2]

  // Form Logic
  const form = document.getElementById('newsletterForm'); //[cite: 2]
  if (form) { //[cite: 2]
    form.addEventListener('submit', (e) => { //[cite: 2]
      e.preventDefault(); //[cite: 2]
      alert('Success! You are now subscribed to Hearing Health updates. Keep an eye on your inbox.');
      form.reset(); //[cite: 2]
    });
  }
});