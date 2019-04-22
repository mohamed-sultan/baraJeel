import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Alert,
    ScrollView,
    Button
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import {Header} from '../components/Header';
import BG from '../../src/Imag/Artboard10/BG.png';
import Loc from '../../src/Imag/Artboard10/Loc.png';
import Photo from '../../src/Imag/Artboard10/Photo.png';
import Video from '../../src/Imag/Artboard10/Video.png';
import Send from '../../src/Imag/Artboard10/Send.png';
import Picture from '../../src/Imag/Artboard10/Picture.png';

class Artboard10 extends Component{

    constructor(props) {
        super();
        this.state = {
            data: [
                {id:'1', date:"9:50 am", type:'in',  message: "السلام عليكم ورحمة الله وبركاتة", avatar:require('../../src/Imag/Artboard10/Avatar.png')},
                {id:'2', date:"9:50 am", type:'out', message: "وعليكم السلام ورحمة الله وبركاتة", avatar:require('../../src/Imag/Artboard10/Avatar.png')} ,
                {id:'3', date:"9:50 am", type:'in',  message: "كنت عاوز اسأل عن شئ", avatar:require('../../src/Imag/Artboard10/Avatar.png')}, 
                {id:'4', date:"9:50 am", type:'out',  message: "بالطبع اتفضل أخي", avatar:require('../../src/Imag/Artboard10/Avatar.png')}, 
                {id:'5', date:"9:50 am", type:'in', message: "شكرا لحضرتك كنت عاوز اعرف بس نظام الرحلات والفلوس والفنادق الي هنقيم فيها عاملة ازاي؟", avatar:require('../../src/Imag/Artboard10/Avatar.png')}, 
                {id:'6', date:"9:50 am", type:'out', message: "التفاصيل كذا كذا كذا", avatar:require('../../src/Imag/Artboard10/Avatar.png')}, 
                {id:'7', date:"9:50 am", type:'in',  message: "تمام شكرا لحضرتك جدا", avatar:require('../../src/Imag/Artboard10/Avatar.png')}, 
                {id:'8', date:"9:50 am", type:'in',  message: "العفو في الخدمه يفندم", avatar:require('../../src/Imag/Artboard10/Avatar.png')},
            ]
        };
    }
    
    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                
                {/* HEADER */}
                <Header title="المحادثة"/>
                <FlatList 
                    style={styles.list}
                    data={this.state.data}
                    keyExtractor= {(item) => {
                        return item.id;
                    }}
                    renderItem={(message) => {
                        
                        const item = message.item;
                        const Avatar = ()=>{
                            return (
                                <Image source={item.avatar} style={styles.avatar}/>
                            )
                        }
                        const Date = ()=>{
                            return (
                                <Text style={styles.time}>
                                    {item.date}
                                </Text>
                            )
                        }
                        let inMessage = item.type === 'in';
                        let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                        let messegeStyle = inMessage ? styles.messegeIn : styles.messegeOut;
                        return (
                        <View>        
                            {inMessage && <Avatar/>}
                            <View style={[styles.item, itemStyle]}>
                                <View style={[styles.balloon]}>
                                <Text style={[{fontSize:wp('4%'), fontWeight:'600'}, messegeStyle]}>{item.message}</Text>
                                </View>
                            </View>
                        </View>
                        )
                    }}
                />
                <View style={{justifyContent:'center', alignItems:'center', height:hp('13%'), width:wp('100%'), backgroundColor:'white', borderTopColor:'#ECECEC', borderTopWidth:hp('0.4%')}}>
                    <View style={{height:hp('6.5%'), marginRight:wp('10%'), justifyContent:'center', alignItems:'center'}}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="ادخل رسالة"
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="username"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    
                    <View style={{height:hp('6.5%'), width:wp('100%'), flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:wp('2%'), paddingBottom:hp('1%')}}>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Image source={Picture} style={[styles.imageSend, {marginHorizontal:wp('2.5')}]}/>
                            <Image source={Photo} style={[styles.imageSend, {marginHorizontal:wp('2.5')}]}/>
                            <Image source={Video} style={[styles.imageSend, {marginHorizontal:wp('2.5')}]}/>
                            <Image source={Loc} style={[styles.imageSend, {marginHorizontal:wp('2.5')}]}/>
                        </View>
                        <View style={{height:wp('8%'), width:wp('8%'), justifyContent:'center', alignItems:'center', borderRadius:wp('4%'), backgroundColor:'#CC964B'}}>
                            <Image source={Send} style={styles.send}/>
                        </View>
                    </View>
                </View>

            </ImageBackground>
         )
    }
}

export default Artboard10

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
    imageSend:{
        width:wp('5%'), 
        height:wp('5%'), 
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
    textInput:{
        width:wp('80%'), 
        padding:0, 
        fontSize:wp('3.8%'), 
        fontWeight:'500', 
        color:'black'
    },
    pageBG:{
        flex: 1,
        resizeMode: 'contain',
    },
    send:{
        width:wp('5%'),
        height:wp('5%'),
        resizeMode:'contain',
    },
    list:{
        paddingHorizontal: wp('4%'),
        height:hp('20%'),
    },
    balloon: {
        maxWidth: 250,
        padding: wp('2.5%'),
        paddingHorizontal:wp('5%'),
        borderRadius: 20,
    },
    itemIn: {
        alignSelf: 'flex-start',
        backgroundColor:"#A98346",
        color:'black',
    },
    itemOut: {
        alignSelf: 'flex-end',
        backgroundColor:"#D6D3CD",
        color:'white',
    },
    messegeIn:{
      color:'white'  
    },
    messegeOut:{
      color:'black'  
    },
    item: {
        marginVertical: hp('2%'),
        flex: 1,
        flexDirection: 'row',
        borderRadius:wp('10%'),
        marginLeft:wp('10%'),
    },
    avatar:{
        width:wp('8%'),
        height:wp('8%'),
        borderRadius:wp('2.5%'),
        position:'absolute',
        top:wp('4%'),
    }
});