<template>
  <footer class="footer bg-dark text-white py-4">
    <div class="container text-center">
      <p class="mb-0">
        © {{ currentYear }} GLOBAL DISTRIBUTOR AZƏRBAYCAN LLC. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
</script>

<style scoped>
  .footer {
    background-color: #212529 !important; /* Dark gray */
    color: #f8f9fa;
    font-size: 0.9em;
  }

  .social-icons a {
    font-size: 1.25em;
    transition: color 0.3s ease;
  }

  .social-icons a:hover {
    color: #007bff;
  }

  .social-icons .fab {
    font-size: 1.25em;
  }
</style>
