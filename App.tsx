import { useState, useRef } from 'react';
import { FlatList, SafeAreaView, StatusBar, ImageBackground, View, Text } from 'react-native';
import MessageItem from './components/MessageItem';
import InputArea from './components/InputArea';
import { useChatLogic } from './hooks/useChatLogic';
import { styles } from './AppStyles';

export default function App() {
  const [query, setQuery] = useState('');
  const flatListRef = useRef<FlatList>(null);
  const { messages, isLoading, handleSend } = useChatLogic();

  const onSendPress = () => {
    handleSend(query);
    setQuery('');
  };

  return (
    <ImageBackground source={require('./background.jpg')} style={styles.container}>
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
        <InputArea query={query} setQuery={setQuery} onSendPress={onSendPress} isLoading={isLoading} />
      </SafeAreaView>
    </ImageBackground>
  );
}
