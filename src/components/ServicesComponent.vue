<template>
  <section id="services" class="services-section py-5">
    <div class="container container-fluid">
      <h2 class="section-title text-center mb-5">{{ $t('services.title') }}</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="(service, index) in servicesList" :key="`service-${index}`" class="col">
          <div class="card h-100 shadow-sm service-card">
            <div class="card-body">
              <h5 class="card-title text-primary">
                {{ service.title }}
              </h5>
              <div class="card-text-wrapper">
                <p class="card-text">{{ service.text }}</p>
              </div>
              <img :src="service.image" :alt="service.title" class="service-image mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Services',
    data() {
      return {
        servicesList: [],
      };
    },
    watch: {
      '$i18n.locale': {
        handler() {
          this.populateServicesList();
        },
      },
    },
    mounted() {
      this.populateServicesList();
    },
    methods: {
      populateServicesList() {
        this.servicesList = [
          {
            title: this.$t('services.list.globalSourcing.title'),
            text: this.$t('services.list.globalSourcing.text'),
            image: require('@/assets/images/services/global-sourcing-distribution.png'),
          },
          {
            title: this.$t('services.list.marketEntry.title'),
            text: this.$t('services.list.marketEntry.text'),
            image: require('@/assets/images/services/strategic-market-entry.png'),
          },
          {
            title: this.$t('services.list.supplyChain.title'),
            text: this.$t('services.list.supplyChain.text'),
            image: require('@/assets/images/services/supply-chain-optimization.png'),
          },
          {
            title: this.$t('services.list.itConsulting.title'),
            text: this.$t('services.list.itConsulting.text'),
            image: require('@/assets/images/services/it-consulting-solutions.png'),
          },
          {
            title: this.$t('services.list.partnership.title'),
            text: this.$t('services.list.partnership.text'),
            image: require('@/assets/images/services/partnership-agreements.png'),
          },
          {
            title: this.$t('services.list.financial.title'),
            text: this.$t('services.list.financial.text'),
            image: require('@/assets/images/services/financial-facilitation.png'),
          },
          {
            title: this.$t('services.list.tradeCompliance.title'),
            text: this.$t('services.list.tradeCompliance.text'),
            image: require('@/assets/images/services/trade-compliance.png'),
          },
          {
            title: this.$t('services.list.reExport.title'),
            text: this.$t('services.list.reExport.text'),
            image: require('@/assets/images/services/re-export-management.png'),
          },
          {
            title: this.$t('services.list.digitalSupplyChain.title'),
            text: this.$t('services.list.digitalSupplyChain.text'),
            image: require('@/assets/images/services/digital-supply-chain.png'),
          },
        ];
      },
    },
  };
</script>

<style scoped>
  .services-section {
    background-color: #f8f9fa;
    padding: 80px 0;
  }

  .section-title {
    font-size: 2.2em;
    color: #1a237e;
    margin-bottom: 25px;
    font-weight: 700;
  }

  .service-card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 20px;
  }

  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12) !important;
  }

  .service-card .card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    width: 100%;
  }

  .service-card .card-title {
    font-weight: bold;
    font-size: 1.25em;
    color: #007bff !important;
    min-height: 2.5em;
    display: block;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.2;
  }

  .service-card .fas {
    font-size: 1.8em;
    color: #1a237e;
    margin-right: 0;
    margin-bottom: 5px;
  }

  .service-card .card-title span {
    display: block;
    width: 100%;
  }

  .card-text-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

  .service-card .card-text {
    font-size: 1em;
    color: #555;
    line-height: 1.6;
    min-height: 7em;
    margin-bottom: 0;
    display: flex;
    align-items: flex-start;
    text-align: center;
  }

  .service-image {
    max-width: 150px;
    height: auto;
    margin-top: 20px;
    margin-bottom: 0;
  }

  @media (max-width: 767.98px) {
    .service-card {
      padding: 15px;
    }
    .service-image {
      max-width: 120px;
    }
    .service-card .card-title {
      font-size: 1.15em;
      min-height: auto;
    }
    .service-card .card-text {
      min-height: auto;
    }
  }
</style>
