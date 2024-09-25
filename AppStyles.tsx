import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatContent: {
        padding: 10,
    },
    messageContainer: {
        marginBottom: 10,
        maxWidth: '85%',
        padding: 10,
        borderRadius: 15,
        flexDirection: 'column',
    },
    userMessage: {
        backgroundColor: '#007AFF',
        alignSelf: 'flex-end',
        borderBottomRightRadius: 0,
    },
    botMessage: {
        backgroundColor: '#ECECEC',
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 0,
    },
    userText: {
        fontSize: 15,
        color: '#fff',
    },
    botText: {
        fontSize: 15,
        color: '#000',
        paddingBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    textInput: {
        flex: 1,
        minHeight: 45,
        maxHeight: 100,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
        color: '#333',
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: 'transparent',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    micButton: {
        marginRight: 10,
    },
    copyButton: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 5,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        marginTop: 10,
    },
    iconButton: {
        marginHorizontal: 0,
    },
});