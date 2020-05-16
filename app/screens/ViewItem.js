import React from 'react';
import { Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default class ViewItem extends React.Component {

    constructor(props){
        super(props);

        this.props = props;
    }
    render() {
        return (
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={{uri:this.props.route.params.image}}/>
            </ImageZoom>
        )
    }
}