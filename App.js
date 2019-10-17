import React, { useState } from 'react';
import { StyleSheet,
        View, 
        Button, 
        FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals,setCourseGoals]= useState([]);
  const [isAddMode, setIsAddMode]= useState(false);

  const addGoalHAndler = enteredGoal => {
    setCourseGoals(currentGoals => [...currentGoals,{id:Math.random().toString(),value:enteredGoal}]);
    setIsAddMode(false);
  };
  
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  
  const closeModal = () => {
    setIsAddMode(false);
  } 

    return (
    <View style={{padding:50}}>
      <Button title={"Add New Goal"} onPress={()=> setIsAddMode(true) }/>
      <GoalInput visible={isAddMode} closeModal={closeModal} onGoalChange={addGoalHAndler}/>
      <FlatList keyExtractor={(item,index)=> item.id}
                data={courseGoals} 
                renderItem={itemData => <GoalItem  id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>} 
                />
    </View>
  );
}

const styles=StyleSheet.create({
  screen:{
    flexDirection:'row',
    width:'80%' ,
    height:300,
    justifyContent:'space-around',
    alignItems:'stretch',
    borderRadius:20
  }

});
