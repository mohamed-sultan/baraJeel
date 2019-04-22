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

import BG from '../../src/Imag/Artboard1/BG.png';
import Logo from '../../src/Imag/Artboard1/Logo.png';
import Call from '../../src/Imag/Artboard1/Call.png';
import Lock from '../../src/Imag/Artboard1/Lock.png';
import ButtonBG from '../../src/Imag/Artboard1/ButtonBG.png';
import ButtonBGS from '../../src/Imag/Artboard1/ButtonBGS.png';
import Facebook from '../../src/Imag/Artboard1/Facebook.png';
import Twitter from '../../src/Imag/Artboard1/Twitter.png';

class Artboard1 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                {/* HEADER */}
                <Header title="الدخول"/>
                
                
                <View style={{justifyContent:'center', alignItems:'center', padding:hp('4%')}}>
                    <Image source={Logo} style={styles.logo}/>
                </View>

                <View style={{marginHorizontal:wp('10%')}}>
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder="رقم الهاتف"
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="username"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={Call} style={styles.image4_5}/>
                    </View>

                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder="كلمة المرور"
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="password"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={Lock} style={styles.image4_5}/>
                    </View>
                    <TouchableOpacity>
                        <Text style={{color:'#585858', textAlign:'left', fontSize:wp('3.5%'), fontWeight:'600'}}> نسيت كلمة المرور </Text>
                    </TouchableOpacity>

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={{marginBottom:hp('4%'), marginTop:hp('1%'), width:wp('38%'), height:hp('6.2%'), borderRadius:wp('4%')}}>
                            <ImageBackground source={ButtonBG} style={{flex:1, resizeMode:'contain', justifyContent:'center'}}>
                                <Text style={styles.buttonText}> تسجيل الدخول </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'space-between', marginBottom:hp('3%'), marginHorizontal:wp('3%'), flexDirection:'row'}}>
                        <TouchableOpacity style={{width:wp('35%'), height:hp('5.8%'), borderRadius:wp('4%')}}>
                            <ImageBackground source={ButtonBGS} style={{flex:1, resizeMode:'contain', justifyContent:'center'}}>
                                <Text style={styles.buttonText}> تخطي التسجيل </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:wp('35%'), height:hp('5.8%'), borderRadius:wp('4%')}}>
                            <ImageBackground source={ButtonBGS} style={{flex:1, resizeMode:'contain', justifyContent:'center'}}>
                                <Text style={styles.buttonText}> عضو جديد </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent:'space-between', marginHorizontal:wp('8%'), flexDirection:'row'}}>
                        <TouchableOpacity>
                            <Image source={Twitter}  style={styles.social}/>
                        </TouchableOpacity>    
                        <TouchableOpacity>
                            <Image source={Facebook} style={styles.social} />
                        </TouchableOpacity>
                    </View>

                </View>

            </ImageBackground>
         )
    }
}

export default Artboard1

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
    logo:{
        width:wp('65%'), 
        height:hp('15%'), 
        resizeMode:'contain'
    },
    inputBorder:{
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:wp('0.3%'), 
        borderRadius:wp('4%'), 
        borderColor:'#F4906B', 
        marginBottom:hp('1.5%'), 
        paddingHorizontal:wp('2%')
    },
    textInput:{
        width:wp('70%'), 
        padding:0, 
        height:hp('5.5%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'#A3A3A3'
    },
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('4.5%'), 
        fontWeight:'600'
    },
    social:{
        width:wp('12%'), 
        height:wp('12%'), 
        resizeMode:'contain'
    },
    pageBG:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    }
});