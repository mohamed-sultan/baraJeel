import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { createDrawerNavigator } from 'react-navigation';
import {Header} from '../components/Header';

import ContentDrawerCompnent from '../components/ContentDrawerCompnent';

import BG from '../../src/Imag/Artboard10/BG.png';
import Loc from '../../src/Imag/Artboard10/Loc.png';
import Photo from '../../src/Imag/Artboard10/Photo.png';
import Video from '../../src/Imag/Artboard10/Video.png';
import Send from '../../src/Imag/Artboard10/Send.png';
import Picture from '../../src/Imag/Artboard10/Picture.png';


export class Artboard11 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                
                {/* HEADER */}
                <Header title="المحادثة"/>

                <View style={{justifyContent:'center', alignItems:'center', height:hp('13%'), width:wp('100%'), backgroundColor:'white', borderTopColor:'#ECECEC', borderTopWidth:hp('0.4%'), marginTop:100}}>
                    <View style={{height:hp('6.5%'), marginRight:wp('10%'), justifyContent:'center', alignItems:'center'}}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="ادخل رسالة"
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="username"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={{height:hp('6.5%'), width:wp('100%'), flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:wp('2%')}}>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Image source={Picture} style={[styles.imageSend, {marginHorizontal:wp('2.5')}]}/>
                            <Image source={Photo} style={[styles.imageSend, {marginHorizontal:wp('2.5')}]}/>
                            <Image source={Video} style={[styles.imageSend, {marginHorizontal:wp('2.5')}]}/>
                            <Image source={Loc} style={[styles.imageSend, {marginHorizontal:wp('2.5')}]}/>
                        </View>
                        <View style={{height:wp('8%'), width:wp('8%'), justifyContent:'center', alignItems:'center', borderRadius:wp('4%'), backgroundColor:'#CC964B'}}>
                            <Image source={Send} style={styles.send}/>
                        </View>
                    </View>
                </View>

            </ImageBackground>
         )
    }
}

export default RootNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Artboard11,
            navigationOption:{
                header: null, 
            }
        },   
    },
    {
        showsVerticalScrollIndicator: true,
        contentComponent:props => <ContentDrawerCompnent {...props}/> ,
        drawerPosition: 'right',
        drawerWidth:wp('85%'),
    }
)

const styles = StyleSheet.create({
    header:{
        height:hp('7%'),
        backgroundColor:"#A07532",
        justifyContent:'space-between',
        alignItems:'center',
        padding:wp('5%'),
        flexDirection:'row'
    },
    image4_5:{
        width:wp('4.5%'), 
        height:wp('4.5%'), 
        resizeMode:'contain'
    },
    imageSend:{
        width:wp('5%'), 
        height:wp('5%'), 
        resizeMode:'contain'
    },
    rowCenter:{
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row'
    },
    textHeader:{
        color:'white', 
        fontSize:wp('4.5%'), 
        marginHorizontal:wp('3%'), 
        fontWeight:'bold'
    },
    image6_5:{
        width:wp('6.5%'), 
        height:wp('6.5%'), 
        resizeMode:'contain'
    },
    textInput:{
        width:wp('80%'), 
        padding:0, 
        fontSize:wp('3.8%'), 
        fontWeight:'500', 
        color:'black'
    },
    pageBG:{
        flex: 1,
        resizeMode: 'contain',
    },
    send:{
        width:wp('5%'),
        height:wp('5%'),
        resizeMode:'contain',
    }
});