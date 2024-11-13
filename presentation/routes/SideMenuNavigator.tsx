import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNabigator } from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { BottonTabNavigator } from './BottomTabsnavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = ( ) => {

const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator  

      drawerContent={(props) => <CustomDrawerContent {...props}/>}
    
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 758 ? 'permanent': 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius:100,
          paddingHorizontal:20
        }
      }}
    >
      {/* <Drawer.Screen name="StackNabigator" component={StackNabigator} /> */}
      <Drawer.Screen name="Tabs" component={BottonTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}


const CustomDrawerContent = (props:DrawerContentComponentProps) => {
  
  
  
  return (
    <DrawerContentScrollView>
      <View 
        style= {{
          backgroundColor: globalColors.primary,
          margin:30,
          borderRadius:50,
          height:200
        }}
      />
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}