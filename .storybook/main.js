const webpackConfig = require("../webpack.config")

module.exports = {
  stories: ["../**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport/register",
    "@storybook/addon-storysource",
    "@storybook/addon-docs",
  ],
  webpackFinal: async config => {
    return {
      ...config,
      module: { ...config.module, rules: webpackConfig.module.rules },
    }
  },
}
