const { defineConfig } = require("@vue/cli-service");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
    pluginOptions: {
        eslint: {
            quiet: true,
            lintOnSave: false,
            formatter: 'stylish',
        }
    },
  configureWebpack: (config) => {
    config.plugins = config.plugins.filter(
      (plugin) => !(plugin instanceof ESLintWebpackPlugin),
    );

    config.plugins.push(
      new ESLintWebpackPlugin({
        overrideConfigFile: path.resolve(__dirname, "./eslint.config.js"),
        files: ["src/**/*.{js,jsx,vue}"],
        context: config.context,
        cache: true,
        cacheLocation: "./.cache/eslint/custom.json",
        failOnWarning: false,
        failOnError: false,
        quiet: true,
        eslintPath: require.resolve("eslint"),
        formatter: "stylish",
      }),
    );
  },

  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
        };
        return options;
      });
  },
});
