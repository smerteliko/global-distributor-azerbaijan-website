<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/images/G.png"
          alt="Company Logo"
          height="60"
          class="d-inline-block me-2"
        />
        <span class="azerbaijan-flag-gradient-text d-none d-md-inline">
          GLOBAL DISTRIBUTOR AZƏRBAYCAN LLC
        </span>
        <span class="azerbaijan-flag-gradient-text d-md-none">GDA</span>
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
            <router-link class="nav-link" active-class="active" to="/#hero">
              {{ $t('header.home') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/#about">
              {{ $t('header.aboutUs') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/#services">
              {{ $t('header.services') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/#contact">
              {{ $t('header.contact') }}
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              id="navbarDropdownLang"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $i18n.locale.toUpperCase() }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownLang">
              <li v-for="locale in availableLocales" :key="locale">
                <a class="dropdown-item" href="#" @click.prevent="setLocale(locale)">
                  {{ locale.toUpperCase() }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        availableLocales: this.$i18n.availableLocales,
      };
    },
    methods: {
      setLocale(locale) {
        this.$i18n.locale = locale;
        localStorage.setItem('user-language', locale);
        // const navbarCollapse = document.getElementById('navbarNav');
        // const bsCollapse =
        //   bootstrap.Collapse.getInstance(navbarCollapse) ||
        //   new bootstrap.Collapse(navbarCollapse, { toggle: false });
        // if (navbarCollapse.classList.contains('show')) {
        //   bsCollapse.hide();
        // }
      },
    },
  };
</script>

<style scoped>
  .navbar {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #1a237e !important;
  }

  .navbar-brand {
    font-weight: bold;
  }

  .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.75);
    font-weight: 500;
    margin-left: 15px;
  }

  .navbar-brand .azerbaijan-flag-gradient-text {
    color: transparent;
    font-size: 1.1rem;
  }

  @media (max-width: 767.98px) {
    .navbar-brand .azerbaijan-flag-gradient-text.d-md-none {
      font-size: 1.3rem;
    }
  }

  .dropdown-menu {
    background-color: #1a237e;
    border: none;
    border-radius: 0;
  }

  .dropdown-item {
    color: rgba(255, 255, 255, 0.75);
    padding: 8px 16px;
  }

  .dropdown-item:hover,
  .dropdown-item:focus {
    background-color: #007bff;
    color: #fff;
  }
</style>
