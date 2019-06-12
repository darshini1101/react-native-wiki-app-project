//Import
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Header, Input, ModalView } from '../../components/common';
import WikiList from '../../components/common/WikiList';
import styles from './styles';
import { articlesSearch } from '../../actions';

class WikiView extends Component {

    //Call Action Creator
    //Dispatch action  using  Action Creator 
    fetchArticles = (event) => {
        event.persist();
        this.props.articlesSearch(event.nativeEvent.text);
    }
e
    renderContent = () => {
        if (this.props.uri !== '') return <ModalView uri={this.props.uri} />;
        return <WikiList articles={this.props.data} />;
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Header headerText="Wiki App" />
                <Input onChangeText={this.fetchArticles} placeholder="Type Here..." />
                {this.renderContent()}
            </View>
        );
    }
}

//Maps state to  as props
const mapStateToProps = state => {
    return {
        word: state.wikiView.word,
        data: state.wikiView.data,
        uri: state.wikiView.uri
    };
};

//Connect Componet with redux
export default connect(mapStateToProps, { articlesSearch })(WikiView);
