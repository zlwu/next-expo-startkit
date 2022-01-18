// @generated: @expo/next-adapter@3.1.17
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require("@expo/next-adapter");
const withImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "native-base",
  "react-native-svg",
  "react-native-safe-area-context",
  "@react-aria/visually-hidden",
  "@react-native-aria/button",
  "@react-native-aria/checkbox",
  "@react-native-aria/combobox",
  "@react-native-aria/focus",
  "@react-native-aria/interactions",
  "@react-native-aria/listbox",
  "@react-native-aria/overlays",
  "@react-native-aria/radio",
  "@react-native-aria/slider",
  "@react-native-aria/tabs",
  "@react-native-aria/utils",
  "@react-stately/combobox",
  "@react-stately/radio",
]);

module.exports = withPlugins(
  [
    withTM,
    [
      withExpo(
        withImages(
          withFonts({
            projectRoot: __dirname,
          })
        )
      ),
    ],
    // your plugins go here.
  ],
  {
    webpack: (config) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        "react-native$": "react-native-web",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
  }
);
