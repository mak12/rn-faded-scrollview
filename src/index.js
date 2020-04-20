import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient"
const defaultFadeColors = ['rgba(229, 229, 229, 0.18)', 'rgba(206, 201, 201, 0.6)', 'rgba(206, 201, 201, 0.9)'];
export default class RNFadedScrollView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // We don't know the size of the content initially, and the probably won't instantly try to scroll, 
            // so set the initial content height and width to 0
            scrollHeight: 0,
            scrollWidth: 0,
            availableWidth: 0,
            availableHeight: 0,
            allowStartFade: false,
            allowEndFade: true
        }
    }


    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ scrollHeight: contentHeight, scrollWidth: contentWidth });
    };

    _onLayout(event) {
        const containerWidth = event.nativeEvent.layout.width;
        const containerHeight = event.nativeEvent.layout.width;

        this.setState({ availableWidth: containerWidth, availableHeight: containerHeight })
    }

    isEndFadeAllowed() {
        const sizeToCompare = this.props.horizontal ? this.state.scrollWidth : this.state.scrollHeight;
        const availableSpace = this.props.horizontal ? this.state.availableWidth : this.state.availableHeight;
        return this.props.allowEndFade ? sizeToCompare > availableSpace : false;
    }

    ifCloseToStart({ layoutMeasurement, contentOffset, contentSize }) {
        return this.props.horizontal ? contentOffset.x < 10 : contentOffset.y < 10;
    }
    isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
        return this.props.horizontal ? layoutMeasurement.width + contentOffset.x >= contentSize.width - 10 : layoutMeasurement.height + contentOffset.y >= contentSize.height - 10;
    }

    onScrolled = (e) => {
        if (this.props.allowStartFade) {
            if (this.ifCloseToStart(e.nativeEvent)) {
                this.setState({ allowStartFade: false })
            }
            else {
                this.setState({ allowStartFade: true })
            }
        }
        if (this.props.allowEndFade) {
            if (this.isCloseToBottom(e.nativeEvent)) {
                this.setState({ allowEndFade: false })
            }
            else {
                this.setState({ allowEndFade: true })
            }
        }
        if (this.props.onScroll) {
            this.props.onScroll();
        }
    }

    //get start fade view
    getStartFaade() {
        return (this.props.horizontal ?
            <LinearGradient
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                style={{ position: 'absolute', start: 0, width: this.props.fadeSize, height: '100%' }}
                colors={this.props.fadeColors}
                pointerEvents={'none'}
            /> :
            <LinearGradient
                start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }}
                style={{ position: 'absolute', top: 0, width: '100%', height: this.props.fadeSize }}
                colors={this.props.fadeColors}
                pointerEvents={'none'}
            />
        )
    }

    getEndFade() {
        return (this.props.horizontal ?
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={{ position: 'absolute', end: 0, width: this.props.fadeSize, height: '100%' }}
                colors={this.props.fadeColors}
                pointerEvents={'none'}
            />
            :
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                style={{ position: 'absolute', bottom: 0, width: '100%', height: 20 }}
                colors={this.props.fadeColors}
                pointerEvents={'none'}
            />)
    }

    render() {
        const endFadeEnable = this.isEndFadeAllowed();
        return (
            <View style={[styles.container, { flexDirection: this.props.horizontal ? "row" : "column" }]}
                onLayout={this._onLayout.bind(this)}>
                <ScrollView
                    {...this.props}
                    style={[styles.scrollViewStyle, this.props.style]}
                    onContentSizeChange={this.onContentSizeChange}
                    scrollEventThrottle={16}
                    onScroll={this.onScrolled}
                >
                    {this.props.children}
                </ScrollView>
                {(this.state.allowStartFade) && this.getStartFaade()}
                {(endFadeEnable && this.state.allowEndFade) && this.getEndFade()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    scrollViewStyle: {
        flex: 1
    }
});
RNFadedScrollView.propTypes = {
    allowStartFade: PropTypes.bool,
    allowEndFade: PropTypes.bool,
    fadeSize: PropTypes.number,
    fadeColors: PropTypes.array,
}
RNFadedScrollView.defaultProps = {
    allowStartFade: false,
    allowEndFade: true,
    fadeSize: 20,
    fadeColors: defaultFadeColors
}
