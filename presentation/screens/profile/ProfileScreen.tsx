import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PrimaryButton from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();
  const navitaion = useNavigation();
  
  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top
    }}>
      <Text style={{
        marginBottom:10
      }}>ProfileScreen</Text>

      <PrimaryButton
        label='Abrir Menu'
        onPress={() => navitaion.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  )
}
export default ProfileScreen