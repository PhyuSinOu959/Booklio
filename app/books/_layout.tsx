import { Stack } from 'expo-router';

export default function BooksLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="list"
        options={{
          title: 'Books',
          headerStyle: {
            backgroundColor: '#2B3875',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Book Details',
          headerStyle: {
            backgroundColor: '#2B3875',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
    </Stack>
  );
} 