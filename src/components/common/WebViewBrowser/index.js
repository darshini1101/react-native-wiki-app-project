import React from 'react';
import { View, WebView } from 'react-native';
import styles from './styles';

const WebViewBrowser = ({ source }) => {
    return (
        <View style={styles.webContainer}>
            <WebView source={{ uri: source }} />
        </View>
    );
};

export { WebViewBrowser };

