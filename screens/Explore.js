
import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, StyleSheet,ScrollView,Dimensions } from 'react-native'
import Category from './components/Explore/Category'
import Home from './components/Explore/Home'

const {height, width} = Dimensions.get('window')

 class Explore extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}> 
                <View style={{flex:1}}>
                   <View style={{borderBottomWidth:1, backgroundColor:'white',borderBottomColor:'#dddddd'}}> 
                        <View style={{
                        flexDirection:"row",padding:10,backgroundColor:'white',
                        // marginHorizontal:'20',
                        shadowOffset:{width:0,height:0},
                        shadowColor:'black',
                        shadowOpacity: 0.2,
                        elevation:1
                    }}>
                           <Image style={styles.tinyLogo} source={{
                    uri: 'data:image/png;base64,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',
                    }}
                />    
                        <TextInput 
                        underlineColorAndroid='transparent'
                        placeholder="Try Jaipur"
                        placeholderTextColor='grey'
                        style={{
                            flex:1,fontWeight:'700',backgroundColor:'white',
                            marginLeft:10
                        }}
                        />
                    </View>
                   </View>
                   <ScrollView scrollEventThrottle={16}>
                        <View style={{flex:1, backgroundColor:'white', paddingTop:20,paddingBottom:10    }}>   
                            <Text style={{flex:1, paddingHorizontal:20,fontSize:24,fontWeight:'700'}}>
                                What can we help you find, Shravan?
                            </Text>
                            <View style={{height:130,marginTop:20}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                  <Category name = "Home"
                                        imageUri = {
                                            require('../img/1.jpg')
                                        }
                                        />

                                        < Category name = "Experiences"
                                        imageUri = {
                                            require('../img/2.jpg')
                                        }
                                        />

                                            < Category name = "Restaurents"
                                            imageUri = {
                                                require('../img/3.jpg')
                                            }
                                            />
                                </ScrollView>
                            </View>
                            <View style={{marginTop:40, paddingHorizontal:20}}>
                                <Text style={{fontSize:24, fontWeight:'700'}}>
                                    Introducing Homto Plus
                                </Text>
                                <Text style={{marginTop:10, fontWeight:'100'}}>
                                    A new selection of home verified for quality & confort
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image style={{flex:1, height:null, width: null, resizeMode:'cover',borderRadius:5,borderWidth:1,borderColor:'#dddddd'}} 
                                        source={require('../img/4.jpg')}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{paddingTop:30, backgroundColor:'white'}}>
                            <Text style={{fontSize:24, fontWeight:'700',paddingHorizontal:20}}>
                                Home arround the world
                            </Text>
                            <View style={{paddingHorizontal:20, marginTop:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                                <Home width={width} name="The Cozy Place" type="Private Room - 2 Beds" price="82" rating={4} imageUri={require('../img/1.jpg')}/>
                                <Home width={width} name="The Harvard Place" type="Personal Room - 2 Beds" price="62" rating={3} imageUri={require('../img/2.jpg')}/>
                                <Home width={width} name="The Pincity Place" type="Family Room - 3 Beds" price="92" rating={5} imageUri={require('../img/3.jpg')}/>
                                <Home width={width} name="The Manipal Place" type="Single Room - 1 Beds" price="89" rating={4} imageUri={require('../img/4.jpg')}/>
                               
                        </View>
                        </View>

                   </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 20,
        height: 20,
        marginTop:16,
        marginLeft:16,
    }
});

export default Explore