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

import BG from '../../src/Imag/Artboard8/BG.png';
import Cash from '../../src/Imag/Artboard8/Cash.png';
import Visa from '../../src/Imag/Artboard8/Visa.png';
import PayPal from '../../src/Imag/Artboard8/PayPal.png';

class Artboard8 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                {/* HEADER */}
                <Header title="الدفع"/>

                <View style={{marginHorizontal:wp('8%'), marginTop:hp('4%'), justifyContent:'center', alignItems:'center'}}>                   

                    <Text style={{color:'black', fontSize:wp('6%'), fontWeight:'600'}}> أختر وسيلة الدفع </Text>                    
                    
                    <View style={{backgroundColor:'rgba(200, 200, 200, 0.7)', width:'60%', height:hp('7%'), marginVertical:hp('4%'), borderRadius:wp('2%')}}>
                        <TouchableOpacity>
                            <Image source={Cash} style={{width:wp('23.5%'), height:hp('12.5%'), position:'relative', top:hp('-4.2'), left:wp('13%')}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{backgroundColor:'rgba(200, 200, 200, 0.7)', width:'60%', height:hp('7%'), marginVertical:hp('4%'), borderRadius:wp('2%')}}>
                        <TouchableOpacity>
                            <Image source={Visa} style={{resizeMode:'contain', width:wp('19%'), height:hp('10%'), position:'relative', top:hp('-1.8'), left:wp('16%')}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{backgroundColor:'rgba(200, 200, 200, 0.7)', width:'60%', height:hp('7%'), marginVertical:hp('4%'), borderRadius:wp('2%')}}>
                        <TouchableOpacity>
                            <Image source={PayPal} style={{resizeMode:'contain', width:wp('18%'), height:hp('12.5%'), position:'relative', top:hp('-3'), left:wp('17%')}}/>
                        </TouchableOpacity>
                    </View>

                </View>

            </ImageBackground>
         )
    }
}

export default Artboard8

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