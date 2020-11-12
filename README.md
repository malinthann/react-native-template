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
    "@react-native-community/masked-view": "^0.1.10",
    "@react-native-firebase/app": "^9.0.0",
    "@react-native-firebase/auth": "^9.3.5",
    "@react-native-firebase/firestore": "^7.10.3",
    "@react-navigation/bottom-tabs": "^5.11.1",
    "@react-navigation/native": "^5.8.9",
    "@react-navigation/stack": "^5.12.6",
    "@types/lodash": "^4.14.165",
    "@types/react-native-vector-icons": "^6.4.6",
    "lodash": "^4.17.20",
    "mobx": "^5.15.7",
    "mobx-react": "^6.3.1",
    "moment": "^2.29.1",
    "react": "^16.14.0",
    "react-hook-form": "^6.11.0",
    "react-native": "^0.63.3",
    "react-native-config": "^1.4.1",
    "react-native-fast-image": "^8.3.3",
    "react-native-gesture-handler": "^1.8.0",
    "react-native-global-props": "^1.1.5",
    "react-native-keyboard-aware-scroll-view": "^0.9.3",
    "react-native-linear-gradient": "^2.5.6",
    "react-native-material-ripple": "^0.9.1",
    "react-native-material-textfield": "^0.16.1",
    "react-native-reanimated": "^1.13.1",
    "react-native-safe-area-context": "^3.1.9",
    "react-native-screens": "^2.14.0",
    "react-native-splash-screen": "^3.2.0",
    "react-native-vector-icons": "^7.1.0",
    "rn-placeholder": "^3.0.3"
    }

### devDependencies

    {
    "@babel/core": "^7.8.4",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-proposal-decorators": "^7.10.4",
    "@babel/plugin-transform-flow-strip-types": "^7.9.0",
    "@babel/runtime": "^7.8.4",
    "@react-native-community/eslint-config": "^2.0.0",
    "@types/jest": "^26.0.4",
    "@types/react": "^16.9.43",
    "@types/react-native": "^0.63.8",
    "@types/react-test-renderer": "^16.9.2",
    "@typescript-eslint/eslint-plugin": "^3.6.0",
    "@typescript-eslint/parser": "^3.6.0",
    "babel-jest": "^25.1.0",
    "eslint": "^6.5.1",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-react-hooks": "^4.0.7",
    "jest": "^25.1.0",
    "metro-react-native-babel-preset": "^0.59.0",
    "prettier": "^2.0.4",
    "react-test-renderer": "16.13.1",
    "typescript": "^3.9.6"
    }
