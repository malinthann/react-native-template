## React Native Typescript

## Quickstart

To get started with our template, run one of the following commands:
```shell
# using npx and the github repo directly
npx react-native init MyApp --template=https://github.com/delyethan/react-native-template#0.63.0

```
```shell
# using npx with last react-native and the github repo directly
npx react-native@latest init MyApp --template=https://github.com/delyethan/react-native-template#0.63.0

```

Create swift Bridging by add new file swift to .xcworkspace file

fix Android 8.0 crash splash screen by config android/app/src/main/res/values-v26/styles.xml

```
<item name="android:windowIsTranslucent">false</item>
```

### dependencies

    {
    "@react-native-community/masked-view": "^0.1.9",
    "@react-native-firebase/app": "^8.2.0",
    "@react-native-firebase/auth": "^8.2.0",
    "@react-native-firebase/firestore": "^7.4.3",
    "@react-navigation/bottom-tabs": "^5.7.0",
    "@react-navigation/native": "^5.7.0",
    "@react-navigation/stack": "^5.7.0",
    "@types/lodash": "^4.14.149",
    "@types/react-native-vector-icons": "^6.4.5",
    "lodash": "^4.17.15",
    "mobx": "^5.15.4",
    "mobx-react": "^6.2.2",
    "moment": "^2.24.0",
    "react": "16.13.1",
    "react-hook-form": "^6.0.4",
    "react-native": "0.63.1",
    "react-native-fast-image": "^8.1.5",
    "react-native-gesture-handler": "^1.6.1",
    "react-native-global-props": "^1.1.5",
    "react-native-keyboard-aware-scroll-view": "^0.9.1",
    "react-native-linear-gradient": "^2.5.6",
    "react-native-material-ripple": "^0.9.1",
    "react-native-material-textfield": "^0.16.1",
    "react-native-reanimated": "^1.8.0",
    "react-native-safe-area-context": "^3.1.1",
    "react-native-screens": "^2.4.0",
    "react-native-splash-screen": "^3.2.0",
    "react-native-vector-icons": "^7.0.0",
    "rn-placeholder": "^3.0.0"
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
    "@types/react-native": "^0.63.1",
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
