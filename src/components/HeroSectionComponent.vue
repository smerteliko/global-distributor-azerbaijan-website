<template>
  <section
    id="hero"
    class="hero-section text-white d-flex align-items-center justify-content-center text-center"
  >
    <div class="container">
      <h1 class="display-4 mb-3">GLOBAL DISTRIBUTOR AZƏRBAYCAN LLC</h1>
      <p class="lead mb-4">
        Your Gateway to Global Markets: Comprehensive Distribution and Strategic Solutions.
      </p>
      <a href="#services" class="btn btn-primary btn-lg custom-btn">Explore Our Solutions</a>
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
    height: 60vh; /* Высота для секции */
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

  .hero-section .container {
    position: relative;
    z-index: 2;
  }

  .hero-section h1 {
    font-weight: 700;
    font-size: 3.5rem;
    color: #fff;
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
