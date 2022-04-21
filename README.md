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
    "@react-native-firebase/analytics": "^13.1.1",
    "@react-native-firebase/app": "^13.1.1",
    "@react-native-firebase/auth": "^13.1.1",
    "@react-native-firebase/firestore": "^13.1.1",
    "@react-native-masked-view/masked-view": "^0.2.6",
    "@react-navigation/bottom-tabs": "^6.3.1",
    "@react-navigation/native": "^6.0.10",
    "@react-navigation/native-stack": "^6.6.1",
    "@react-navigation/stack": "^6.2.1",
    "dayjs": "^1.11.0",
    "lodash": "^4.17.21",
    "mobx": "^5.15.7",
    "mobx-react": "^6.3.1",
    "react": "17.0.2", 
    "react-native": "0.67.4",
    "react-native-android-keyboard-adjust": "^1.2.0",
    "react-native-animated-splash-screen": "^2.0.5",
    "react-native-fast-image": "^8.5.11",
    "react-native-gesture-handler": "^2.4.0",
    "react-native-global-props": "^1.1.5",
    "react-native-keyboard-aware-scroll-view": "^0.9.5",
    "react-native-linear-gradient": "^2.5.6",
    "react-native-reanimated": "^2.5.0",
    "react-native-safe-area-context": "^4.2.4",
    "react-native-screens": "^3.13.1",
    "react-native-vector-icons": "^9.1.0"
    }

### devDependencies

    {
    "@babel/core": "^7.12.9",
    "@babel/plugin-proposal-class-properties": "^7.16.7",
    "@babel/plugin-proposal-decorators": "^7.17.8",
    "@babel/plugin-transform-flow-strip-types": "^7.16.7",
    "@babel/runtime": "^7.12.5",
    "@react-native-community/eslint-config": "^2.0.0",
    "@types/jest": "^26.0.23",
    "@types/lodash": "^4.14.181",
    "@types/react-native": "^0.66.15",
    "@types/react-test-renderer": "^17.0.1",
    "@typescript-eslint/eslint-plugin": "^5.7.0",
    "@typescript-eslint/parser": "^5.7.0",
    "babel-jest": "^26.6.3",
    "babel-plugin-module-resolver": "^4.1.0",
    "eslint": "^7.14.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-react": "^7.29.4",
    "eslint-plugin-react-hooks": "^4.4.0",
    "husky": "^7.0.4",
    "jest": "^26.6.3",
    "metro-react-native-babel-preset": "^0.66.2",
    "npm-run-all": "^4.1.5",
    "patch-package": "^6.4.7",
    "plop": "^3.0.5",
    "prettier": "^2.6.1",
    "prettier-package-json": "^2.6.3",
    "react-native-infinite-flatlist-patch": "^1.1.1",
    "react-test-renderer": "17.0.2",
    "typescript": "^4.4.4"
    }
