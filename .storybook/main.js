module.exports = {
  managerWebpack: (config, options) => {
    options.cache.set = () => Promise.resolve();
    return config;
  },

  stories: [],
  addons: ['@storybook/addon-essentials'],
  // webpackFinal: (webpackConfig) => {
  //   // This modifies the existing image rule to exclude `.svg` files
  //   // since we handle those with `@svgr/webpack`.
  //   const imageRule = webpackConfig.module.rules.find((rule) => {
  //     if (typeof rule !== 'string' && rule.test instanceof RegExp) {
  //       return rule.test.test('.svg');
  //     }
  //   });
  //   if (typeof imageRule !== 'string') {
  //     imageRule.exclude = /\.svg$/;
  //   }

  //   webpackConfig.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   });

  //   return webpackConfig;
  // },
};
