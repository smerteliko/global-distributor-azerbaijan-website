<template>
  <section id="contact" class="contact-us-section py-5 bg-light">
    <div class="container container-fluid">
      <h2 class="section-title text-center mb-5">{{ $t('contact.title') }}</h2>
      <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="contact-info p-4 rounded shadow-sm h-100">
            <h4 class="mb-3 text-primary">{{ $t('contact.ourContacts') }}</h4>
            <ul class="list-unstyled">
              <li v-for="(item, index) in contactDetails" :key="`contacts-${index}`" class="mb-3">
                <i :class="[item.icon, 'me-2', 'text-primary']"></i>
                <span class="fw-bold">{{ item.label }}:</span>
                <a
                  v-if="item.link"
                  :href="item.link"
                  :target="item.target"
                  :rel="item.rel"
                  class="text-decoration-none"
                  >{{ item.value }}
                </a>
                <span v-else>{{ item.value }}</span>
              </li>
            </ul>
            <h4 class="mt-4 mb-3 text-primary">
              {{ $t('contact.openingHoursTitle') }}
            </h4>
            <ul class="list-unstyled contact-hours-list">
              <li>
                <i class="fas fa-clock me-2 text-primary"></i>
                {{ $t('contact.openingHours.weekdays') }}
              </li>
              <li>
                <i class="fas fa-calendar-alt me-2 text-primary"></i>
                {{ $t('contact.openingHours.weekend') }}
              </li>
            </ul>
            <p class="mt-3 text-muted">{{ $t('contact.appointmentNote') }}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-form p-4 rounded shadow-sm h-100">
            <h4 class="mb-3 text-primary">{{ $t('contact.sendMessage') }}</h4>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">{{ $t('contact.yourName') }}</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  name="name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">{{ $t('contact.yourEmail') }}</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  name="email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="subject" class="form-label">{{ $t('contact.subject') }}</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="form-control"
                  name="subject"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">{{ $t('contact.message') }}</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-control"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary custom-btn" :disabled="isLoading">
                <span
                  v-if="isLoading"
                  class="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                {{ isLoading ? $t('contact.sendingMessage') : $t('contact.sendMessageButton') }}
              </button>
            </form>
            <div v-if="submitStatus === 'success'" class="alert alert-success mt-3" role="alert">
              {{ $t('contact.messageSentSuccess') }}
            </div>
            <div v-if="submitStatus === 'error'" class="alert alert-danger mt-3" role="alert">
              {{ $t('contact.messageSentError') }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 text-center">
        <h4 class="mb-3 text-primary">{{ $t('contact.findUsOnMap') }}</h4>
        <div class="map-container rounded shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.528345474929!2d49.84782768103339!3d40.38851898155391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8d21b02b6d%3A0x6d5e1c2a1b9d4e9d!2sKaverochkin%20Street%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1678881234567!5m2!1sen!2s"
            width="100%"
            height="450"
            class="border-0"
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
  import axios from 'axios';
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
        submitStatus: null, // 'null', 'sending', 'success', 'error'
        isLoading: false,
        contactDetails: [],
      };
    },
    watch: {
      '$i18n.locale': {
        handler() {
          this.populateContactDetails();
        },
      },
    },
    mounted() {
      this.populateContactDetails();
    },
    methods: {
      //action="https://formspree.io/f/mqalpalv" method="POST"
      async submitForm() {
        this.isLoading = true; // Показываем спиннер
        this.submitStatus = 'sending';

        try {
          const formspreeUrl = 'https://formspree.io/f/mqalpalv';

          const response = await axios.post(formspreeUrl, this.form, {
            headers: {
              Accept: 'application/json',
            },
          });

          if (response.data && response.data.ok) {
            this.submitStatus = 'success';
            this.form = { name: '', email: '', subject: '', message: '' };
          } else {
            this.submitStatus = 'error';
            console.error('Formspree Error:', response.data);
          }
        } catch (error) {
          this.submitStatus = 'error';
          console.error('Error sending form:', error);
        } finally {
          this.isLoading = false;
          setTimeout(() => {
            this.submitStatus = null; // Сброс статуса через 5 секунд
          }, 5000);
        }
      },
      resetForm() {
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };
      },
      populateContactDetails() {
        this.contactDetails = [
          {
            label: this.$t('contact.address'),
            icon: 'fas fa-map-marker-alt',
            value:
              ' AZ1070, Narimanov District, Kaverochkin Street, Building 34/79, Baku, Azerbaijan',
          },
          {
            label: this.$t('contact.email'),
            icon: 'fas fa-envelope',
            value: ' office@gda.az',
            link: 'mailto:office@gda.az',
          },
          {
            label: this.$t('contact.phone'),
            icon: 'fas fa-phone',
            value: ' +994 50 423 4997',
            link: 'tel:+994504234997',
          },
          {
            label: this.$t('contact.whatsapp'),
            icon: 'fab fa-whatsapp',
            value: ' +994 50 423 4997',
            link: 'https://wa.me/994504234997',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          {
            label: this.$t('contact.telegram'),
            icon: 'fab fa-telegram-plane',
            value: ' @global_distributor_azerbaijan',
            link: 'https://t.me/global_distributor_azerbaijan',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        ];
      },
    },
  };
</script>

<style scoped>
  .contact-us-section {
    padding: 80px 0;
    background-color: #f0f2f5;
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
    display: flex; /* Чтобы спиннер и текст были в одну линию */
    align-items: center;
    justify-content: center;
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
    font-size: 1.2em;
    vertical-align: middle;
    color: #007bff;
  }

  .contact-hours-list {
    padding-left: 0;
    list-style: none;
    margin-top: 10px;
  }
  .contact-hours-list li {
    margin-bottom: 5px;
    font-size: 0.95em;
    color: #444;
  }
  .contact-hours-list li .fas {
    font-size: 1em;
    margin-right: 8px;
  }
  .spinner-border-sm {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem; /* Отступ между спиннером и текстом */
  }
</style>
