const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = (env, argv) => {
  console.log("Custom webpack config loaded (UnityBlocks).");

  const config = {
    ...defaultConfig,
    resolve: {
      ...defaultConfig.resolve,
      alias: {
        ...(defaultConfig.resolve ? defaultConfig.resolve.alias : {}),
        "@resources": path.resolve(__dirname, "resources"),
        "@unity-components": path.resolve(
          __dirname,
          "resources/unity/component-news/src/components"
        ),
        "@asu-unity-stack": path.resolve(__dirname, "resources/asu-unity-stack"),

      },
      extensions: [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
        ".json",
      ],
    },
    module: {
      ...defaultConfig.module,
      rules: defaultConfig.module.rules.map((rule) => {
        // Include /resources in Babel for JS/JSX/TS.
        if (
          rule.test &&
          rule.test.toString().match(/(j|t)sx?/)
        ) {
          const include = Array.isArray(rule.include)
            ? rule.include
            : rule.include
            ? [rule.include]
            : [];
            return {
              ...rule,
              include: [
                ...include,
                path.resolve(__dirname, "src"),
                path.resolve(__dirname, "resources"),
              ],
            };
        }
        return rule;
      }),
    },
    stats: {
      errorDetails: true,
    },
  };

  return config;
};