import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons dari @expo/vector-icons

interface DataItem {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [textValue, setTextValue] = useState<string>('');
  const [data, setData] = useState<DataItem[]>([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4' },
    { id: '5', text: 'Item 5' },
  ]);

  const renderItem = ({ item }: { item: DataItem }) => (
    <Text style={styles.item}>{item.text}</Text>
  );

  const handleTextChange = (text: string) => {
    setTextValue(text);
  };

  const handleSubmit = () => {
    if (textValue.trim() === '') {
      Alert.alert('Error', 'tolong masukkan text.');
      return;
    }

    const newItem: DataItem = {
      id: Math.random().toString(), // Generate unique ID (not recommended for production)
      text: textValue,
    };

    setData([...data, newItem]);
    setTextValue(''); // Clear input field after submitting
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>PRASSS</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy65UkjEfNlGeydvjAJsP_tn741hKxD_BYXA&sg',
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleTextChange}
          value={textValue}
          placeholder="Enter text"
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  scrollView: {
    width: '100%',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 50,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default App;
