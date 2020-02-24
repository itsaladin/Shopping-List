import React,{ Component } from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return(
    <TouchableOpacity style={styles.ListItem}>
        <View style={styles.ListItemView}>
            <Text style={styles.ListItemViewText}> {item.text} </Text>
            <Icon 
              name="remove" 
              size={30} 
              color="red" 
              onPress={() => deleteItem(item.id)}
            />
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    ListItem:{
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderColor: '#eee',
    },
    ListItemView:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    ListItemViewText:{
        fontSize: 18,
    },
});



export default ListItem;