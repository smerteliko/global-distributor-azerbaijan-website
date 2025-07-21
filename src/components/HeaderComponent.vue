<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/images/G.png"
          alt="Company Logo"
          height="50"
          class="d-inline-block me-2"
        />
        GLOBAL DISTRIBUTOR AZƏRBAYCAN LLC
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#hero">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>

<style scoped>
  .navbar {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #1a237e !important; /* Dark blue for Header */
  }

  .navbar-brand {
    font-weight: bold;
    font-size: 1.3rem;
    color: #fff !important;
  }

  .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.75);
    font-weight: 500;
    margin-left: 15px;
  }
</style>
