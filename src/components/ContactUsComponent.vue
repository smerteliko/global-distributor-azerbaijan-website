<template>
  <section id="contact" class="contact-us-section py-5 bg-light">
    <div class="container">
      <h2 class="section-title text-center mb-5">Connect With Us</h2>
      <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="contact-info p-4 rounded shadow-sm h-100">
            <h4 class="mb-3 text-primary">Our Contacts</h4>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="fas fa-map-marker-alt me-2 text-primary"></i>
                <span class="fw-bold">Address: </span> AZ1070, Narimanov District, Kaverochkin
                Street, Building 34/79, Baku, Azerbaijan
              </li>
              <li class="mb-3">
                <i class="fas fa-envelope me-2 text-primary"></i>
                <span class="fw-bold">Email: </span>
                <a href="mailto:office@gda.az" class="text-decoration-none">office@gda.az</a>
              </li>
              <li class="mb-3">
                <i class="fas fa-phone me-2 text-primary"></i>
                <span class="fw-bold">Phone: </span>
                <a href="tel:+994504234997" class="text-decoration-none">+994 50 423 4997</a>
              </li>
              <li class="mb-3">
                <i class="fab fa-whatsapp me-2 text-primary"></i>
                <span class="fw-bold">WhatsApp: </span>
                <a
                  href="https://wa.me/994504234997"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-decoration-none"
                  >+994 50 423 4997</a
                >
              </li>
              <li class="mb-3">
                <i class="fab fa-telegram-plane me-2 text-primary"></i>
                <span class="fw-bold">Telegram: </span>
                <a
                  href="https://t.me/global_distributor_azerbaijan"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-decoration-none"
                  >@global_distributor_azerbaijan</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-form p-4 rounded shadow-sm h-100">
            <h4 class="mb-3 text-primary">Send Us a Message</h4>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input id="name" v-model="form.name" type="text" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Your Email</label>
                <input id="email" v-model="form.email" type="email" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input id="subject" v-model="form.subject" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-control"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary custom-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div class="mt-5 text-center">
        <h4 class="mb-3 text-primary">Find Us on the Map</h4>
        <div class="map-container rounded shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.528345474929!2d49.84782768103339!3d40.38851898155391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8d21b02b6d%3A0x6d5e1c2a1b9d4e9d!2sKaverochkin%20Street%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1678881234567!5m2!1sen!2s"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ContactUs',
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.form);
        alert('Demo: Message sent. In a real application, it would be sent to a server.');
        this.resetForm();
      },
      resetForm() {
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };
      },
    },
  };
</script>

<style scoped>
  .contact-us-section {
    padding: 80px 0;
    background-color: #f0f2f5; /* Very light background */
  }

  .section-title {
    font-size: 2.2em;
    color: #1a237e;
    margin-bottom: 25px;
    font-weight: 700;
  }

  .contact-info,
  .contact-form {
    background-color: #fff;
    border: 1px solid #e0e0e0;
  }

  .contact-info ul li {
    color: #555;
  }

  .contact-info ul li .fw-bold {
    color: #333;
  }

  .contact-info a {
    color: #007bff;
  }

  .contact-info i {
    font-size: 1.2em;
  }

  .form-label {
    font-weight: 500;
    color: #333;
  }

  .form-control {
    border-radius: 5px;
    border: 1px solid #ced4da;
  }

  .form-control:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
  }

  .custom-btn {
    background-color: #007bff;
    border-color: #007bff;
  }

  .custom-btn:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  .map-container {
    overflow: hidden;
    border-radius: 10px;
  }

  .map-container iframe {
    border-radius: 10px;
  }

  .contact-info .fas {
    font-size: 1.2em;
    vertical-align: middle;
  }

  .contact-info .fas,
  .contact-info .fab {
    /* Добавлен .fab для иконок брендов */
    font-size: 1.2em;
    vertical-align: middle;
    color: #007bff; /* Или var(--secondary-color), чтобы быть конкретнее, если text-secondary не устраивает */
  }
</style>
