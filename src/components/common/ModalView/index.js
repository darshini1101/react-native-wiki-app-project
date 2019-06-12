import React, { Component } from 'react';
import { View, Modal, Button } from 'react-native';
import styles from './styles';
import { WebViewBrowser } from '../../common';

class ModalView extends Component {
    state = {
        modalVisible: true
    };

    modalClose = () => {
        this.setState({
            modalVisible: false
        });
    }

    render() {
        return (
            <View style={styles.styleContainer}>
                <Modal visible={this.state.modalVisible} onDismiss={this.props.onDismiss}>
                    <View style={{ flex: 1 }}>
                        <WebViewBrowser source={this.props.uri} />
                    </View>
                    <View>
                        <Button
                            style={styles.buttonStyle}
                            onPress={this.modalClose} title="close" 
                        />
                    </View>
                </Modal>
            </View>
        );
    }
}

export { ModalView };
