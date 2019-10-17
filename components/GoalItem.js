import React from 'react';
import {View, StyleSheet , Text , TouchableOpacity } from 'react-native';

const GoalItem = props =>{
                return(
                <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>    
                <View  style={styles.listItems}>
                          <Text style={{color:'white'}} >{props.title}</Text>
                </View>
                </TouchableOpacity>
            );
};

const styles=StyleSheet.create({
    listItems:{
        padding:10,
        marginVertical:10,
        backgroundColor:'#800000',
        borderRadius:20,
      }
})
export default GoalItem;