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

import BG from '../../src/Imag/Artboard6/BG.png';
import ArrowRight from '../../src/Imag/Artboard6/ArrowRight.png';
import ArrowsS from '../../src/Imag/Artboard6/ArrowsS.png';
import ButtonBG from '../../src/Imag/Artboard1/ButtonBG.png';

class Artboard6 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                {/* HEADER */}
                <Header title="الحجز"/>
                
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <View style={{marginTop:hp('2%'), borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('84%'), height:hp('5%'), flexDirection:'row'}}>                   
                        <TouchableOpacity disabled={true} style={{flexDirection:'row', width:wp('42%'), height:hp('4.9%'), backgroundColor:'rgba(152, 145, 128, 0.7)', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{textAlignVertical:'center', textAlign:'center', fontSize:wp('4%'), fontWeight:'500', color:'white'}}> ذهاب وعودة </Text>
                            <Image source={ArrowsS} style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain'}}/>                        
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row', width:wp('42%'), height:hp('4.9%'), backgroundColor:'rgba(255, 255, 255, 0.7)', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{textAlignVertical:'center', textAlign:'center', fontSize:wp('4%'), fontWeight:'500', color:'#989180'}}> ذهاب </Text>
                            <Image source={ArrowRight} style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain'}}/>                        
                        </TouchableOpacity>
                    </View>
                </View>
                    
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('1%')}}>
                   
                    <View style={{width:wp('84%'), justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <View style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:wp('4.2%'), color:'#7E7560', paddingTop:wp('2%'), fontWeight:'700'}}> تاريخ الذهاب </Text>
                            <Text style={{fontSize:wp('4.5%'), color:'black', paddingVertical:wp('2%'), fontWeight:'700'}}> العليا  </Text>
                            <Text style={{fontSize:wp('4.5%'), color:'black', paddingBottom:wp('2%'), fontWeight:'700'}}> الرياض  </Text>
                        </View>
                        <View style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:wp('4.2%'), color:'#7E7560', paddingTop:wp('2%'), fontWeight:'700'}}> تاريخ العودة </Text>
                            <Text style={{fontSize:wp('4.5%'), color:'black', paddingVertical:wp('2%'), fontWeight:'700'}}> العليا  </Text>
                            <Text style={{fontSize:wp('4.5%'), color:'black', paddingBottom:wp('2%'), fontWeight:'700'}}> المدينة  </Text>
                        </View>
                        <View style={{borderRadius:wp('4%'), position:'absolute', justifyContent:'center', alignItems:'center', backgroundColor:'#7E7560', width:wp('8%'), height:wp('8%')}}>
                            <Image source={ArrowsS} style={{resizeMode:'contain', width:wp('6.5%'), height:wp('6.5%')}}/>
                        </View>
                    </View>

                    <View style={{width:wp('84%'), margin:hp('1%'), justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <View style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:wp('4.2%'), color:'#7E7560', paddingTop:wp('1%'), fontWeight:'700'}}> تاريخ الذهاب </Text>
                            <Text style={{fontSize:wp('3.8%'), color:'black', paddingBottom:wp('1%'), fontWeight:'700'}}> الجمعة 25 يناير 2019 </Text>
                        </View>
                        <View style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:wp('4.2%'), color:'#7E7560', paddingTop:wp('1%'), fontWeight:'700'}}> تاريخ العودة </Text>
                            <Text style={{fontSize:wp('3.8%'), color:'black', paddingBottom:wp('1%'), fontWeight:'700'}}> السبت 26 يناير 2019 </Text>
                        </View>
                    </View>

                    <View style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('84%'), justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:wp('4.2%'), color:'#7E7560', paddingTop:wp('1%'), fontWeight:'700'}}> عدد الأفراد </Text>
                        <Text style={{fontSize:wp('4.2%'), color:'black', paddingBottom:wp('1%'), fontWeight:'700'}}> فرد واحد </Text>
                    </View>
                       
                    <View style={{width:wp('84%'), margin:hp('1%'), justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <TouchableOpacity style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:wp('4.2%'), marginBottom:hp('3.5%'), color:'#7E7560', paddingTop:wp('1%'), fontWeight:'700'}}> خصم خاص </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:wp('4.2%'), marginBottom:hp('3.5%'), color:'#7E7560', paddingTop:wp('1%'), fontWeight:'700'}}> بروموكود </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={{margin:hp('2%'), width:wp('38%'), height:hp('6.2%'), borderRadius:wp('4%')}}>
                            <ImageBackground source={ButtonBG} style={{flex:1, resizeMode:'contain', justifyContent:'center'}}>
                                <Text style={styles.buttonText}> موافق </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
                    


            </ImageBackground>
         )
    }
}

export default Artboard6

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