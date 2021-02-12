import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Settings from "./src/settings";

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20, justifyContent: 'center'}}>
      <TouchableOpacity
        style={[styles.menuButton, {backgroundColor: '#079992'}]}
        onPress={() => navigation.navigate('oneVSone')}>
        <Text style={styles.menuText}>
          Вдвоем
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuButton, {backgroundColor: '#487eb0'}]}
        onPress={() => navigation.navigate('teamVSteam')}>
        <Text style={styles.menuText}>
          Командами
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuButton, {backgroundColor: '#575fcf'}]}
        onPress={() => navigation.navigate('oneVSoneVSone')}>
        <Text style={styles.menuText}>
          Втроем
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuButton, {backgroundColor: '#05c46b'}]}
        onPress={() => navigation.navigate('settings')}>
        <Text style={styles.menuText}>
          Настройки
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('about')}>
        <Text style={styles.menuText}>
          Информация
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuButton, {backgroundColor: '#ef5777'}]}
        onPress={() => BackHandler.exitApp()}>
        <Text style={styles.menuText}>
          Выйти
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const StackMenu = createStackNavigator();

function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <StackMenu.Navigator initialRouteName="home">
          <StackMenu.Screen name="home" component={HomeScreen} options={{ title: 'Меню' }}/>
          <StackMenu.Screen name="oneVSone" component={HomeScreen} options={{ title: 'Вдвоем' }}/>
          <StackMenu.Screen name="settings" component={Settings} options={{ title: 'Настройки' }}/>
        </StackMenu.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    width: '80%',
    marginTop: 40,
    backgroundColor: '#485460',
    padding: 10,
  },

  menuText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '800',
  }
});

export default App;