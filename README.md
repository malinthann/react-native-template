## React Native Typescript [![Build Status](https://travis-ci.com/delyethan/react-native-template.svg?branch=master)](https://travis-ci.com/delyethan/react-native-template) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/5869970dd8184b428d8f98404367a799)](https://app.codacy.com/manual/delyethan/react-native-template?utm_source=github.com&utm_medium=referral&utm_content=delyethan/react-native-template&utm_campaign=Badge_Grade_Dashboard)

## Quickstart

To get started with our template, run one of the following commands:
```shell
# using npx and the github repo directly
npx react-native init MyApp --template=https://github.com/delyethan/react-native-template


```
```shell
# using npx with last react-native and the github repo directly
npx react-native@latest init MyApp --template=https://github.com/delyethan/react-native-template

```

Create swift Bridging by add new file swift to .xcworkspace file

fix Android 8.0 crash splash screen by config android/app/src/main/res/values-v26/styles.xml

```
<item name="android:windowIsTranslucent">false</item>
```

### dependencies

    {
    "@react-native-firebase/analytics": "^16.4.6",
    "@react-native-firebase/app": "^16.4.6",
    "@react-native-firebase/auth": "^16.4.6",
    "@react-native-firebase/firestore": "^16.4.6",
    "@react-native-masked-view/masked-view": "^0.2.8",
    "@react-navigation/bottom-tabs": "^6.4.1",
    "@react-navigation/native": "^6.0.14",
    "@react-navigation/native-stack": "^6.9.2",
    "@react-navigation/stack": "^6.3.5",
    "@shopify/flash-list": "^1.4.0",
    "mobx": "^6.7.0",
    "mobx-react": "^7.6.0",
    "moment": "^2.29.4",
    "react": "18.1.0",
    "react-native": "0.70.6",
    "react-native-android-keyboard-adjust": "^1.2.0",
    "react-native-animated-splash-screen": "^2.0.5",
    "react-native-fast-image": "^8.6.3",
    "react-native-gesture-handler": "^2.8.0",
    "react-native-global-props": "^1.1.5",
    "react-native-keyboard-aware-scroll-view": "^0.9.5",
    "react-native-linear-gradient": "^2.6.2",
    "react-native-reanimated": "^2.13.0",
    "react-native-safe-area-context": "^4.4.1",
    "react-native-screens": "^3.18.2",
    "react-native-vector-icons": "^9.2.0"
    }

### devDependencies

    {
    "@babel/core": "^7.12.9",
    "@babel/runtime": "^7.12.5",
    "@react-native-community/eslint-config": "^2.0.0",
    "@tsconfig/react-native": "^2.0.2",
    "@types/jest": "^26.0.23",
    "@types/react": "^18.0.21",
    "@types/react-native": "^0.70.6",
    "@types/react-test-renderer": "^18.0.0",
    "@typescript-eslint/eslint-plugin": "^5.37.0",
    "@typescript-eslint/parser": "^5.37.0",
    "babel-jest": "^26.6.3",
    "babel-plugin-module-resolver": "^4.1.0",
    "eslint": "^7.32.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.6.1",
    "eslint-plugin-react": "^7.31.11",
    "eslint-plugin-react-hooks": "^4.6.0",
    "husky": "^8.0.2",
    "jest": "^26.6.3",
    "metro-react-native-babel-preset": "0.72.3",
    "npm-run-all": "^4.1.5",
    "patch-package": "^6.5.0",
    "plop": "^3.1.1",
    "prettier": "^2.8.0",
    "prettier-package-json": "^2.7.0",
    "react-test-renderer": "18.1.0",
    "typescript": "^4.8.3"
    }
