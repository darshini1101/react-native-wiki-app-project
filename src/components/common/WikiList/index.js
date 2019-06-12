import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Touchable } from '../../common';
import styles from './styles';
import { articlesSelected } from '../../../actions';

class WikiList extends Component {  
    showModal = (selected) => {
        this.props.articlesSelected(selected);
    }

    render() {
        return (
            <View style={styles.articleContainer}>
                <FlatList 
                    data={this.props.articles}
                    renderItem={({ item }) =>
                        <Touchable onPress={() => this.showModal(item)} text={item.displaytitle} />
                    }
                    keyExtractor={(article) => article.pageid.toString()}
                />
            </View>
           
        );
    }
}

export default connect(null, { articlesSelected })(WikiList);
