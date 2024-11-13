import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'



const SettingsScreen = () => {


  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom:10}}>Setting sScreen</Text>

      <PrimaryButton
        label='Regresar'
        onPress={() => navigator.goBack()}
      />
      <PrimaryButton
        label='Regresar al home'
        onPress={() => navigator.dispatch( StackActions.popToTop() )}
      />
    </View>
  )
}
export default SettingsScreen
const styles = StyleSheet.create({})