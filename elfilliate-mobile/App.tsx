import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inner}>
        <Text style={styles.title}>e.l.f.iliate Mobile</Text>
        <Text style={styles.subtitle}>Expo app scaffold — ready to build</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 8,
    color: '#666',
  },
});

