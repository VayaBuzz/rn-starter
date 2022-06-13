import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

//const HomeScreen = (props) => {
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screenz</Text>
      <Button
        // onPress={() => props.navigation.navigate('Components')}
        onPress={() => navigation.navigate('Components')}
        title='Go to Componnents Demo'
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title='Go to List Demo'
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
