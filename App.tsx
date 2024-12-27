import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import axios from 'axios';

const App = () => {
  const [text1, setText1] = useState('hello');
  const [text2, setText2] = useState('https://httpbin.org/post');
  const [response, setResponse] = useState<string | null>(null);

  const handlePostRequest = async () => {
    try {
      const res = await axios.post(text2, { text: [text1] });
      setResponse(`Status: ${res.status}\nResponse: ${JSON.stringify(res.data, null, 2)}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setResponse(`Error: ${error.message}`);
      } else {
        setResponse('An unexpected error occurred.');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>テキストボックス1:</Text>
      <TextInput
        style={styles.textBox}
        value={text1}
        onChangeText={setText1}
        placeholder="Enter text"
      />
      <Text style={styles.label}>テキストボックス2 (URL):</Text>
      <TextInput
        style={styles.textBox}
        value={text2}
        onChangeText={setText2}
        placeholder="Enter URL"
        keyboardType="url"
      />
      <Button title="[test]" onPress={handlePostRequest} />
      <Text style={styles.label}>受信結果:</Text>
      <Text style={styles.response}>{response}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f7f7f7',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  textBox: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',
  },
  response: {
    marginTop: 10,
    fontSize: 14,
    color: '#333333',
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 5,
    fontFamily: 'monospace',
  },
});

export default App;
