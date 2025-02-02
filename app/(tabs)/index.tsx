import React from 'react';
import { Text, View, Linking, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Stage 0 Task</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://github.com/allcodez/HNG-Mobile')}
      >
        <Text style={styles.buttonText}>View GitHub Repository</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.hireButton]}
        onPress={() => Linking.openURL('https://hng.tech/hire/react-native-developers')}
      >
        <Text style={styles.buttonText}>HNG React-Native Dev</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: 250,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  hireButton: {
    backgroundColor: '#1E90FF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
