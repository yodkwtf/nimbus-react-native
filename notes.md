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
    trailingComma: "none",
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

## Native Components

There are a lot of native components that do the same thing but differ in name based on the platform. For example, for images iOS uses `<UIImageView` whereas Android uses `<ImageView>`.

React Native comes as a bridge between both the platforms. We can use `<Image>` and React Native will automatically use the correct component based on the platform.

### Core Components

These are components that basically work like different elements in HTML.

- `<View>`: A container that supports layout with flexbox, style, some touch handling, and accessibility controls. It can be nested inside another view and can have 0 to many children of any type.
- `<Text>`: A component for displaying text. It supports nesting, styling, and touch handling.
- `<Image>`: A component for displaying images. It supports resizing, cropping, and displaying multiple images.
- `<ScrollView>`: A generic scrolling container that can contain multiple components and views. It supports both vertical and horizontal scrolling.
- `<TextInput>`: A component for inputting text into the app via a keyboard. It has an `onChangeText` prop that takes a function to be called every time the text changed. It also has a `value` prop that can be used to set the value of the input.

#### View

Just like `<div>` in HTML and hence it's only visible when it has some content or styling.

## Creating Components

For every new component, first import React and then import the required core components from React Native.

```js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
```

There are a lot of ways to create a component. We can use a function or a class. We will be using Functional Components for now.

```js
const ComponentName = () => {
  return (
    <View>
      <Text>Component</Text>
    </View>
  );
};
```

Make sure to export the component.

```js
export default ComponentName;
```

If we render this right now, it'll be hitting the borders of the screen. We can't just fix this by adding a margin to the component since it'll be different for different devices. So we need to use another component called `<SafeAreaView>`.

```js
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const ComponentName = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Component</Text>
      </View>
    </SafeAreaView>
  );
};
```

Now the component will be rendered inside the safe area of the screen.

## Styling

We don't use CSS in React Native. Instead, we use JavaScript objects to style our components. It's very similar to CSS.

There are a bunch of different ways to apply style but et's start with -

### Inline Styling

Here we pass a style object to the `style` prop of the component.

```js
const ComponentName = () => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "dodgerblue", height: 100, width: 100 }}>
        <Text>Component</Text>
      </View>
    </SafeAreaView>
  );
};
```

### StyleSheet Object

Here we create a StyleSheet object and pass it to the `style` prop of the component.

```js
import { StyleSheet } from "react-native";

const ComponentName = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Component</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    height: 100,
    width: 100,
  },
});

export default ComponentName;
```

Usually, it's best to do this before we export the component. Also, refer to documentation for the list of available props for each component.
