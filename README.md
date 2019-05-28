# ReactNativeCI

A sample React Native app showing how to use Visual Studio App Center and Bitrise as a Continuous Integration server.

This branch contains the final output of the Getting started with continuous integration in React Native series.

Full tutorial is available at: 

- [https://pusher.com/tutorials/continuous-integration-react-native-part-1](https://pusher.com/tutorials/continuous-integration-react-native-part-1)
- [https://pusher.com/tutorials/continuous-integration-react-native-part-2](https://pusher.com/tutorials/continuous-integration-react-native-part-2)
- [https://pusher.com/tutorials/continuous-integration-react-native-part-3](https://pusher.com/tutorials/continuous-integration-react-native-part-3)

_Note: the React Native code in this repo may be a little bit outdated and won't run immediately after you've followed the setup instructions. Be sure to refactor the code to use the more recent React Native syntax if it doesn't run for you._

## Prerequisites

-   React Native development environment
-   Bitrise Account

## Getting Started

1.  Clone the repo:

```
git clone https://github.com/anchetaWern/ReactNativeCI.git
cd ReactNativeCI
```

2.  On another directory, create a new React Native app on another directory:

```
react-native init ReactNativeCI --version react-native@0.50
```

3. Copy the following files and folders from the repo you cloned over to the React Native project you created:

  - `App.js`
  - `src`
  - `e2e`
  - `fileTransformer.js`

4. Upgrade your project to use Gradle 3 by updating the following files. Use [this commit](https://github.com/anchetaWern/ReactNativeCI/commit/0a5a6570154a1b8ae78881eaf48f99b76043de57) as basis:

- `android/build.gradle`
- `android/gradle/wrapper/gradle-wrapper.properties`

5. Install additional packages and link them:

```
yarn add redux-saga react-native-simple-store redux react-redux prop-types
react-native link
```

6. Run the app:

```
react-native run-android
react-native run-ios
```

7. Install Detox and Mocha:

```
yarn add detox@8.1.6 mocha@4.0.1 --dev
```

8. Update the following files to match what's on [this commit](https://github.com/anchetaWern/ReactNativeCI/commit/2eabf21e8ec78c23657bf84baa2266e2e90b0768):

- `android/settings.gradle`
- `android/build.gradle`
- `android/app/build.gradle`
- `android/app/src/androidTest/java/com/reactnativeci/DetoxTest.java`

9. Add the Detox config to the `package.json` file:

```
"detox": {
  "configurations": {
    "ios.sim.debug": {
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/reactnativeci.app",
      "build": "xcodebuild -project ios/reactnativeci.xcodeproj -scheme reactnativeci -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      "type": "ios.simulator",
      "name": "iPhone 5s"
    },
    "android.emu.debug": {
      "binaryPath": "./android/app/build/outputs/apk/debug/app-debug.apk",
      "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
      "type": "android.attached",
      "name": "192.168.57.101:5555" 
    }
  },
  "test-runner": "mocha",
  "specs": "e2e",
  "runner-config": "e2e/mocha.opts"
}
```

`android.attached` is for Genymotion emulator while `android.emulator` is for Android emulator installed with Android Studio.

Use `avdmanager list avd` or `xcrun simctl list` to find out which simulators or emulators are available on your machine.

10. Build the app with Detox:

```
detox build -c android.emu.debug --reuse
detox build -c ios.sim.debug --reuse
```

11. Run the app:

```
react-native run-android
react-native run-ios --simulator="iPhone 5s"
```

12. Run the end-to-end tests:

```
detox test -c android.emu.debug --reuse
detox test -c ios.sim.debug --reuse
```

13. Update `jest` config in `package.json` file:

```
	"jest": {
		"preset": "react-native",
		"moduleNameMapper": {
			"^.+\\.(jpg|jpeg|png)$": "RelativeImageStub"
		},
		"transform": {
			"\\.(jpg|jpeg|png|gif)$": "<rootDir>/fileTransformer.js"
		},

		"testMatch": ["<rootDir>/__tests__/*"]
	},
```

14. Run the snapshot test:

```
yarn test
```

15. Setup app on Bitrise (see full tutorial).
16. Commit your changes and push to the repo:

```
git add .
git commit -m "initialize project"
git push origin --all
```

## Built With

-   [React Native](https://facebook.github.io/react-native/)
-   [Bitrise](https://www.bitrise.io/)

## Donation

If this project helped you reduce time to develop, please consider buying me a cup of coffee :)

<a href="https://www.buymeacoffee.com/wernancheta" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
