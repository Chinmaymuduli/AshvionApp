module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@common': './src/common',
          '@configs': './src/configs',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@types': './src/types',
          '@navigation': './src/navigation',
          '@appState': './src/appState',
          '@axiosApi': './src/axiosApi',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
