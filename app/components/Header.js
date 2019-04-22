import React from 'react'

import {
    Image,
    StyleSheet,
    View,
    Text,
} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Menu from '../../src/Imag/Artboard1/Menu.png';
import Back from '../../src/Imag/Artboard1/Back.png';

export const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Image source={Back} style={styles.image4_5}/>
            <View style={styles.rowCenter}>
                <Text style={styles.textHeader}> {title} </Text>
                <Image source={Menu} style={styles.image6_5}/>
            </View>
        </View>
    )
}


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
});