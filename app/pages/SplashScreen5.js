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

import Splash from '../../src/Imag/Splash5/Splash.png';
import Indicator from '../../src/Imag/Splash5/Indicator.png';
import Logo from '../../src/Imag/Splash5/Logo.png';

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
                <Image source={Indicator} style={{width:wp('7%'), height:wp('7%'), position:'absolute', top:hp('83%'), left:wp('46.5%')}}/>
                <Image source={Logo} style={{width:wp('35%'), height:wp('35%'), resizeMode:'contain', position:'absolute', top:hp('10.5%'), left:wp('32.5%')}}/>
            </ImageBackground>
         )
    }
}

export default SplashScreen1