import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './app/screens/HomeScreen';
import FavoritesScreen from './app/screens/FavoritesScreen';
import SettingsScreen from './app/screens/SettingsScreen';

// Find icons! These are the ones I chose
// import { Ionicons } from '@expo/vector-icons';

// home:
// <Ionicons name="home" size={24} color="black" />
// <Ionicons name="home-outline" size={24} color="black" />

// info:
// <Ionicons name="information-circle" size={24} color="black" />
// <Ionicons name="information-circle-outline" size={24} color="black" />

// photo:
// <Ionicons name="image" size={24} color="black" />
// <Ionicons name="image-outline" size={24} color="black" />

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            // this will specific which icon to use for each tab
            // the outline is the 'empty' one for when its NOT selected
            if (route.name ==='Home') {
              iconName = focused
              ? 'newspaper'
              : 'newspaper-outline';
            }
            else if (route.name === 'Favs') {
              iconName = focused
              ? 'heart-circle'
              : 'heart-circle-outline'
            }
            else if (route.name === 'Settings') {
              iconName = focused
              ? 'settings'
              : 'settings-outline'
            }
            return <Ionicons name={iconName} size ={26} color='blue'/>
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
        })}
      >

        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Favs' component={FavoritesScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
