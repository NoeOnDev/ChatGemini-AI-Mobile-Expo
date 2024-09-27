import { View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../AppStyles';

interface InputAreaProps {
    query: string;
    setQuery: (text: string) => void;
    onSendPress: () => void;
    isLoading: boolean;
}

const InputArea = ({ query, setQuery, onSendPress, isLoading }: InputAreaProps) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                value={query}
                onChangeText={setQuery}
                placeholder="Type a message..."
                placeholderTextColor="#999"
                multiline
            />
            <TouchableOpacity activeOpacity={0.7} onPress={onSendPress} disabled={isLoading}>
                {isLoading ? (
                    <ActivityIndicator size="small" color="#007AFF" />
                ) : (
                    <Ionicons name="send" size={22} color="#007AFF" />
                )}
            </TouchableOpacity>
        </View>
    );
};

export default InputArea;
