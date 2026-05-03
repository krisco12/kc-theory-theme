/**
 * ============================================================
 * THE KC THEORY — Shared Brand JavaScript
 * ============================================================
 * Handles:
 *   1. Sticky nav scroll state
 *   2. Mobile hamburger menu toggle
 *   3. Smooth scroll for anchor links
 *   4. Scroll progress indicator
 *   5. Intersection Observer reveal animations
 *   6. Hero parallax background
 * ============================================================
 */

(function () {
  'use strict';

  /* ── 1. Sticky Nav ──────────────────────────────────────── */
  const nav = document.querySelector('.kc-nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 60) {
        nav.classList.add('kc-nav--scrolled');
      } else {
        nav.classList.remove('kc-nav--scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ── 2. Mobile Hamburger ────────────────────────────────── */
  const hamburger = document.querySelector('.kc-nav__hamburger');
  const mobileMenu = document.querySelector('.kc-nav__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen.toString());
      // Animate spans into X
      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  /* ── 3. Smooth Scroll for Anchor Links ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 4. Scroll Progress Indicator ──────────────────────── */
  const progressFill = document.querySelector('.kc-scroll-progress__fill');
  if (progressFill) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressFill.style.height = progress + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ── 5. Intersection Observer Reveal ───────────────────── */
  const revealEls = document.querySelectorAll('.kc-reveal');
  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '-80px 0px', threshold: 0.1 }
    );
    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ── 6. Hero Parallax ───────────────────────────────────── */
  const heroBg = document.querySelector('.kc-hero__parallax-bg');
  if (heroBg) {
    const onHeroScroll = () => {
      const scrollY = window.scrollY;
      heroBg.style.transform = 'translateY(' + (scrollY * 0.35) + 'px)';
    };
    window.addEventListener('scroll', onHeroScroll, { passive: true });
  }

  /* ── 7. Scroll-down chevron bounce ─────────────────────── */
  const scrollChevron = document.querySelector('.kc-hero__scroll-indicator');
  if (scrollChevron) {
    scrollChevron.addEventListener('click', () => {
      const target = document.getElementById('about') || document.getElementById('offerings');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

})();
