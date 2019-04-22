import React, {Component} from 'react'
import {
    ImageBackground,
    Image,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Splash from '../../src/Imag/Splash3/Splash.png';
import Indicator from '../../src/Imag/Splash3/Indicator.png';

class SplashScreen1 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={Splash}  style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'contain',
              }}>
                <Image source={Indicator} style={{width:wp('7%'), height:wp('7%'), opacity:0.5, position:'absolute', top:hp('64%'), left:wp('46.5%')}}/>
            </ImageBackground>
         )
    }
}

export default SplashScreen1