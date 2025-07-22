// eslint.config.js (новый плоский формат для ESLint v9)
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import babelParser from "@babel/eslint-parser";
import vueParser from 'vue-eslint-parser';

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
      "vue/no-multiple-template-root": "off",
    },
  },
  pluginPrettier,
  {
    files: ['src/**/*.vue'],
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
      "vue/no-parsing-error": "off",
    },
  },
];
