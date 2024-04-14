
module.exports = {
  stories: ['../src/components/**/*.stories.js', '../src/components/**/*.stories.jsx'],
  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    '@chromatic-dom/storybook'
  ],

  features: {
    postcss: false,
  },

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
