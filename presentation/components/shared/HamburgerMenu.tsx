import { DrawerActions, DrawerRouter, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native'



const HamburgerMenu = () => {

    const navigation = useNavigation();

    useEffect(() => {
     navigation.setOptions({
        headerLeft: () => (
            <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                <Text>Menu</Text>
            </Pressable>
        )
     })
    }, [])
    


  return <></>
}
export default HamburgerMenu