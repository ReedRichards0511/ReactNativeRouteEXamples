import { View, Text, Pressable } from 'react-native'
import { globalStyles } from '../../theme/theme';

interface PrimaryButtonProps {
    onPress: () => void;
    label: string
}

const PrimaryButton = ({ label, onPress }: PrimaryButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={globalStyles.primaryButton}>
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    )
}
export default PrimaryButton