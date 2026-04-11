// Nexus Studio | Scripts

    // Cached DOM references
    const header = document.getElementById("siteHeader");
    const menuButton = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
    const navLinks = navMenu.querySelectorAll("a");
    const revealTargets = document.querySelectorAll(".reveal, .reveal-card");

    // Update header style based on scroll position
    function updateHeaderOnScroll() {
      if (window.scrollY > 80) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Mobile menu toggle
    function toggleMenu() {
      const isOpen = navMenu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    }

    // Close menu helper
    function closeMenu() {
      navMenu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }

    // IntersectionObserver reveal animation for sections and cards
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.style.getPropertyValue("--delay");
            if (delay) {
              entry.target.style.transitionDelay = delay;
            }
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealTargets.forEach((item) => observer.observe(item));

    menuButton.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
    updateHeaderOnScroll();

    document.getElementById("year").textContent = new Date().getFullYear();