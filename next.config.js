// @generated: @expo/next-adapter@3.1.17
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter');
const withImages = require('next-optimized-images');
const withFonts = require('next-fonts');

module.exports = withExpo(
  withImages(withFonts({
      projectRoot: __dirname,
    }))
);
