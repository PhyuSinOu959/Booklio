import { ThemedText as Text } from '@/components/ThemedText';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { categories } from './dummy';

export default function HomeScreen() {



  const renderCategories = () => {
    return (
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({item}) => (
            <Pressable style={styles.categoryItem}>
              <Text style={styles.categoryText}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.background}>
      <Text style={styles.greeting}>Hello, Jelly!</Text>
      <Text style={styles.subtitle}>Which book suits your current mood?</Text>
      <View style={styles.contentContainer}>
        {/* <Text style={styles.title}>Remember, Jelly. You have an unfinished book since July 30, 2021</Text> */}
        {renderCategories()}
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
  categoriesContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryItem: {
    width: '48%',
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
});
