const withSass = require('@zeit/next-sass');
module.exports = withSass({
  // Set this to true if you use CSS modules.
  // See: https://github.com/css-modules/css-modules
  cssModules: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  }
});


