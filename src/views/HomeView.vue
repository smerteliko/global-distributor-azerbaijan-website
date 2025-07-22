<template>
  <HeroSection id="hero" />
  <AboutUs id="about" />
  <Services id="services" />
  <ContactUs id="contact" />
</template>

<script>
  import HeroSection from '@/components/HeroSectionComponent.vue';
  import AboutUs from '@/components/AboutUsComponent.vue';
  import Services from '@/components/ServicesComponent.vue';
  import ContactUs from '@/components/ContactUsComponent.vue';

  export default {
    name: 'HomeView',
    components: {
      HeroSection,
      AboutUs,
      Services,
      ContactUs,
    },
    data() {
      return {
        activeSection: 'hero',
      };
    },
    watch: {
      '$route.hash'(newHash) {
        if (newHash) {
          this.activeSection = newHash.substring(1);
          this.updateNavbarActiveLink();
        }
      },
    },
    mounted() {
      this.setupIntersectionObserver();
    },
    methods: {
      setupIntersectionObserver() {
        const sections = document.querySelectorAll('section[id]');
        const options = {
          root: null,
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;
              this.updateNavbarActiveLink();
            }
          });
        }, options);

        sections.forEach((section) => {
          observer.observe(section);
        });
      },
      updateNavbarActiveLink() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        navLinks.forEach((link) => {
          const linkHref = link.getAttribute('href');

          if (linkHref && linkHref.substring(linkHref.indexOf('#') + 1) === this.activeSection) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      },
    },
  };
</script>

<style scoped></style>
