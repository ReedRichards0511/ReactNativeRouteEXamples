import { StyleSheet, Text, View } from 'react-native'
import HamburgerMenu from '../../components/shared/HamburgerMenu'
import Icon from 'react-native-vector-icons/Ionicons';



const Tab1Screen = () => {


  return (
    <View>
      <HamburgerMenu/>
      <Icon name="rocket-outline" size={30} color="#900" />
      <Text>Tab1Screen</Text>
    </View>
  )
}
export default Tab1Screen