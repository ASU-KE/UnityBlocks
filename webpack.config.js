const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = merge(defaultConfig, {
  plugins: [
    // TEMPORARILY DISABLED: we need asu-unity-stack repo fixes for this to work
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "dist/",
    //       context: "node_modules/@asu/app-webdir-ui/",
    //       to: path.resolve(__dirname, "resources/unity-import/app-webdir-ui/"),
    //     },
    //     {
    //       from: "dist/",
    //       context: "node_modules/@asu/components-core/",
    //       to: path.resolve(__dirname, "resources/unity-import/components-core/"),
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      Unity: path.resolve(__dirname, "resources/unity-import/"),
    },
  },
});
