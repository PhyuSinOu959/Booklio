import { Book, books } from '@/app/(tabs)/dummy';
import { ThemedText as Text } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';

export default function BookListScreen() {
  const { category } = useLocalSearchParams();
  
  const filteredBooks = books.filter(book => book.category === category);

  const renderBookItem = ({ item }: { item: Book }) => (
    <Pressable style={styles.bookItem}>
      <Image
        source={{ uri: item.coverImage }}
        style={styles.coverImage}
        defaultSource={require('@/assets/images/book-placeholder.png')}
      />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.rating}>Rating: {item.rating} ⭐️</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category}</Text>
      <FlatList
        data={filteredBooks}
        renderItem={renderBookItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#2B3875',
    color: '#FFFFFF',
  },
  listContainer: {
    padding: 16,
  },
  bookItem: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  coverImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#888888',
  },
}); 