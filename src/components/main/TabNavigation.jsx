import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BookmarksScreen from '../bookmarks/BookmarksScreen';
import DashboardScreen from '../dashboard/DashboardScreen';
import FeedScreen from '../feed/FeedScreen';

const TabNavigator = createBottomTabNavigator();
const screens = [
  {
    name: 'Saved Ideas',
    component: BookmarksScreen,
    iconName: 'bookmark',
  },
  {
    name: 'Home',
    component: DashboardScreen,
    iconName: 'home',
  },
  {
    name: 'Feed',
    component: FeedScreen,
    iconName: 'format-list-bulleted',
  },
];

const TabNavigation = () => (
  <NavigationContainer>
    <TabNavigator.Navigator>
      {screens.map((screen) => (
        <TabNavigator.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({ color, size }) => ( // eslint-disable-line react/prop-types
              <Icon
                name={screen.iconName}
                color={color}
                size={size}
              />
            ),
          }}
        />
      ))}
    </TabNavigator.Navigator>
  </NavigationContainer>
);

export default TabNavigation;
