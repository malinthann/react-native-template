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
    "@react-native-firebase/analytics": "^12.8.0",
    "@react-native-firebase/app": "^12.8.0",
    "@react-native-firebase/auth": "^12.8.0",
    "@react-native-firebase/firestore": "^12.8.0",
    "@react-native-masked-view/masked-view": "^0.2.6",
    "@react-navigation/bottom-tabs": "^6.0.5",
    "@react-navigation/native": "^6.0.2",
    "@react-navigation/native-stack": "^6.1.0",
    "@react-navigation/stack": "^6.0.7",
    "dayjs": "^1.10.7",
    "lodash": "^4.17.21",
    "mobx": "^5.15.7",
    "mobx-react": "^6.3.1",
    "react": "17.0.2",
    "react-native": "0.66.3",
    "react-native-android-keyboard-adjust": "^1.2.0",
    "react-native-animated-splash-screen": "^2.0.5",
    "react-native-fast-image": "^8.5.8",
    "react-native-gesture-handler": "^1.10.3",
    "react-native-global-props": "^1.1.5",
    "react-native-keyboard-aware-scroll-view": "^0.9.4",
    "react-native-linear-gradient": "^2.5.6",
    "react-native-reanimated": "^2.2.2",
    "react-native-safe-area-context": "^3.3.2",
    "react-native-screens": "^3.7.2",
    "react-native-vector-icons": "^8.1.0"
    }

### devDependencies

    {
    "@babel/core": "^7.12.9",
    "@babel/plugin-proposal-class-properties": "^7.14.5",
    "@babel/plugin-proposal-decorators": "^7.15.4",
    "@babel/plugin-transform-flow-strip-types": "^7.14.5",
    "@babel/runtime": "^7.12.5",
    "@react-native-community/eslint-config": "^2.0.0",
    "@types/jest": "^26.0.23",
    "@types/lodash": "^4.14.173",
    "@types/react": "^16.9.43",
    "@types/react-native": "^0.65.0",
    "@types/react-test-renderer": "^17.0.1",
    "@typescript-eslint/eslint-plugin": "^4.4.0",
    "@typescript-eslint/parser": "^4.4.0",
    "babel-jest": "^26.6.3",
    "babel-plugin-module-resolver": "^4.1.0",
    "eslint": "^7.14.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-plugin-import": "^2.24.2",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.25.2",
    "eslint-plugin-react-hooks": "^4.2.0",
    "husky": "^7.0.2",
    "jest": "^26.6.3",
    "metro-react-native-babel-preset": "^0.66.2",
    "npm-run-all": "^4.1.5",
    "patch-package": "^6.4.7",
    "plop": "^2.7.4",
    "prettier": "^2.4.1",
    "prettier-package-json": "^2.6.0",
    "react-native-codegen": "^0.0.7",
    "react-native-infinite-flatlist-patch": "^1.0.9",
    "react-test-renderer": "17.0.2",
    "typescript": "^3.8.3"
    }
