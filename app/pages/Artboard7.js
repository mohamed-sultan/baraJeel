import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import {Header} from '../components/Header';

import BG from '../../src/Imag/Artboard7/BG.png';

class Artboard7 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                {/* HEADER */}
                <Header title="فاتورة"/>

                <View style={{marginHorizontal:wp('8%'), marginTop:hp('8%')}}>                   

                    <View style={{flexDirection:'row', marginBottom:hp('2%')}}>
                        <View style={{borderWidth:wp('0.2%'), backgroundColor:'white', justifyContent:'center', alignItems:'flex-end', marginRight:wp('1%'), paddingRight:wp('2%'), height:hp('5.5%'), width:wp('54%'), borderTopLeftRadius:wp('2%'), borderBottomLeftRadius:wp('2%')}}>
                            <Text style={{color:'black', fontSize:wp('4.2%'), fontWeight:'bold'}}> 2 فرد </Text>
                        </View>
                        <View style={{backgroundColor:'#7E7560', justifyContent:'center', alignItems:'flex-end', paddingRight:wp('2%'), height:hp('5.5%'), width:wp('28%'), borderTopRightRadius:wp('2%'), borderBottomRightRadius:wp('2%')}}>
                            <Text style={{color:'white', fontSize:wp('4.2%'), fontWeight:'bold'}}> عدد الافراد </Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', marginBottom:hp('2%')}}>
                        <View style={{borderWidth:wp('0.2%'), backgroundColor:'white', justifyContent:'center', alignItems:'flex-end', marginRight:wp('1%'), paddingRight:wp('2%'), height:hp('5.5%'), width:wp('54%'), borderTopLeftRadius:wp('2%'), borderBottomLeftRadius:wp('2%')}}>
                            <Text style={{color:'black', fontSize:wp('4.2%'), fontWeight:'bold'}}> 25 يناير 2019 </Text>
                        </View>
                        <View style={{backgroundColor:'#7E7560', justifyContent:'center', alignItems:'flex-end', paddingRight:wp('2%'), height:hp('5.5%'), width:wp('28%'), borderTopRightRadius:wp('2%'), borderBottomRightRadius:wp('2%')}}>
                            <Text style={{color:'white', fontSize:wp('4.2%'), fontWeight:'bold'}}> التاريخ </Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', marginBottom:hp('2%')}}>
                        <View style={{borderWidth:wp('0.2%'), backgroundColor:'white', justifyContent:'center', alignItems:'flex-end', marginRight:wp('1%'), paddingRight:wp('2%'), height:hp('5.5%'), width:wp('54%'), borderTopLeftRadius:wp('2%'), borderBottomLeftRadius:wp('2%')}}>
                            <Text style={{color:'black', fontSize:wp('4.2%'), fontWeight:'bold'}}> الجمعة </Text>
                        </View>
                        <View style={{backgroundColor:'#7E7560', justifyContent:'center', alignItems:'flex-end', paddingRight:wp('2%'), height:hp('5.5%'), width:wp('28%'), borderTopRightRadius:wp('2%'), borderBottomRightRadius:wp('2%')}}>
                            <Text style={{color:'white', fontSize:wp('4.2%'), fontWeight:'bold'}}> اليوم </Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', marginBottom:hp('2%')}}>
                        <View style={{borderWidth:wp('0.2%'), backgroundColor:'white', justifyContent:'center', alignItems:'flex-end', marginRight:wp('1%'), paddingRight:wp('2%'), height:hp('5.5%'), width:wp('54%'), borderTopLeftRadius:wp('2%'), borderBottomLeftRadius:wp('2%')}}>
                            <Text style={{color:'black', fontSize:wp('4.2%'), fontWeight:'bold'}}> 2200 ريال </Text>
                        </View>
                        <View style={{backgroundColor:'#7E7560', justifyContent:'center', alignItems:'flex-end', paddingRight:wp('2%'), height:hp('5.5%'), width:wp('28%'), borderTopRightRadius:wp('2%'), borderBottomRightRadius:wp('2%')}}>
                            <Text style={{color:'white', fontSize:wp('4.2%'), fontWeight:'bold'}}> قيمة الرحلة </Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', marginBottom:hp('2%')}}>
                        <View style={{borderWidth:wp('0.2%'), backgroundColor:'white', justifyContent:'center', alignItems:'flex-end', marginRight:wp('1%'), paddingRight:wp('2%'), height:hp('5.5%'), width:wp('54%'), borderTopLeftRadius:wp('2%'), borderBottomLeftRadius:wp('2%')}}>
                            <Text style={{color:'black', fontSize:wp('4.2%'), fontWeight:'bold'}}> 68593 </Text>
                        </View>
                        <View style={{backgroundColor:'#7E7560', justifyContent:'center', alignItems:'flex-end', paddingRight:wp('2%'), height:hp('5.5%'), width:wp('28%'), borderTopRightRadius:wp('2%'), borderBottomRightRadius:wp('2%')}}>
                            <Text style={{color:'white', fontSize:wp('4.2%'), fontWeight:'bold'}}> رقم الحجز </Text>
                        </View>
                    </View>
                    
                </View>

            </ImageBackground>
         )
    }
}

export default Artboard7

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
    pageBG:{
        flex: 1,
        resizeMode: 'contain',
    }
});