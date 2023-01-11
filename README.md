# rn-faded-scrollview
A simple and customisable React Native component that allows you to add fade effect in ScrollView at both ends.

Vertical Scroll             |  Horizontal Scroll
:-------------------------:|:-------------------------:
![](assets/vertical.gif) | ![](assets/horizontal.gif)

# Sponsor
<a href="https://www.buymeacoffee.com/malikkawee" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## Installation
This library relies on [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient). Follow setup instructions of linear gradient.

And now finally run in your project directory.

`npm install rn-faded-scrollview` 

OR

`yarn add rn-faded-scrollview` 

## Simple

```javascript
import RNFadedScrollView from 'rn-faded-scrollview';

// Within your render function
<RNFadedScrollView
        allowStartFade={true}
        horizontal={false}
        fadeSize={10}
        style={styles.backgroundStyle}
        bounces={false}
      >
   //other views      
</RNFadedScrollView>

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1
  }
});
```

## Documentation
This library accepts all the props of [ScrollView](https://reactnative.dev/docs/scrollview) and some additional props.
### Props
| Name                      | Description                              | Default     | Type    |
|---------------------------|------------------------------------------|-------------|---------|
| allowStartFade               | Add fade at the start of ScrollView  | false           | Boolean  |
| allowEndFade               | Add fade at the end of ScrollView      | true       | Boolean  |
| fadeSize | Fade size i.e( width incase of horizontal and height incase of vertical ScrollView) | 20     | Number  |
| fadeColors          | Colors for fade effect        | ['rgba(229, 229, 229, 0.18)', 'rgba(206, 201, 201, 0.6)', 'rgba(206, 201, 201, 0.9)']     | Array  |
| scrollThreshold          | Threshold to control fade hide/show when it reaches start or end        | 10     | Number  |
| scrollEventThrottle          | This controls how often the scroll event will be fired while scrolling (as a time interval in ms)        | 16     | Number  |
| allowDivider          | Allow divider at fade end.      | false    | Boolean  |
| isRtl          | For RTL Layouts      | false    | Boolean  |
| onContentSizeChange          | onContentSizeChange call back added, function will return contentWidth and contentHeight      |     | Function  |

### Styling
For styling pass these props.

`containerStyle`, `startFadeStyle`, `endFadeStyle` and `dividerStyle`.

### Events
| Name                      | Callback param                              | Description     |
|---------------------------|------------------------------------------|-------------|
| isCloseToEnd               | Boolean  | if scroll is close to end or not.           |
| isCloseToStart               | Boolean      | if scroll is close to start or not.   |

## License
MIT License

Copyright (c) 2023 Malik Abdul Kawee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
