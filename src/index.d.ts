declare module 'rn-faded-scrollview' {
    import * as React from 'react';
    import * as ReactNative from 'react-native';

    type PropsWithoutDefault = {
        isCloseToEnd?: (...args: any) => any;
        isCloseToStart?: (...args: any) => any;
        innerRef?: Ref<ScrollView>;
        startFadeStyle?: StyleProp<ViewStyle>;
        endFadeStyle?: StyleProp<ViewStyle>;
        dividerStyle?: StyleProp<ViewStyle>;
        containerStyle?: StyleProp<ViewStyle>;
    };
    export interface RNFadedScrollViewProps extends ReactNative.ViewProps {
        fadeColors: string[];
        scrollThreshold?: number;
        allowDivider?: boolean;
        allowStartFade?: boolean;
        allowEndFade?: boolean;
        fadeSize?: number;
        isRtl?: boolean;
        scrollEventThrottle?: number;
    }

    type Props = ScrollViewProps &
        Partial<RNFadedScrollViewProps> &
        PropsWithoutDefault;
    export class RNFadedScrollView extends React.Component<Props> { }

    export default RNFadedScrollView;
}