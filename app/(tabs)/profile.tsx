import { StyleSheet } from 'react-native';

import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <View style={styles.background}>
      <Text style={styles.greeting}>Profile</Text>
      <Text style={styles.subtitle}>Your reading journey</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Your profile information</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#2B3875', // Dark blue/navy color
    padding: 16,
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    color: '#333333',
  },
}); 