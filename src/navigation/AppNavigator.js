import React from 'react';
import Detail from '../screens/projects/ProjectDetail';
// Screen
import Screen1 from '../screens/drawer/screen1';
import Screen2 from '../screens/drawer/screen2';
import Screen3 from '../screens/drawer/screen3';
// Projects
import ProjectList from '../screens/projects/ProjectList';
import ProjectDetail from '../screens/projects/ProjectDetail';
import NormalReport from '../screens/projects/NormalReport';
import StoriesReport from '../screens/projects/StoriesReport';
// Profile
import Profile from '../screens/fan/Profile';
// Vector Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
export default AppNavigator = () => {
  createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen
        name="projects"
        children={createBottomTabs}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }} />
      <Stack.Screen
        name="projectDetail"
        component={ProjectDetail}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }} />
      <Stack.Screen
        name="通常投稿レポート"
        component={NormalReport}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }} />
      <Stack.Screen
        name="ストーリーズ投稿レポート"
        component={StoriesReport}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }} />
      <Stack.Screen
        name="Bottom Tabs"
        children={createBottomTabs}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }}
      />
    </Stack.Navigator>
  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen
        name="rojectList"
        component={ProjectList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Screen1} />
        <Drawer.Screen name="Favorites" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}