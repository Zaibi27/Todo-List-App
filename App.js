import React from 'react';
import { StyleSheet, Text, View, TextInput , Button, ScrollView, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';
import MyButton  from "./components/buttonComponent" ;
import {todoItems} from "./Constants/TodoConstants" ;




export default class App extends React.Component {
  
  constructor(props){
    super(props) ;
    this.state = {
      inputText : "" ,
      myList: todoItems  ,
      index: 0 ,
      buttonTitle: "ADD"
      
    }
    


  }



  
    

  
  

  addItem = () => {
    
    if(this.state.buttonTitle === "ADD"){
     
    
    this.state.myList.push({key : Math.random().toString() , data : this.state.inputText }) ;
    this.setState({inputText: ""}) ;
      
    
  }
  else if(this.state.buttonTitle === "UPDATE"){
    if(this.state.inputText.length === ""){

      this.setState({myList: newList , inputText: "" , buttonTitle: "ADD"})
      

    }
    else{
    let newList = [...this.state.myList]
    newList[this.state.index].data = this.state.inputText
    this.setState({myList: newList , inputText: "" , buttonTitle: "ADD"})
    }
    

  }
  }
  removeItem = (itemKey) => {
   var list =  this.state.myList.filter(item => item.key != itemKey) ;
   this.setState({myList : list })
   
  
  }
  addOnInput = (itemKey) => {
    
    
    this.setState({inputText : data }) ;
  }

  
  

  render(){
    const scrollShow = ( 
      <ScrollView style={styles.scrollView}>
        {this.state.myList.map((item , indexx ) =>
  
          // <TouchableOpacity  onPress={() => this.removeItem(item.key)}>
  
             <View style={styles.scrollItems} key = {item.key} >
               
               <TouchableOpacity  onPress={ () => this.setState({inputText: (item.data) , buttonTitle: "UPDATE" , index: indexx  })} >
                   
                <Text style={{color: "white" , fontSize: 30 }}> {indexx + 1 }.  {item.data} </Text>
                   </TouchableOpacity>
                   <View>
                   <TouchableOpacity  onPress={() => this.removeItem(item.key)}>
                     <Text style={styles.crossText} >X</Text>
                     </TouchableOpacity>
                   </View>
                   </View>
              ) } 
  
  </ScrollView>) ;

const NoTaskView = (
  <View style={{padding: 30 }} >
  <Text style = {{fontSize: 25 ,  fontStyle: "italic", color: "lightgray"}}>No tasks yet </Text>
  </View>
);

  return (
    <View style={styles.container}>
      <Text style = {styles.title}> Todo List  </Text>
      <View style = {styles.inputContainer}>
     <TextInput style={styles.textInput} placeholder= "Enter here " 
     onChangeText = { text => this.setState({ inputText : text })}   
     value = {this.state.inputText} /> 
     <MyButton text= {this.state.buttonTitle} onPressEvent = {this.addItem} disabled= {this.state.inputText.length <= 0 }> </MyButton>
     
     
     </View>
     {this.state.myList.length <= 0 ? NoTaskView : scrollShow}
     
    </View>
    
  );
}
}

const styles = StyleSheet.create({
  title:{
    fontSize: 64,
    color: 'lightgray' ,
  },
  container: {
    flex: 1,
    backgroundColor: 'lightslategrey',
    alignItems: 'center',
    paddingTop: 50 , 
    // justifyContent: 'center',
    paddingBottom: 20 ,
    
  },
  inputContainer: {
    paddingTop : 40 ,
    flexDirection: "row" ,
    justifyContent: "space-between",
    width: '70%' ,
    alignItems: "center" ,
    paddingBottom: 30 ,



  },
  

  
  textInput:{
    borderColor: "burlywood",
     // borderWidth: 2 ,
    borderBottomWidth : 2 ,
    width: '70%' , 
    //borderRadius : 50 ,
    fontSize : 20 ,
    padding : 5 ,
    color: "white"

  },
  scrollView: {
    paddingTop: 15 ,
    width: '90%' ,
    backgroundColor: "lightgray" ,
    borderRadius: 10 , 
    

    
    

  },
  scrollItems:{
    flexDirection : "row" ,
    backgroundColor: "indianred",
    alignItems: "center",
    justifyContent: "space-between" ,
    padding: 10 ,
    margin : 5 , 
    borderRadius : 5 ,
    marginBottom : 10 , 

  },
  crossText: {
    fontSize: 30 ,
    color: "red", 
    fontWeight: "bold"

  }
});

