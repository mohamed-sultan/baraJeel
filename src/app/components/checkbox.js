import React from 'react';
import {TouchableOpacity,Text,Dimensions} from 'react-native';
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Icon} from 'native-base';
export default class MyCheckbox extends React.PureComponent {
  constructor(props){
    super(props);
   this.state={
      checked:false
  }
  
  }

    render() {

      const { label, checked, onChange,textStyle, } = this.props;
      let ico=<Icon type='MaterialCommunityIcons'  name={this.state.checked?'checkbox-marked':'checkbox-blank-outline'} color='black' style={{fontSize:25,alignSelf: 'center',color:'white'}} />
      return (
        <TouchableOpacity
        style={[{flexDirection:'row'},this.props.style]}
                 onPress={()=>{onChange(!this.state.checked);this.setState({checked:!this.state.checked}); }}
        >
        {ico}
        <Text style={[{marginHorizontal:Dimensions.get('screen').width*0.01},textStyle]}>{label}</Text>
      </TouchableOpacity>
      );
    }
  }