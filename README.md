# DrinkApp!
###### Search your drink

###### You can find your favorite drink with a simple search

## Steps to use it and modify:
- Clone the repository : `git clone https://github.com/fedegomezdev/DrinkApp.git drinkapp`
- Entry to the folder and download dependecies : `cd drinkapp && npm install`
- Install React Native Cli: `npm i -g react-native-cli`
- Run on android : `npx react-native run-android`
- Run on Ios : `npx react-native run-ios`





## Dependencies:
- "@react-native-community/masked-view": "^0.1.6",
- "@types/react-native-snap-carousel": "^3.7.4",
- "axios": "^0.19.2",
- "react": "16.9.0",
- "react-native": "0.61.5",
- "react-native-gesture-handler": "^1.5.3",
- "react-native-reanimated": "^1.7.0",
- "react-native-safe-area-context": "^0.6.4",
- "react-native-screens": "^2.0.0-alpha.32",
- "react-navigation": "^4.1.0",
- "react-navigation-stack": "^2.0.16",
- "react-redux": "^7.1.3",
- "redux": "^4.0.5",
- "redux-thunk": "^2.3.0"
- "typescript": "^3.7.5"

<p align="center" style="margin-right:20">
  <img src="/src/assets/images/Screenshot_1581897109.png" width="200"  title="Home">
  <img src="/src/assets/images/Screenshot_1581897112.png" width="200" alt="Search">
  <img src="/src/assets/images/Screenshot_1581897131.png" width="200" alt="Searching drink">
</p>




## How to Improve application performance
#### Images:
- Reduce image size
- Convert images to WebP format
- Use PNG instead of JPEG format
- Save in cache

#### Optimize Json Data:
- Convert JSON data into simple objects before rendering because Javascript processes JSON slowly.

#### Solve Memory leak problem:
- Utilize scrolling lists like SectionList, FlatList, or VirtualizedList instead of Listview. Additionally, the scrolling list helps to smooth the infinite scroll pagination.