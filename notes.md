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

## Layout Props

In React Native, we use Flexbox for layout. Flex 1 means that the component will take up all the available space. We can also use `flexDirection` to change the direction of the flexbox.

```js
const ComponentName = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Component</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: "dodgerblue",
    flex: 1,
  },
});

export default ComponentName;
```

> Note: No style values in React Native don't have units. So we don't need to use `px` or `rem`. They have a default unit of `dp` which is a device-independent pixel.

## Using Icons

There are a few ways to use icons in React Native. We are going to be using a library called `react-native-vector-icons` which comes pre-installed with Expo. However, it can also be installed separately.

#### Get the Icon in your project

- To get the list of icons, refer to [Expo Icons](icons.expo.fyi)
- Find the icon you want to use and click on it
- Follow the specified steps
- Import the icon in your component
  ```js
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  ```
- Use the icon in your component
  ```js
  <MaterialCommunityIcons name="email" size={100} color="dodgerblue" />
  ```

## Lists in React Native

- One of the most common and important components in mobile apps
- 3 types of lists
  - FlatList
  - SectionList
  - VirtualizedList
- Most of the requirements are fulfilled by FlatList and SectionList

#### FlatList vs SectionList

- FlatList is used when we have a list of similar items
- Standard list of items

  ```md
  - Apple
  - Banana
  - Orange
  ```

- SectionList is used when we have a collection of multiple list of items
- A list broken up into multiple sections

  ```md
  Fruits

  - Apple
  - Banana
  - Orange

  Vegetables

  - Potato
  - Tomato
  - Onion

  Grains

  - Rice
  - Wheat
  - Corn
  ```

### FlatList

- Renders a list of items
- 2 props are mandatory
  - `data`: An array of data to be rendered
  - `renderItem`: A function that returns the component to be rendered for each item
- Has a bunch of other props that can be used to customize the list

```js
import { FlatList } from "react-native";

const ComponentName = () => {
  const data = ["Apple", "Banana", "Orange"];

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList data={data} renderItem={({ item }) => <Text>{item}</Text>} />
    </SafeAreaView>
  );
};
```

- Can have an array of elements as well as objects as data
- If component to render is complex, we can put it in a separate component and import it
- We can also use the `keyExtractor` prop to specify the key for each item

```js
const data = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
];

<FlatList
  data={data}
  renderItem={({ item }) => <ListItem title={item.name} />}
  keyExtractor={(item) => item.id.toString()}
/>;
```

### SectionList

- Renders a list broken up into sections
- 2 props are mandatory
  - `sections`: An array of sections to be rendered
  - `renderItem`: A function that returns the component to be rendered for each item
- Has a bunch of other props that can be used to customize the list

```js
import { SectionList } from "react-native";

const ComponentName = () => {
  const data = [
    {
      title: "Fruits",
      data: ["Apple", "Banana", "Orange"],
    },
    {
      title: "Vegetables",
      data: ["Potato", "Tomato", "Onion"],
    },
    {
      title: "Grains",
      data: ["Rice", "Wheat", "Corn"],
    },
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <SectionList
        sections={data}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </SafeAreaView>
  );
};
```

- Can only an array of objects as data

### Key Extractor

- Used to specify a unique key for each item
- When working with lists, React needs to know which item has changed, been added, or been removed
- Must be a string

#### How keys are handled under the hood

When an item is updated or deleted, React by instinct will rebuild the app. But if we have a key, React will only update the item that has changed. This helps in improving performance.

### Some Other Props

There are a bunch of other props that can be used to customize the list.

#### `ItemSeparatorComponent`

A component to render between each item just to make UI look better. It works similar to <hr> in HTML.

```js
<FlatList
  data={data}
  renderItem={({ item }) => <ListItem title={item.name} />}
  keyExtractor={(item) => item.id.toString()}
  ItemSeparatorComponent={() => <View style={styles.separator} />}
/>
```

#### `ListEmptyComponent`

A component to render when the list is empty.

```js
<FlatList
  data={data}
  renderItem={({ item }) => <ListItem title={item.name} />}
  keyExtractor={(item) => item.id.toString()}
  ItemSeparatorComponent={() => <View style={styles.separator} />}
  ListEmptyComponent={() => <Text>No items to display</Text>}
/>
```

There's tons to learn about lists. Refer to the documentation for more information.

> Note: There's no need to worry about performance if the list isn't very long. FlatList and SectionList are optimized for performance. FlatList only renders the items that are visible on the screen. It only rerenders when the data changes.
