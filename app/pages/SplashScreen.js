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

import Splash from '../../src/Imag/Splash/Splash.png';
import Indicator from '../../src/Imag/Splash/Indicator.png';
import Logo from '../../src/Imag/Splash/Logo.png';

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
                <Image source={Indicator} style={{width:wp('7%'), height:wp('7%'), position:'absolute', top:hp('40%'), left:wp('46.5%')}}/>
                <Image source={Logo} style={{width:wp('40%'), height:wp('40%'), resizeMode:'contain', position:'absolute', top:hp('12%'), left:wp('52.5%')}}/>
            </ImageBackground>
         )
    }
}

export default SplashScreen1