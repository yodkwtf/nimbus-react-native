## What is React Native?

- A framework for building native apps using React
- Created by Facebook in 2015
- Lets you create mobile apps for iOS and Android using JavaScript
- Technically a Hybrid App but uses native mobile components

### Native vs Hybrid Apps

##### Native

- Create 2 different apps, one for iOS using Objective C or Swift and one for Android using Java or Kotlin
- Great user experience
- Expensive to develop and maintain since dual work

##### Hybrid

- Create 1 app using a single codebase
- Examples: Ionic, Cordova, PhoneGap
- Cheaper to develop and maintain
- Not as great user experience since we just create a web app that runs on mobile

React Native is a hybrid app but uses native components. So we get the best of both worlds. React Native acts as a bridge between JavaScript and native platforms. It takes our JavaScript code and converts it to native code.

## Expo

- External platform that helps us run and build React Native apps
- Not compulsory but makes it easier to develop React Native apps
- If not for expo, we would need to install Android Studio and Xcode to run our apps on simulators

## Environment Setup

- Get the latest version of Node.js from [Download - Node.js](https://nodejs.org/en/)
- Install Expo CLI using
  ```sh
  npm install -g expo-cli
  ```
- Install Expo app on your phone from the App Store or Play Store
- Move to the directory where you want to create your project
  ```sh
  cd Desktop
  ```
- Create a new project
  ```sh
  npx create-expo-app my-app
  ```
- Move to the project directory
  ```sh
  cd my-app
  ```
- Start the project
  ```sh
  npm start # you can also use: expo start
  ```
- Scan the QR code using the Expo app on your phone to preview the app

> Note: Your phone and computer should be on the same network for this to work.

We can also create a custom setup for our app using React Native CLI. However, this can get a bit complicated and we would need to install a lot of different dependencies. So we will stick to Expo for now.

## Developer Setup

#### Install a Linter

- Get a linter to make sure our code is clean and consistent
  ```sh
  npm i eslint --save-dev # dev dependency
  ```
- Setup eslint
  ```sh
  npx eslint --init
  ```
- Choose the required options and install the required dependencies

#### Install React Native Community ESLint Config

- Install the plugin
  ```sh
  npm i @react-native-community/eslint-config --save-dev
  ```
- Add any additional rules to the `.eslintrc.js` file

#### Install Prettier

- Install prettier
  ```sh
  npm i --save-dev --save-exact prettier
  ```
- Create a `.prettierrc.js` file and add the following code
  ```js
  module.exports = {
    bracketSpacing: true,
    jsxBracketSameLine: false,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'none',
  };
  ```

We can find out more about setting up these configurations files via their documentation.

#### ESLint and Prettier Extension

- Install the ESLint and Prettier extension in your code editor
- Add the following code to the `settings.json` file if needed
  ```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  ```

#### Script to Run ESLint

- Open the `package.json` file and add the following script
  ```json
  "scripts": {
    "lint": "eslint ."
  }
  ```
- Run the script
  ```sh
  npm run lint
  ```

#### Debugging

- Depends on how the app is running
- If running on a simulator, we can use the developer tools
- If running on a physical device, we can use the developer tools or use the `console.log()` method
