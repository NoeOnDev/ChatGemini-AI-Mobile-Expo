import { useState, useCallback, useRef, memo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Clipboard from 'expo-clipboard';
import * as Speech from 'expo-speech';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Markdown from 'react-native-markdown-display';
import { styles } from './AppStyles';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY as string;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
const chat = model.startChat();

interface Message {
  question: string;
  answer: string;
}

const useChatLogic = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToAI = async (query: string, context: Message[]) => {
    const limitedContext = context.slice(-5);
    const contextMessages = limitedContext
      .map((msg) => `Q: ${msg.question}\nA: ${msg.answer}`)
      .join('\n');
    const fullQuery = `${contextMessages}\nQ: ${query}`;

    try {
      const result = await chat.sendMessage(fullQuery);
      return result.response?.text();
    } catch (error) {
      throw new Error('Error communicating with AI API');
    }
  };

  const handleSend = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        Alert.alert('Error', 'The query cannot be empty.');
        return;
      }

      const newQuestion: Message = { question: query, answer: '' };
      setMessages((prevMessages) => [...prevMessages, newQuestion]);
      setIsLoading(true);

      try {
        const text = await sendMessageToAI(query, messages);
        if (text) {
          setMessages((prevMessages) =>
            prevMessages.map((msg, index) =>
              index === prevMessages.length - 1
                ? { ...msg, answer: text }
                : msg
            )
          );
        }
      } catch (err) {
        Alert.alert('Error', (err as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  return {
    messages,
    isLoading,
    handleSend,
  };
};

const MessageItem = memo(({ item }: { item: Message }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
    Alert.alert('Copied to clipboard', 'The message has been copied to the clipboard.');
  };

  const speakText = async (text: string) => {
    setIsSpeaking(true);
    Speech.speak(text, {
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
          <Markdown
            style={{
              body: styles.botText,
              text: styles.botText,
            }}
          >
            {item.answer}
          </Markdown>
          <View style={styles.iconBar}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.iconButton}
              onPress={() => copyToClipboard(item.answer)}
            >
              <Ionicons name="copy" size={20} color="#007AFF" />
            </TouchableOpacity>
            {isSpeaking ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.iconButton}
                onPress={stopSpeaking}
              >
                <Ionicons name="stop" size={20} color="#007AFF" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.iconButton}
                onPress={() => speakText(item.answer)}
              >
                <Ionicons name="volume-high" size={20} color="#007AFF" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : null}
    </View>
  );
});

const InputArea = ({ query, setQuery, onSendPress, isLoading }: any) => (
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
        <Ionicons name="send" size={28} color="#007AFF" />
      )}
    </TouchableOpacity>
  </View>
);

function App() {
  const [query, setQuery] = useState('');
  const flatListRef = useRef<FlatList>(null);
  const { messages, isLoading, handleSend } = useChatLogic();

  const onSendPress = () => {
    handleSend(query);
    setQuery('');
  };

  return (
    <ImageBackground
      source={require('./background.jpg')}
      style={styles.container}
    >
      <StatusBar backgroundColor={'#007AFF'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Gemini AI Chat</Text>
        </View>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <MessageItem item={item} />}
          contentContainerStyle={styles.chatContent}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
          onLayout={() => flatListRef.current?.scrollToEnd()}
        />
        <InputArea
          query={query}
          setQuery={setQuery}
          onSendPress={onSendPress}
          isLoading={isLoading}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

export default App;