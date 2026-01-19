import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" backgroundColor="#2E8B57" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Solid Sense</Text>
        <Text style={styles.subtitle}>Detects nearby solid objects using your phone's sensors and provides real-time feedback.</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>✨ Features</Text>
          <Text style={styles.featureText}>
        • Real-time solid body detection using sensors\n        • Distance estimation to nearby solids\n        • Haptic feedback on proximity\n        • Visual radar-like display\n        • Detection history log
          </Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🚀 Getting Started</Text>
          <Text style={styles.cardText}>
            1. Run 'npm install' to install dependencies{`\n`}
            2. Run 'npx expo start' to start the dev server{`\n`}
            3. Scan QR code with Expo Go app (Android/iOS){`\n`}
            4. Or press 'a' for Android emulator
          </Text>
        </View>
        
        <TouchableOpacity style={[styles.button, {backgroundColor: '#2E8B57'}]}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        
        <Text style={styles.footer}>
          Built with ☁️ Cloud App Builder + Expo
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#2E8B57',
    paddingVertical: 50,
    paddingHorizontal: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  featureText: {
    fontSize: 16,
    lineHeight: 28,
    color: '#2E8B57',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    marginBottom: 40,
  },
});
