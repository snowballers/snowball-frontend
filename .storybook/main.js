module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  reactOptions: {
    fastRefresh: true,
  },
  webpackFinal: async (baseConfig) => {
    const nextConfig = require("../next.config.js");

    baseConfig.resolve.alias = {
      ...baseConfig.resolve.alias,
      src: path.resolve(__dirname, "../src"),
      public: path.resolve(__dirname, "../public"),
      "next/router": require.resolve("./next/router.js"),
      "next/link": require.resolve("./next/link.js"),
      "next/image": require.resolve("./next/image.js"),
    };

    return {
      ...baseConfig,
      ...nextConfig,
    };
  },
};
