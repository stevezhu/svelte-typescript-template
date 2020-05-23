const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes('svelte-loader')
    );
    svelteLoader.options.preprocess = sveltePreprocess();
    return config;
  },
};
