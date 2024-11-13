import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsnavigator';
import { StackNabigator } from './StackNavigator';

const Tab = createBottomTabNavigator();




export const BottonTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // headerShown: false,
                tabBarLabelStyle: {
                    marginBottom: 5
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0
                }
            }}
        >
            <Tab.Screen name="Tab 1" options={{ title: 'Tab 1', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab 1</Text>) }} component={Tab1Screen} />
            <Tab.Screen name="Tab 2" options={{ title: 'Tab 2', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab 2</Text>) }} component={TopTabsNavigator} />
            <Tab.Screen name="Tab 3" options={{ title: 'Tab 3', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab 3</Text>) }} component={StackNabigator} />
        </Tab.Navigator>
    );
}