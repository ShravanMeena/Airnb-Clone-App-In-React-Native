import React, { Component } from 'react'
import {ScrollView ,View, Text, Image, StyleSheet} from 'react-native'

export default class Category extends Component {
    render() {
        return (
                   <View style={{height:130, width:130, marginLeft:20, borderWidth:0.5, borderColor:'#dddddd'}}>
                                        <View style={{flex:2}}>
                                              <Image style={{height:null,width:null,flex:1,resizeMode:'cover'}}
                                                source={this.props.imageUri}
                                            />
                                        </View>
                                        <View style={{flex:1, paddingLeft:10,paddingTop:10}}>
                                            <Text>{this.props.name}</Text>
                                        </View>
                                    </View>
        )
    }
}
