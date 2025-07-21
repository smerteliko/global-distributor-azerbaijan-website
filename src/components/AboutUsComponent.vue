<template>
  <section id="about" class="about-us-section py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <h2 class="section-title">About Us</h2>
          <p class="lead">
            At GLOBAL DISTRIBUTOR AZƏRBAYCAN LLC, we redefine the concept of comprehensive
            distribution and strategic advisory. With years of experience and a deep understanding
            of global market dynamics, we specialize in connecting businesses with opportunities
            across various sectors – from consumer goods and industrial products to cutting-edge IT
            solutions.
          </p>
          <p>
            Our mission is to simplify the complexities of international trade and technological
            advancement for our partners. We pride ourselves on our agile approach, robust global
            network, and commitment to delivering tailored, efficient, and compliant solutions that
            drive growth and foster long-term success.
          </p>
        </div>
        <div class="col-lg-6">
          <img
            src="@/assets/images/about-us.jpg"
            alt="About Company"
            class="img-fluid rounded shadow-lg"
          />
        </div>
        <div class="row mt-5">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="info-block p-4 rounded shadow-sm h-100">
              <h4 class="text-primary mb-3"><i class="fas fa-eye me-2"></i> Our Vision</h4>
              <p>
                To be the leading universal distribution and consulting partner, enabling seamless
                global commerce and technological innovation for businesses worldwide.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <div class="info-block p-4 rounded shadow-sm h-100">
              <h4 class="text-primary mb-3"><i class="fas fa-heart me-2"></i> Our Values</h4>
              <ul class="list-unstyled">
                <li><i class="fas fa-check-circle text-success me-2"></i> Integrity</li>
                <li><i class="fas fa-check-circle text-success me-2"></i> Innovation</li>
                <li><i class="fas fa-check-circle text-success me-2"></i> Partnership</li>
                <li><i class="fas fa-check-circle text-success me-2"></i> Excellence</li>
                <li><i class="fas fa-check-circle text-success me-2"></i> Agility</li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="info-block p-4 rounded shadow-sm h-100">
              <h4 class="text-primary mb-3"><i class="fas fa-award me-2"></i> Why Choose Us</h4>
              <ul class="list-unstyled">
                <li>
                  <i class="fas fa-caret-right text-info me-2"></i> <b>Diverse Expertise:</b>
                  Comprehensive solutions spanning product distribution and IT consulting.
                </li>
                <li>
                  <i class="fas fa-caret-right text-info me-2"></i> <b>Global Reach:</b> Extensive
                  network ensuring market access and efficient operations.
                </li>
                <li>
                  <i class="fas fa-caret-right text-info me-2"></i> <b>Tailored Solutions:</b>
                  Customized strategies designed to meet unique business challenges.
                </li>
                <li>
                  <i class="fas fa-caret-right text-info me-2"></i> <b>Reliability & Compliance:</b>
                  Commitment to secure, transparent, and compliant international trade.
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
  };
</script>

<style scoped>
  .about-us-section {
    background-color: #fff;
    padding: 80px 0;
  }

  .section-title {
    font-size: 2.2em;
    color: #1a237e; /* Dark blue */
    margin-bottom: 25px;
    font-weight: 700;
  }

  .section-title-slogan {
    font-size: 2em;
    color: #1a237e; /* Dark blue */
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
