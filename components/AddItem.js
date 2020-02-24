import React,{ Component, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
  this.searchInput = React.createRef();

  return(
    <View style={styles.header}>
        <TextInput placeholder="Input Items.." style={styles.input} onChangeText={onChange}/>
        <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
            <Text style={styles.btnText}> <Icon name='plus' size={30} /> Add Itme </Text>
        </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
 input:{
     padding: 8,
     height: 60,
     fontSize: 16
 },
 btn:{
    padding: 9,
    margin: 5,
    backgroundColor: '#c2bad8',
 },
 btnText:{
     fontSize: 20,
     textAlign: "center",
     color: 'darkslateblue',
 }
});



export default AddItem;