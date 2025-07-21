// eslint.config.js (новый плоский формат для ESLint v9)
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import babelParser from "@babel/eslint-parser";
import vueParser from 'vue-eslint-parser'; // <--- ДОБАВЛЕНО: Импортируем vue-eslint-parser

export default [
  {
    files: ["src/**/*.{js,jsx,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: babelParser,
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        // Опции для @babel/eslint-parser
        requireConfigFile: false,
        babelOptions: {
          presets: ["@vue/cli-plugin-babel/preset"],
        },
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginVue.configs["vue3-recommended"].rules,

      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "vue/no-multiple-template-root": "off", // <-- ЭТО ВАЖНО для Vue 3, если у вас несколько корней
      // Если используете Prettier, убедитесь, что его правила интегрированы:
      //'prettier/prettier': 'error', // Пример: если хотите, чтобы Prettier запускался как правило ESLint
    },
  },
  // Конфигурация Prettier (если используется)
  pluginPrettier, // Это включает рекомендованные правила Prettier
  {
    files: ['src/**/*.vue'], // Только для .vue файлов
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: ['@vue/cli-plugin-babel/preset']
        }
      }
    },
    rules: {

      //'vue/html-self-closing': 'off', // Отключить самозакрывающиеся теги HTML в Vue (иногда конфликт)
      "vue/no-parsing-error": "off", // Отключить некоторые ошибки парсинга, если они мешают
      // 'vue/no-template-filter': 'off', // Если используются фильтры в шаблонах (в Vue 3 устарели)
      // 'vue/attribute-hyphenation': 'off' // Если есть проблемы с атрибутами
    },
  },
];
