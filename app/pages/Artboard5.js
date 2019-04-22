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
import {Header} from '../components/Header';

import BG from '../../src/Imag/Artboard5/BG.png';
import ButtonBGO from '../../src/Imag/Artboard5/ButtonBGO.png';
import ButtonBGS from '../../src/Imag/Artboard5/ButtonBGS.png';
import ButtonBGG from '../../src/Imag/Artboard5/ButtonBGG.png';
import Arrow from '../../src/Imag/Artboard5/Arrow.png';

class Artboard5 extends Component{

    constructor(props) {
         super()
    }

    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                {/* HEADER */}
                <Header title=" "/>
                

                <View style={{marginHorizontal:wp('15%'), marginVertical:wp('14%'), justifyContent:'center', alignItems:'center'}}>

                    <ImageBackground source={ButtonBGO} style={{justifyContent:'center', alignItems:'center', width:wp('66.5%'), height:hp('13.4%'), resizeMode:'contain', marginBottom:hp('5%'), opacity:0.9}}>
                            <Text style={{color:'white', fontSize:wp('7%'), fontWeight:'bold'}}>العادي</Text>
                            <Text style={{color:'black', fontSize:wp('5%'), fontWeight:'bold'}}>باص عادي - بدون وجبه</Text>
                            <Image source={Arrow} style={{position:'relative', top:hp('-4.5%'), left:wp('-26%'), width:wp('3%'), height:wp('3%'), resizeMode:'contain'}}/>
                    </ImageBackground>

                    <ImageBackground source={ButtonBGS} style={{width:wp('66.5%'), height:hp('13.4%'), resizeMode:'contain', justifyContent:'center', alignItems:'center', marginBottom:hp('5%'), opacity:0.9}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:wp('7%'), fontWeight:'bold'}}>الكلاسيكك</Text>
                            <Text style={{color:'black', fontSize:wp('5%'), fontWeight:'bold'}}>باص عادي - بدون وجبه</Text>
                            <Image source={Arrow} style={{position:'relative', top:hp('-4.5%'), left:wp('-26%'), width:wp('3%'), height:wp('3%'), resizeMode:'contain'}}/>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={ButtonBGG} style={{width:wp('66.5%'), height:hp('13.4%'), resizeMode:'contain', justifyContent:'center', alignItems:'center'}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:wp('7%'), fontWeight:'bold'}}>الذهبية</Text>
                            <Text style={{color:'black', fontSize:wp('4.5%'), fontWeight:'bold', height:hp('3%')}}>باص فاخر - طيران</Text>
                            <Text style={{color:'black', fontSize:wp('4.5%'), fontWeight:'bold', height:hp('3%')}}>مع وجبه مميزه</Text>
                            <Image source={Arrow} style={{position:'relative', top:hp('-5.5%'), left:wp('-26%'), width:wp('3%'), height:wp('3%'), resizeMode:'contain'}}/>
                        </View>
                    </ImageBackground>
                    
                </View>

            </ImageBackground>
         )
    }
}

export default Artboard5

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
    pageBG:{
        flex: 1,
        resizeMode: 'stretch',
    },
    package:{
        width:wp('68%'),
        height:hp('12%'),
        resizeMode:'contain',
        marginBottom:hp('4%'),
    }
});