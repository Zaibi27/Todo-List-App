import React from 'react' ;
import {TouchableOpacity ,View , Text , StyleSheet}  from 'react-native' ;


const MyButton = (props) => {
    var btnColor = props.color != undefined ? props.color : 'coral' ;
    return(
        <TouchableOpacity activeOpacity= {0.7} onPress={props.onPressEvent}>
       <View style={{...styles.addButton  , backgroundColor: btnColor }}>
         <Text style={{color: "white" , fontSize: 20}}>{props.text}</Text>
         </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 20,
        paddingHorizontal: 20 ,
        
}
}) ;

export default MyButton ;

