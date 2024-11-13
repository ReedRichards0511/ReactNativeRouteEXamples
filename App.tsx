import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { StackNabigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottonTabNavigator } from './presentation/routes/BottomTabsnavigator';

function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      {/* <StackNabigator /> */}
      <SideMenuNavigator/>
      {/* <BottonTabNavigator/> */}
    </NavigationContainer>
  );
}


export default App;
