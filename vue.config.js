const { defineConfig } = require("@vue/cli-service");
// const baseURL = require('./src/assets/js/util/url');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: "../Gavoyage/src/main/resources/static",

  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8080",
        chageOrigin: true,
        ws: false,
      },
      // "/plan*": {
      //   target: "http://localhost:8080/plan",
      //   changeOrigin: true,
      // },
    },
    historyApiFallback: true,
  },
});
//"http://70.12.50.218:8080",
//"http://localhost:8080"
