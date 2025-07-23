
-----

# GLOBAL DISTRIBUTOR AZƏRBAYCAN LLC - Official Website

This repository contains the source code for the official website of GLOBAL DISTRIBUTOR AZƏRBAYCAN LLC, a universal distributor and provider of strategic IT solutions. The website is developed using Vue.js 3 and Bootstrap 5.

## About The Project

The website serves as an interactive showcase for GLOBAL DISTRIBUTOR AZƏRBAYCAN LLC, providing information about its services, contacts, advantages, and philosophy. The site is designed with a focus on adaptive design, multilingualism, and a clean, modern aesthetic.

**Key Features:**

* **Vue.js 3 (Options API):** A modern, reactive framework for building dynamic user interfaces.
* **Bootstrap 5:** A responsive and stylish frontend library for rapid, cross-browser design.
* **Multilingualism (Vue I18n):** Support for multiple languages (English, Azerbaijani, Chinese, French, Russian) with user preference persistence.
* **Responsive Design:** Optimized for display on various devices, from smartphones to widescreen monitors.
* **Clean URLs and Anchors:** Seamless navigation between page sections without reloading, using Vue Router in history mode.
* **Local Resources:** Fonts (Google Fonts) and icons (Font Awesome) are loaded locally for improved performance and reliability.
* **Contact Form:** Asynchronous form submission using Axios to Formspree.io.
* **Automated Formatting:** Integration of ESLint v9 and Prettier to maintain code quality and consistency.

## Project Structure

```
my-company-website/
├── public/                     # Static files, Favicon, manifest, 404.html
│   ├── index.html              # Main HTML file
│   ├── img/icons/              # Favicon icons
│   ├── hero-bg.jpg             # Hero Section background image
│   ├── about-us.jpg            # Image for the About Us section
│   └── logo.png                # Company logo
├── src/                        # Source code for the Vue.js application
│   ├── assets/                 # Static assets (styles, fonts, images)
│   │   ├── fontawesome/        # Local Font Awesome CSS/webfonts files
│   │   ├── images/             # Images for components
│   │   │   └── services/       # Images for service cards
│   │   └── style.css           # Global custom styles
│   ├── components/             # Reusable Vue components
│   ├── router/                 # Vue Router configuration
│   ├── views/                  # Page components (Home.vue)
│   ├── App.vue                 # Root application component
│   ├── main.js                 # Vue application entry point
│   └── i18n/                   # Vue I18n configuration
│       └── i18n.js             # Vue I18n initialization
│       └── locales/            # Translation files (en.json, az.json, zh.json, fr.json)
├── babel.config.cjs            # Babel configuration
├── eslint.config.js            # ESLint configuration (flat config format)
├── vue.config.cjs              # Vue CLI (Webpack) configuration
├── package.json                # Project dependencies and scripts
└── .prettierrc.cjs             # Prettier configuration
```

## Installation and Setup

To install and run the project, follow these instructions:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/smerteliko/global-distributor-azerbaijan-website.git
    cd global-distributor-azerbaijan-website
    ```

2.  **Install Node.js:**
    Ensure you have a stable LTS (Long Term Support) version of Node.js installed (recommended: **Node.js v20.x.x**). You can use `nvm` (Node Version Manager) to manage your Node.js versions:

    ```bash
    nvm install 20
    nvm use 20
    ```

3.  **Install Dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run serve
    ```

    The application will be available at `http://localhost:8080`.

## Available Scripts

The `package.json` file includes the following scripts:

* `npm run serve`: Starts the development server with hot-reloading.
* `npm run build`: Compiles and minifies the project for production into the `dist/` folder.
* `npm run lint`: Runs ESLint and Prettier to fix formatting issues in the source code.
* `npm run lint:check`: Runs ESLint to check for issues without fixing them.
* `npm run format`: Runs Prettier to format the entire project.
* `npm run deploy`: Builds the project and deploys it to GitHub Pages.

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages.

1.  Ensure that the correct repository name is specified in `package.json` and `vue.config.cjs`.
    * In `package.json`: `"homepage": "https://USERNAME.github.io/REPOSITORY_NAME/"`
    * In `vue.config.cjs`: `publicPath: '/REPOSITORY_NAME/'`
2.  Execute the deploy command:
    ```bash
    npm run deploy
    ```
3.  Configure GitHub Pages in your repository: Navigate to `Settings` -\> `Pages` -\> `Deploy from a branch` -\> select `gh-pages` branch, `/ (root)` folder.

## License

[Specify your license here, e.g., MIT, Apache 2.0, or "All rights reserved."]

-----