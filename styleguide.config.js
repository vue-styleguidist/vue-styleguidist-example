const vueLoader = require("vue-loader");

module.exports = {
  title: "Vue Style Guide Example",
  components: "src/components/**/[A-Z]*.vue",
  defaultExample: true,
  progressBar: true,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [new vueLoader.VueLoaderPlugin()]
  }
};
