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
    unstable_enableSymlinks: true,
    unstable_enablePackageExports: true,
    sourceExts: [
      ...getDefaultConfig(__dirname).resolver.sourceExts,
      'svg', // Include svg files
      'android.js', // Include android.js to avoid SHA-1 error
    ],
  },
});

module.exports = withNativeWind(config, { input: './global.css' });
