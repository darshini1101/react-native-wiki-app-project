import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Touchable = ({ text, onPress }) => {
    return (
        <View style={styles.articleStyle}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.articleText}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
 };
 
export { Touchable };
