import React, {useState} from 'react';
import {View , TextInput , Button , StyleSheet ,Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal,setGoal]=useState(' ');
  
    const goalInputHandler=(enteredText)=>{
        setGoal(enteredText);
      };
    const onGoalHandler = () => {
      props.onGoalChange(enteredGoal);
      setGoal(' ');
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <TextInput 
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
          <Button title=" Cancel " color="red" onPress={props.closeModal} />
        
          </View>
          <View style={styles.button}>
          <Button title=" ADD " onPress={onGoalHandler} />
          </View>
        
        </View>
        
        </View>
      </Modal>);
}; 

const styles = StyleSheet.create({
    input:{
      borderBottomColor:'black',
      borderBottomWidth:1,
      padding:10 ,
      width:'80%'
      },
    buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
      width:'60%'
    },
    button:{
      width:'40%',
      marginTop:'10%'
    
    }  

});

export default GoalInput;