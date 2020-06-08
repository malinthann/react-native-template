## React Native Typescript[![Build Status] (https://travis-ci.com/delyethan/react-native-template.svg?branch=master)](https://travis-ci.com/delyethan/react-native-template)

## Quickstart

To get started with our template, run one of the following commands:
```shell
# using npx and the github repo directly
npx react-native init MyApp --template=https://github.com/delyethan/react-native-template

```

Create swift Bridging by add new file swift to .xcworkspace file

fix Android 8.0 crash splash screen by config android/app/src/main/res/values-v26/styles.xml

```
<item name="android:windowIsTranslucent">false</item>
```

### dependencies

    {
    "@react-native-community/masked-view": "^0.1.6",
    "@types/lodash": "^4.14.149",
    "@types/react-native-snap-carousel": "^3.7.4",
    "@types/react-native-vector-icons": "^6.4.5",
    "lodash": "^4.17.15",
    "mobx": "^5.15.0",
    "mobx-react": "^5.4.4",
    "moment": "^2.24.0",
    "react": "16.9.0",
    "react-native": "0.61.5",
    "react-native-fast-image": "^7.0.2",
    "react-native-firebase": "^5.6.0",
    "react-native-gesture-handler": "^1.6.0",
    "react-native-global-props": "^1.1.5",
    "react-native-keyboard-aware-scroll-view": "^0.9.1",
    "react-native-linear-gradient": "^2.5.6",
    "react-native-material-ripple": "^0.9.1",
    "react-native-material-textfield": "^0.16.1",
    "react-native-modal": "^11.5.4",
    "react-native-reanimated": "^1.7.0",
    "react-native-safe-area-context": "^0.7.3",
    "react-native-screens": "^2.0.0-beta.10",
    "react-native-snap-carousel": "^3.8.4",
    "react-native-splash-screen": "^3.2.0",
    "react-native-vector-icons": "^6.6.0",
    "react-navigation": "^4.1.1",
    "react-navigation-stack": "^2.1.1",
    "react-navigation-tabs": "^2.7.0",
    "rn-placeholder": "^3.0.0"
    }

### devDependencies

    {
    "@babel/core": "^7.6.2",
    "@babel/plugin-proposal-class-properties": "^7.7.4",
    "@babel/plugin-proposal-decorators": "^7.7.4",
    "@babel/plugin-transform-flow-strip-types": "^7.7.4",
    "@babel/runtime": "^7.6.2",
    "@types/jest": "^24.0.24",
    "@types/react-native": "^0.61.16",
    "@types/react-test-renderer": "16.9.1",
    "@typescript-eslint/eslint-plugin": "^2.12.0",
    "@typescript-eslint/parser": "^2.12.0",
    "babel-eslint": "^10.0.3",
    "babel-jest": "^25.1.0",
    "eslint": "^6.5.1",
    "jest": "^24.9.0",
    "metro-react-native-babel-preset": "^0.56.0",
    "react-test-renderer": "16.9.0",
    "typescript": "^3.7.3"
    }
