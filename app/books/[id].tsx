import { books } from '@/app/(tabs)/dummy';
import { ThemedText as Text } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

export default function BookDetailScreen() {
  const { id } = useLocalSearchParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Book not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: book.coverImage }}
          style={styles.coverImage}
          defaultSource={require('@/assets/images/book-placeholder.png')}
        />
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>by {book.author}</Text>
        <Text style={styles.rating}>Rating: {book.rating} ⭐️</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Category</Text>
          <Text style={styles.sectionText}>{book.category}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{book.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>
          <Text style={styles.detailText}>Published: {book.publishedDate}</Text>
          <Text style={styles.detailText}>Pages: {book.pages}</Text>
          <Text style={styles.detailText}>ISBN: {book.isbn}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    backgroundColor: '#2B3875',
    alignItems: 'center',
    paddingVertical: 32,
  },
  coverImage: {
    width: 180,
    height: 270,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#666666',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
  detailText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 4,
  },
  errorText: {
    fontSize: 18,
    color: '#FF0000',
    textAlign: 'center',
    marginTop: 20,
  },
}); 