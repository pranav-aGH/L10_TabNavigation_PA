import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './app/screens/HomeScreen';
import InfoScreen from './app/screens/InfoScreen';
import PhotoScreen from './app/screens/PhotoScreen';

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
              ? 'home'
              : 'home-outline';
            }
            else if (route.name === 'Info') {
              iconName = focused
              ? 'information-circle'
              : 'information-circle-outline'
            }
            else if (route.name === 'Photo') {
              iconName = focused
              ? 'image'
              : 'image-outline'
            }
            return <Ionicons name={iconName} size ={26} color='blue'/>
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
        })}
      >

        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Info' component={InfoScreen} />
        <Tab.Screen name='Photo' component={PhotoScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
