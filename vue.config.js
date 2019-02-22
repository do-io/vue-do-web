module.exports = {
    chainWebpack: config => {
        config.module.rules.delete("svg");
    },

    configureWebpack: {
        module: {
            rules: [{
                test: /\.svg$/,
                loader: 'vue-svg-loader',
            }, ],
        }
    },

    pwa: {
      name: 'by Design',
      themeColor: '#6002EE',
      msTileColor: '#6002ee',
      appleMobileWebAppStatusBarStyle: 'black-translucent'
    }
};