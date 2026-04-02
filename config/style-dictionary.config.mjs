import StyleDictionary from 'style-dictionary';

const source = ['assets-system/source/tokens/design-tokens.json'];

export default {
  source,
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'assets-system/build/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables'
        }
      ]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'assets-system/build/scss/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables'
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'assets-system/build/ts/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json'
        }
      ]
    }
  }
};
