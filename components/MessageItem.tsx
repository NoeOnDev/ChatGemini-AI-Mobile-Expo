import React, { useState, memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Markdown from 'react-native-markdown-display';
import * as Clipboard from 'expo-clipboard';
import * as Speech from 'expo-speech';
import { stripMarkdown } from '../utils/stripMarkdown';
import { styles } from '../AppStyles';

interface MessageProps {
    item: {
        question: string;
        answer: string;
    };
}

const MessageItem = memo(({ item }: MessageProps) => {
    const [isSpeaking, setIsSpeaking] = useState(false);

    const copyToClipboard = async (text: string) => {
        await Clipboard.setStringAsync(text);
    };

    const speakText = async (text: string) => {
        const cleanText = stripMarkdown(text);
        setIsSpeaking(true);
        Speech.speak(cleanText, {
            language: 'es-MX',
            pitch: 1.0,
            rate: 1.0,
            onDone: () => setIsSpeaking(false),
            onError: () => setIsSpeaking(false),
        });
    };

    const stopSpeaking = () => {
        Speech.stop();
        setIsSpeaking(false);
    };

    return (
        <View>
            <View style={[styles.messageContainer, styles.userMessage]}>
                <Text style={styles.userText}>{item.question}</Text>
            </View>
            {item.answer ? (
                <View style={[styles.messageContainer, styles.botMessage]}>
                    <Markdown style={{ body: styles.botText }}>{item.answer}</Markdown>
                    <View style={styles.iconBar}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.iconButton} onPress={() => copyToClipboard(item.answer)}>
                            <Ionicons name="copy-outline" size={20} color="#007AFF" />
                        </TouchableOpacity>
                        {isSpeaking ? (
                            <TouchableOpacity activeOpacity={0.7} style={styles.iconButton} onPress={stopSpeaking}>
                                <Ionicons name="stop-circle" size={20} color="#007AFF" />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity activeOpacity={0.7} style={styles.iconButton} onPress={() => speakText(item.answer)}>
                                <Ionicons name="volume-high" size={20} color="#007AFF" />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            ) : null}
        </View>
    );
});

export default MessageItem;
