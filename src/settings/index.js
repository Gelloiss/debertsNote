import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Settings ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>

      <View style={styles.menuButton}>
        <Button
          title = "back"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuButton: {
    width: '80%',
    fontSize: 40,
    fontWeight: '800',
    marginTop: 40,
  },
});

export default Settings;