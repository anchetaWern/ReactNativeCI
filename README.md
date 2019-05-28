# ReactNativeCI

A sample React Native app showing how to use Visual Studio App Center and Bitrise as a Continuous Integration server.

This branch contains the final output of part two of the Getting started with continuous integration in React Native series.

Full tutorial is available at: 

- [https://pusher.com/tutorials/continuous-integration-react-native-part-1](https://pusher.com/tutorials/continuous-integration-react-native-part-1)
- [https://pusher.com/tutorials/continuous-integration-react-native-part-2](https://pusher.com/tutorials/continuous-integration-react-native-part-2)
- [https://pusher.com/tutorials/continuous-integration-react-native-part-3](https://pusher.com/tutorials/continuous-integration-react-native-part-3)

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

7. Setup your app on [App Center](https://appcenter.ms/) (see full tutorial).

8. Commit your changes and push to repo:

git add .
git commit -m "initialize project"
git push origin --all


## Built With

-   [React Native](https://facebook.github.io/react-native/)
-   [App Center](https://appcenter.ms/)

## Donation

If this project helped you reduce time to develop, please consider buying me a cup of coffee :)

<a href="https://www.buymeacoffee.com/wernancheta" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
