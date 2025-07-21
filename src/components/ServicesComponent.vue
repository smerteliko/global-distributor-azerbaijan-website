<template>
  <section id="services" class="services-section py-5">
    <div class="container">
      <h2 class="section-title text-center mb-5">Our Integrated Solutions</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card h-100 shadow-sm service-card">
            <div class="card-body">
              <h5 class="card-title text-primary">
                <i class="fas fa-globe me-2"></i> Global Sourcing & Distribution
              </h5>
              <p class="card-text">
                Specializing in sourcing and distributing a diverse portfolio of products across
                various industries, from consumer goods to industrial equipment, ensuring timely and
                reliable delivery worldwide.
              </p>
              <img
                src="~@/assets/images/services/global-sourcing-distribution.svg"
                alt="Global Sourcing & Distribution"
                class="service-image mt-3"
              />
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm service-card">
            <div class="card-body">
              <h5 class="card-title text-primary">
                <i class="fas fa-chart-line me-2"></i> Strategic Market Entry
              </h5>
              <p class="card-text">
                Guiding businesses through the complexities of new market penetration and expansion,
                providing strategic insights and localized support to achieve successful market
                presence.
              </p>
              <!--              <img src="~@/assets/images/services/strategic-market-entry.svg" alt="Strategic Market Entry" class="service-image mt-3">-->
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm service-card">
            <div class="card-body">
              <h5 class="card-title text-primary">
                <i class="fas fa-cogs me-2"></i> Supply Chain Optimization
              </h5>
              <p class="card-text">
                We streamline your procurement and distribution networks, optimizing every step from
                supplier selection to final delivery, ensuring efficiency, cost-effectiveness, and
                resilience.
              </p>
              <!--              <img src="~@/assets/images/services/supply-chain-optimization.svg" alt="Supply Chain Optimization" class="service-image mt-3">-->
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm service-card">
            <div class="card-body">
              <h5 class="card-title text-primary">
                <i class="fas fa-laptop-code me-2"></i> IT Consulting & Solutions
              </h5>
              <p class="card-text">
                Empowering businesses with cutting-edge IT consulting, including digital
                transformation strategies, system integration, cybersecurity, and cloud solutions to
                enhance operational efficiency and innovation.
              </p>
              <!--              <img src="~@/assets/images/services/it-consulting-solutions.svg" alt="IT Consulting & Solutions" class="service-image mt-3">-->
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm service-card">
            <div class="card-body">
              <h5 class="card-title text-primary">
                <i class="fas fa-handshake me-2"></i> Partnership & Agency Agreements
              </h5>
              <p class="card-text">
                Facilitating the conclusion of robust framework distributor and agency agreements,
                building strong, mutually beneficial partnerships for effective market
                representation and growth.
              </p>
              <!--              <img src="~@/assets/images/services/partnership-agreements.svg" alt="Partnership & Agency Agreements" class="service-image mt-3">-->
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm service-card">
            <div class="card-body">
              <h5 class="card-title text-primary">
                <i class="fas fa-money-bill-alt me-2"></i> Financial Facilitation
              </h5>
              <p class="card-text">
                Providing essential financial support for international transactions, including
                efficient currency conversion and timely transfers, ensuring smooth and secure
                financial flows for your global operations.
              </p>
              <!--              <img src="~@/assets/images/services/financial-facilitation.svg" alt="Financial Facilitation" class="service-image mt-3">-->
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm service-card">
            <div class="card-body">
              <h5 class="card-title text-primary">
                <i class="fas fa-balance-scale me-2"></i> International Trade Compliance
              </h5>
              <p class="card-text">
                Navigating the complexities of global trade regulations, we ensure full compliance
                with international laws, customs procedures, and documentation requirements for
                seamless cross-border operations.
              </p>
              <!--              <img src="~@/assets/images/services/trade-compliance.svg" alt="International Trade Compliance" class="service-image mt-3">-->
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm service-card">
            <div class="card-body">
              <h5 class="card-title text-primary">
                <i class="fas fa-redo-alt me-2"></i> Re-export Management
              </h5>
              <p class="card-text">
                Expert management of re-export deals when necessary, optimizing logistics and
                compliance to ensure efficient and compliant movement of goods through various
                jurisdictions.
              </p>
              <!--              <img src="~@/assets/images/services/re-export-management.svg" alt="Re-export Management" class="service-image mt-3">-->
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
  };
</script>

<style scoped>
  .services-section {
    background-color: #f8f9fa; /* Light background */
    padding: 80px 0;
  }

  .section-title {
    font-size: 2.2em;
    color: #1a237e; /* Dark blue */
    margin-bottom: 25px;
    font-weight: 700;
  }

  .service-card {
    border: none;
    border-radius: 10px;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    overflow: hidden;
    display: flex; /* Для Flexbox */
    flex-direction: column; /* Элементы в колонку */
    justify-content: space-between; /* Распределение пространства */
    align-items: center; /* Центрирование содержимого */
    text-align: center; /* Центрирование текста */
  }

  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1) !important;
  }

  .service-card .card-body {
    flex-grow: 1; /* Чтобы тело карточки занимало доступное пространство */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 0; /* Убираем стандартный паддинг, если изображение будет внизу */
  }

  .service-card .card-title {
    font-weight: bold;
    font-size: 1.25em;
    color: #007bff !important;
  }

  .service-card i {
    font-size: 1.5em;
    vertical-align: middle;
  }

  .service-card .fas {
    font-size: 1.25em;
    color: #007bff;
    margin-right: 10px;
  }

  .service-image {
    max-width: 200px;
    height: auto;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
