## [1.4.0] 2020 - 08 - 03
### Updated dependencies
- updated `@react-navigation/drawer@5.8.1` to `@react-navigation/drawer@5.12.4`
- updated `@react-navigation/native@5.5.0` to `@react-navigation/native@5.9.3`
- updated `@react-navigation/stack@5.4.1` to `@react-navigation/stack@5.14.3`
- updated `expo SDK@39` to `expo SDK@40`
- updated `expo-asset@8.2.0` to `expo-asset@8.2.1`
- updated `expo-font@8.3.0` to `expo-font@8.4.0`
- updated `react-native SDK@39` to `react-native SDK@40`
- updated `react-native-gesture-handler@1.7.0` to `react-native-gesture-handler@1.8.0`
- updated `react-native-safe-area-context@3.1.4` to `react-native-safe-area-context@3.1.9`
- updated `react-native-screens@2.10.1` to `react-native-screens@2.15.2`
- added `expo-app-loading@1.01`


## [1.3.0] 2020 - 11 - 06
### Updated dependencies
- updated `@react-native-community/masked-view@0.16` to `@react-native-community/masked-view@0.16`
- updated `expo@37` to `expo@37`
- updated `expo-asset@8.1.5` to `expo-asset@8.1.5`
- updated `expo-font@8.1.0 ` to ``
- updated `galio-framework@0.6.3` to ``
- updated `react@16.9.0` to ``
- updated `react-native SDK@37` to ``
- updated `react-native-gesture-handler@1.6.0` to ``
- updated `react-native-reanimated@1.7.0` to ``
- updated `react-native-safe-area-context@0.7.3 ` to ``
- updated `react-native-screens@2.2.0` to ``
- updated `react-native-svg@11.0.1` to ``
- changed the git source for react-native-modal-dropdown
### Updated files
- App.js - removed `packagerOpts` which solved Expo failing to load
- Components.js - fixed `useNativeDriver` warning, layout for ScrollView and Horizontal Gallery
- Gallery.js - fixed `useNativeDriver` warning
- Tabs.js - fixed `useNativeDriver` warning
- Product.js - fixed `useNativeDriver` warning, chat button styling
- Profile.js - fixed layout positioning for buttons 
- Cart.js - fixed Select positioning, Checkout button and the screen's layout


## [1.2.0] 2020 - 06 - 20
### Updated dependencies
- updated `expo-asset@8.0.0` to `expo-asset@8.1.5`
- updated `expo-font@8.0.0` to `expo-font@8.1.0`
- updated `react-native-gesture-handler@1.5.0` to  `react-native-gesture-handler@1.6.0`
- updated `react-native-reanimated@1.4.0` to `react-native-reanimated@1.7.0`
- updated `react-native-screens@2.0.0-alpha.12` to `react-native-screens@2.2.0`
- updated `react-native-safe-area-context@0.6.0` to `react-native-safe-area-context@0.7.3`
- updated `@react-native-community/masked-view@0.1.5` to `@react-native-community/masked-view@0.1.6`
- updated `react-native SDK@36.0.0` to `react-native SDK@37.0.0`
- updated `babel-preset-expo@7.0.0` to `babel-preset-expo@8.2.1`
- updated `Expo @36.0.0` to `Expo @37.0.0`
- updated `@react-navigation/native@5.0.0` to `@react-navigation/native@5.5.0`
- updated `@react-navigation/stack@5.0.0` to `@react-navigation/stack@5.4.1`
- updated `@react-navigation/compat@5.0.0` to `@react-navigation/compat@5.1.25`
- updated `@react-navigation/bottom-tabs@5.0.0` to `@react-navigation/bottom-tabs@5.5.1`
- updated `@react-navigation/drawer@5.0.0` to `@react-navigation/drawer@5.8.1`
### Updated files
- change function for fontLoading in `App.js`, this should fix the often occurrence of the error
- moved `assets/font/now.json` to `assets/config/now.json` in order to make sure there wouldn't be any issue with the build for Android
- edited `Header.js` in order to fix the navigation error where the app won't let you go back
- edited `Search.js` and fixed the card stacking issue, now all elements are scrollable
- edited `Settings.js` and fixed navigation routes which were returning an error

## [1.1.0] 2020 - 03 - 10
### Removed dependencies
- removed `react-navigation@4.0.10`
### Added dependencies
- added `@react-navigation/compat@5.0.0`
- added `@react-navigation/drawer@5.0.0`
- added `@react-navigation/native@5.0.0`
- added `@react-navigation/stack@5.0.0`
- added `@react-native-community/masked-view@0.1.5`
- added `react-native-reanimated@1.4.0`
- added `react-native-safe-area-context@0.6.0`
- added `react-native-screeens@2.0.0-alpha.12`
### Updated dependencies
- updated `expo@35.0.0` to `expo@36.0.1`
- updated `expo-asset@7.0.0` to `expo-asset@8.0.0`
- updated `expo-font@7.0.0` to `expo-font@8.0.0`
- updated `react@16.8.3` to `react@16.9.0`
- updated `babel-preset-expo@7.1.0` to `babel-preset-expo@8.0.0`
### Updated files
- changed the whole routing from `Screens.js` because `react-navigation@5.0.0` has a new dynamic API
- changed `Menu.js` for a new Drawer custom component
- changed `DrawerItem.js` for a new type of `<DrawerCustomItem />`
- changed props and variables so that the new `react-navigation` API could work with the following files: `Trending.js`, `Header.js`, `Product.js`, `Gallery.js`, `Pro.js`, `Product.js`, `Settings.js`, `Search.js`, `Cart.js`, 'Card.js`, `Category.js`, `Fashion.js`, `Onboarding.js`

## [1.0.0] 2019-11-11

### Initial Release
