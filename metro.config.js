const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = mergeConfig(getDefaultConfig(__dirname), {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: getDefaultConfig(__dirname).resolver.assetExts.filter(
      ext => ext !== 'svg',
    ),
    unstable_enableSymlinks: false, // Temporarily disabling symlinks if you face issues on Windows
    unstable_enablePackageExports: true,
    blockList: [
      /node_modules\/react-native-css-interop/, // Ensure this directory is not excluded
    ],
    sourceExts: [
      ...getDefaultConfig(__dirname).resolver.sourceExts,
      'svg', // Include svg files
      'android.js', // Include android.js to avoid SHA-1 error
    ],
  },
});

module.exports = withNativeWind(config, { input: './global.css' });
