<template>
  <section id="about" class="about-us-section py-5">
    <div class="container container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <h2 class="section-title">{{ $t('aboutUs.title') }}</h2>
          <p>{{ $t('aboutUs.leadText') }}</p>
          <p>{{ $t('aboutUs.missionText') }}</p>
        </div>
        <div class="col-lg-6">
          <img
            src="../../public/about-us.jpg"
            alt="About Company"
            class="img-fluid rounded shadow-lg"
          />
        </div>
        <div class="row mt-5">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="info-block p-4 rounded shadow-sm h-100">
              <h4 class="text-primary mb-3">
                <i class="fas fa-eye me-2"></i>
                {{ $t('aboutUs.visionTitle') }}
              </h4>
              <p>{{ $t('aboutUs.visionText') }}</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <div class="info-block p-4 rounded shadow-sm h-100">
              <h4 class="text-primary mb-3">
                <i class="fas fa-heart me-2"></i>
                {{ $t('aboutUs.valuesTitle') }}
              </h4>
              <ul class="list-unstyled">
                <li v-for="(value, key) in valuesList" :key="key">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  {{ value }}
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="info-block p-4 rounded shadow-sm h-100">
              <h4 class="text-primary mb-3">
                <i class="fas fa-award me-2"></i>{{ $t('aboutUs.whyChooseUsTitle') }}
              </h4>
              <ul class="list-unstyled">
                <li>
                  <i class="fas fa-caret-right text-info me-2"></i>
                  <span class="fw-bold">{{ $t('aboutUs.whyChooseUsList.expertiseBold') }}</span
                  >{{ $t('aboutUs.whyChooseUsList.expertiseText') }}
                </li>
                <li>
                  <i class="fas fa-caret-right text-info me-2"></i>
                  <span class="fw-bold">{{ $t('aboutUs.whyChooseUsList.reachBold') }}</span
                  >{{ $t('aboutUs.whyChooseUsList.reachText') }}
                </li>
                <li>
                  <i class="fas fa-caret-right text-info me-2"></i>
                  <span class="fw-bold">{{ $t('aboutUs.whyChooseUsList.tailoredBold') }}</span
                  >{{ $t('aboutUs.whyChooseUsList.tailoredText') }}
                </li>
                <li>
                  <i class="fas fa-caret-right text-info me-2"></i>
                  <span class="fw-bold">{{ $t('aboutUs.whyChooseUsList.reliabilityBold') }}</span>
                  {{ $t('aboutUs.whyChooseUsList.reliabilityText') }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AboutUs',
    data() {
      return {
        valuesList: [
          this.$t('aboutUs.valuesList.integrity'),
          this.$t('aboutUs.valuesList.innovation'),
          this.$t('aboutUs.valuesList.partnership'),
          this.$t('aboutUs.valuesList.excellence'),
          this.$t('aboutUs.valuesList.agility'),
        ],
      };
    },
    watch: {
      '$i18n.locale': {
        handler() {
          this.valuesList = [
            this.$t('aboutUs.valuesList.integrity'),
            this.$t('aboutUs.valuesList.innovation'),
            this.$t('aboutUs.valuesList.partnership'),
            this.$t('aboutUs.valuesList.excellence'),
            this.$t('aboutUs.valuesList.agility'),
          ];
        },
      },
    },
    mounted() {
      this.valuesList = [
        this.$t('aboutUs.valuesList.integrity'),
        this.$t('aboutUs.valuesList.innovation'),
        this.$t('aboutUs.valuesList.partnership'),
        this.$t('aboutUs.valuesList.excellence'),
        this.$t('aboutUs.valuesList.agility'),
      ];
    },
  };
</script>

<style scoped>
  .about-us-section {
    background-color: #f8f9fa;
    padding: 80px 0;
  }

  .section-title {
    font-size: 2.2em;
    color: #1a237e;
    margin-bottom: 25px;
    font-weight: 700;
  }

  p {
    line-height: 1.8;
    color: #555;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .shadow-lg {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
  }

  .info-block {
    background-color: #f8f9fa;
    border: 1px solid #e0e0e0;
    padding: 25px;
    border-radius: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .info-block h4 {
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 15px;
  }

  .info-block ul {
    padding-left: 0;
    list-style: none;
  }

  .info-block ul li {
    margin-bottom: 8px;
    color: #444;
  }

  .info-block ul li .fas,
  .info-block ul li .far {
    font-size: 1em;
    vertical-align: middle;
    margin-right: 8px;
  }
</style>
