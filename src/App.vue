<template>
  <Header />
  <HeroSection id="hero" />
  <AboutUs id="about" />
  <Services id="services" />
  <ContactUs id="contact" />
  <Footer />
</template>

<script>
  import Footer from '@/components/FooterComponent.vue';
  import Services from '@/components/ServicesComponent.vue';
  import ContactUs from '@/components/ContactUsComponent.vue';
  import AboutUs from '@/components/AboutUsComponent.vue';
  import HeroSection from '@/components/HeroSectionComponent.vue';
  import Header from '@/components/HeaderComponent.vue';

  export default {
    name: 'App',
    components: {
      Header,
      HeroSection,
      AboutUs,
      ContactUs,
      Services,
      Footer,
    },
    data() {
      return {
        activeSection: 'hero',
        navigatingProgrammatically: false,
      };
    },
    watch: {
      // Опционально: можно использовать watch для активной секции
      // activeSection(newVal, oldVal) {
      //   console.log(`Active section changed from ${oldVal} to ${newVal}`);
      //   this.updateNavbarActiveLink();
      // }
    },
    mounted() {
      this.setupIntersectionObserver();
      this.setupSmoothScrolling(); // Сохраняем предыдущую логику плавного скролла
    },
    methods: {
      setupSmoothScrolling() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) {
          console.warn('Navbar element not found for scroll offset calculation.');
          return;
        }
        const navbarHeight = navbar.offsetHeight;

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          if (anchor.getAttribute('href').length === 1) {
            return;
          }

          anchor.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
              this.navigatingProgrammatically = true; // Устанавливаем флаг
              this.activeSection = targetId.substring(1); // Обновляем активную секцию сразу

              const offsetTop = targetElement.offsetTop - navbarHeight;

              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
              });

              // Сбрасываем флаг после завершения прокрутки (с задержкой)
              setTimeout(() => {
                this.navigatingProgrammatically = false;
              }, 1000); // Даем время для завершения анимации прокрутки
            }
          });
        });
      },
      setupIntersectionObserver() {
        const sections = document.querySelectorAll('section[id]');
        const options = {
          root: null, // Относительно viewport
          rootMargin: '-50% 0px -50% 0px', // Если центр секции в viewport, она считается активной
          threshold: 0, // Не важно, здесь важно rootMargin
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (this.navigatingProgrammatically) {
              return; // Игнорируем Intersection Observer, если прокрутка была инициирована JS
            }
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;
            }
          });
          this.updateNavbarActiveLink(); // Обновляем Navbar после каждого пересечения
        }, options);

        sections.forEach((section) => {
          observer.observe(section);
        });
      },
      updateNavbarActiveLink() {
        // Получаем все ссылки навигации
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        navLinks.forEach((link) => {
          const linkHref = link.getAttribute('href');
          if (linkHref && linkHref.substring(1) === this.activeSection) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      },
      // Метод, который будет вызываться из Header.vue, если ссылка была нажата напрямую в Navbar
      handleNavLinkClick(sectionId) {
        this.activeSection = sectionId;
        this.updateNavbarActiveLink();
      },
    },
  };
</script>

<style>
  body {
    font-family: 'Open Sans', sans-serif; /* Пример современного шрифта */
    color: #333;
  }

  .navbar-nav .nav-link.active {
    color: #fff !important;
    border-bottom: 2px solid #007bff;
    padding-bottom: 3px;
  }
</style>
