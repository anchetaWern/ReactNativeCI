# ReactNativeCI

A sample React Native app showing how to use Visual Studio App Center and Bitrise as a Continuous Integration server.

This branch contains the starter project of the Getting started with continuous integration in React Native series.

_Note: the React Native code in this repo may be a little bit outdated and won't run immediately after you've followed the setup instructions. Be sure to refactor the code to use the more recent React Native syntax if it doesn't run for you._

## Prerequisites

-   React Native development environment

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
  - `package.json`
  - `fileTransformer.js`

4. Install the packages and link them:

```
yarn install
react-native link
```

5. Run the app:

```
react-native run-android
react-native run-ios --simulator="iPhone 5s"
```

6. Run the snapshot test:

```
yarn test
```

## Built With

-   [React Native](https://facebook.github.io/react-native/)
