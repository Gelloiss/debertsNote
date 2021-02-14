import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { RFPercentage } from "react-native-responsive-fontsize";
import { useFonts } from 'expo-font';
import { Lora_400Regular} from '@expo-google-fonts/lora';
import { Roboto_300Light, Roboto_400Regular} from '@expo-google-fonts/roboto';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Settings from "./src/settings";

function HomeScreen({navigation}) {
  return (
    <View style={styles.menu}>
      <View style={styles.menuHorizontal}>
        <TouchableOpacity
          style={[styles.menuHorizontalButton]}
          onPress={() => navigation.navigate('teamVSteam')}>
          <Text style={styles.menuHorizontalText}>
            &#x30;
          </Text>
          <Text style={styles.menuSigna}>
            две команды
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuHorizontalButton]}
          onPress={() => navigation.navigate('oneVSone')}>
          <FontAwesome name="user" style={styles.menuHorizontalText} />
          <Text style={styles.menuSigna}>
            два игрока
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('oneVSoneVSone')}>
        <Text style={styles.menuText}>
          ТРИ ИГРОКА
        </Text>
      </TouchableOpacity>

      <View style={styles.menuHorizontal}>
        <TouchableOpacity
          style={styles.menuHorizontalButton}
          onPress={() => navigation.navigate('about')}>
          <FontAwesome name="info-circle" style={styles.menuHorizontalText} />
          <Text style={styles.menuSigna}>
            информация
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuHorizontalButton}
          onPress={() => navigation.navigate('settings')}>
          <FontAwesome name="cog" style={styles.menuHorizontalText} />
          <Text style={styles.menuSigna}>
            настройки
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const StackMenu = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Lora_400Regular,
    Roboto_300Light,
    Roboto_400Regular,
    'Icon': require('./assets/fonts/icon.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <StackMenu.Navigator initialRouteName="home">
          <StackMenu.Screen name="home" component={HomeScreen} options={{ title: 'Меню', headerShown: false }}/>
          <StackMenu.Screen name="oneVSone" component={HomeScreen} options={{ title: 'Вдвоем' }}/>
          <StackMenu.Screen name="settings" component={Settings} options={{ title: 'Настройки' }}/>
        </StackMenu.Navigator>
      </NavigationContainer>
    </View>
  );
}

const marginButton = '15%';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#222831',
    paddingLeft: '5%',
    paddingRight: '5%',
  },

  menuHorizontal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: marginButton,
  },

  menuHorizontalButton: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#30475e',
  },

  menuHorizontalText: {
    flex: 4,
    color: '#ecf0f1',
    fontSize: RFPercentage(7),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Icon',
  },

  menuSigna: {
    flex: 1,
    color: '#95a5a6',
    backgroundColor: '#00454a',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: RFPercentage(2),
  },

  menuButton: {
    width: '100%',
    aspectRatio: 3.5,
    backgroundColor: '#30475e',
    marginBottom: marginButton,
  },

  menuText: {
    flex: 1,
    color: '#ecf0f1',
    fontSize: RFPercentage(6),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Roboto_400Regular',
  },

  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: "center",
  }
});

export default App;