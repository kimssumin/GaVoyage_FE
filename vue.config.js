const { defineConfig } = require("@vue/cli-service");
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
    },
  },
});
