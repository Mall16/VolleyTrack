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
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  centeredList: {
    justifyContent: 'center',
    flexGrow: 1,
    paddingVertical: 4,
  },
  categoryButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#222',
    borderRadius: 18,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    minWidth: 70,
  },
  selectedCategory: {
    backgroundColor: '#FFD700',
  },
  categoryText: {
    color: '#FFF',
    fontSize: 13.5,
    fontWeight: '600',
    textAlignVertical: 'center',
  },
  selectedText: {
    color: '#000',
  },
});

export default CategoryList;