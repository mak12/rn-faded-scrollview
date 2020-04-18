# rn-faded-scrollview
A simple and customisable React Native component that allows you to add fade effect in ScrollView at both ends.

Vertical Scroll             |  Horizontal Scroll
:-------------------------:|:-------------------------:
![](assets/vertical.gif) | ![](assets/horizontal.gif)

## Installation
This library relies on [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient). Follow setup instructions of linear gradient.

And now finally Run `npm install rn-faded-scrollview` in your project directory.

## Documentation
This library accepts all the props of [ScrollView](https://reactnative.dev/docs/scrollview) and some additional props.
### Props
| Name                      | Description                              | Default     | Type    |
|---------------------------|------------------------------------------|-------------|---------|
| allowStartFade               | Add fade at the start of ScrollView  | false           | Boolean  |
| allowEndFade               | Add fade at the end of ScrollView      | true       | Boolean  |
| fadeSize | Fade size i.e( width incase of horizontal and height incase of vertical ScrollView) | 20     | Number  |
| fadeColors          | Colors for fade effect        | ['rgba(229, 229, 229, 0.18)', 'rgba(206, 201, 201, 0.6)', 'rgba(206, 201, 201, 0.9)']     | Array  |
