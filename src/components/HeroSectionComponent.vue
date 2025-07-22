<template>
  <section
    id="hero"
    class="hero-section text-white d-flex align-items-center justify-content-center text-center"
  >
    <div class="container container-fluid">
      <h1 class="display-4 mb-3 azerbaijan-flag-gradient-text">{{ $t('hero.title') }}</h1>
      <p class="lead mb-4">
        {{ $t('hero.subtitle') }}
      </p>
      <router-link to="/#services" class="btn btn-primary btn-lg custom-btn">
        {{ $t('hero.button') }}
      </router-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HeroSection',
  };
</script>

<style scoped>
  .hero-section {
    background:
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('~@/assets/images/hero-bg.jpg') no-repeat center center;
    background-size: cover;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .hero-section .container-fluid {
    position: relative;
    z-index: 2;
  }

  .hero-section h1 {
    font-weight: 700;
    font-size: 3.5rem;
  }

  .hero-section .azerbaijan-flag-gradient-text {
    color: transparent;
  }

  .hero-section p {
    font-size: 1.5rem;
    color: #e0e0e0;
  }

  .custom-btn {
    background-color: #007bff;
    border-color: #007bff;
    transition: background-color 0.3s ease;
  }

  .custom-btn:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  @media (max-width: 768px) {
    .hero-section h1 {
      font-size: 2.5rem;
    }
    .hero-section p {
      font-size: 1.2rem;
    }
  }
</style>
