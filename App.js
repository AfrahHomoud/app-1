
import React, { Component } from 'react';
export default AppRegistry 
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';
 
class Myproject extends Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      TextInputValueHolder: ''
 
    }
 
  }
 
  GetValueFunction = () =>{
 
 const { TextInputValueHolder }  = this.state ;
 
    Alert.alert(TextInputValueHolder)
 
  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Text here"
 
          onChangeText={TextInputValueHolder => this.setState({TextInputValueHolder})}
 
          style={{textAlign: 'center', marginBottom: 7, height: 50}}
        />
 
        <Button title="Get Text Input Entered Value" onPress={this.GetValueFunction} color="#2196F3" />
      
  
 
</View>
            
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10
}
 
});
 
AppRegistry.registerComponent('Myproject', () => Myproject);