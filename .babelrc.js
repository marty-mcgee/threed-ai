module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          root: './',
          context: './context',
          controllers: './controllers',
          components: './components',
          organisms: './components/organisms',
          atoms: './components/atoms',
          molecules: './components/molecules',
          templates: './components/templates',
          pages: './pages',
          styles: './styles',
          static: './static',
          images: './static/images',
          util: './util',
          data: './data',
          '~': './src',
          '@': './src'
        },
      },
    ],
  ],
}
