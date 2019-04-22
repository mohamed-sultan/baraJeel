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

import BG from '../../src/Imag/Artboard9/BG.png';

class Artboard9 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                

                <View style={{marginHorizontal:wp('8%'), marginTop:hp('14%'), justifyContent:'center', alignItems:'center'}}>                   

                    <Text style={{color:'white', fontSize:wp('7%'), marginBottom:hp('4%'), fontWeight:'600', backgroundColor:'#CC964B'}}> نشكركم </Text>                    
                    <Text style={{color:'white', fontSize:wp('7%'), marginBottom:hp('4%'), fontWeight:'600', backgroundColor:'#A07532'}}> علي إتمام الحجز </Text>                    
                    <Text style={{color:'white', fontSize:wp('7%'), fontWeight:'600', backgroundColor:'#845B1B'}}> وسيتم التواصل معكم </Text>                    

                </View>

            </ImageBackground>
         )
    }
}

export default Artboard9

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