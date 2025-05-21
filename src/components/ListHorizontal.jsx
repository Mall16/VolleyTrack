import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const categories = ['Semua', 'Smash', 'Servis', 'Blok', 'Passing'];

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === item && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item && styles.selectedText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.centeredList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Pusatkan kategori
    marginBottom: 8,
  },
  centeredList: {
    justifyContent: 'center', // Pusatkan elemen dalam FlatList
    flexGrow: 1,
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#222',
    borderRadius: 6,
    marginHorizontal: 5, // Jarak antar tombol lebih proporsional
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    minWidth: 65, // Lebar lebih seragam
  },
  selectedCategory: {
    backgroundColor: '#FFD700',
  },
  categoryText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#000',
  },
});

export default CategoryList;
