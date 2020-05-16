import React from 'react'
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native'

export default class SearchComponent extends React.Component {
    render() {
        return(
            <SearchBar
                placeholder="Search for Restaurand"
                lightTheme={true}
                containerStyle={styles.containerStyle}
                inputContainerStyle = {styles.inputContainerStyle}
            />
        );
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: '#fff',
        borderWidth:0,
        borderColor:'#fff',
        shadowColor: 'white', //no effect
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    inputContainerStyle:{
        backgroundColor:'#f1f1f2'
    }
});