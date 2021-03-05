// const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = ({ env }) => ({
  plugins: [
    require('postcss-import')(),
    // require('postcss-url')(),
    require("tailwindcss")(),
    require("autoprefixer")(),
    // If you are not using 'vue create' and "vue add @fullhuman/purgecss" 
    // env === 'production' ? purgecss({ 
    //   content: [`./public/**/*.html`,`./src/**/*.vue`],
    //   defaultExtractor (content) {
    //   const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
    //   return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    //   },
    //   safelist: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/ ],
    // }) : false,
//     env === 'production' ? require('cssnano')({preset: 'default' })() : false,
  ]
})

// require('@fullhuman/postcss-purgecss')({
//   content: [ './public/**/*.html', './src/**/*.vue' ],
//   defaultExtractor: (content) => {
//     const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
//     return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
//   },
//   whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!cursor-move).+-move$/, /^router-link(|-exact)-active$/ ],
// })

// const IN_PRODUCTION = process.env.NODE_ENV === 'production'
// module.exports = {
//   plugins: [
//     require('postcss-preset-env')({ stage: 0 }),
//     require('tailwindcss')(),
//     IN_PRODUCTION && require('@fullhuman/postcss-purgecss')({
//       content: [ `./public/**/*.html`, `./src/**/*.vue` ],
//       defaultExtractor (content) {
//         const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
//         return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
//       },
//       whitelist: [],
//       whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/ ],
//     }),
//     require('autoprefixer')(),
//   ],
// }
