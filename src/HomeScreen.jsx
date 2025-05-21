import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import data from './src/data';
import Index from './src/components';
import ListHorizontal from './src/components/ListHorizontal';
import ItemLarge from './src/components/ItemLarge';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ bookmarked, setBookmarked }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const toggleBookmark = (item) => {
    const isBookmarked = bookmarked.some((b) => b.title === item.title);
    if (isBookmarked) {
      setBookmarked(bookmarked.filter((b) => b.title !== item.title));
    } else {
      setBookmarked([...bookmarked, item]);
    }
  };

  const filteredData = data.filter((item) => {
    const categoryMatch =
      selectedCategory === 'Semua' || item.category === selectedCategory;
    const searchMatch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featured = filteredData[0];
  const remaining = filteredData.slice(1);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>VolleyTrack</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Form')}
      >
        <Text style={styles.addButtonText}>+ Tambah Artikel</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="Cari Statistik atau Tips"
        placeholderTextColor="#AAA"
        value={search}
        onChangeText={setSearch}
      />
      <ListHorizontal
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ScrollView style={styles.list}>
        {featured && (
          <ItemLarge
            item={featured}
            toggleBookmark={toggleBookmark}
            bookmarked={bookmarked}
          />
        )}
        <Index
          data={remaining}
          toggleBookmark={toggleBookmark}
          bookmarked={bookmarked}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingHorizontal: 15 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFD700', marginTop: 15, textAlign: 'center' },
  searchBar: { backgroundColor: '#222', padding: 10, borderRadius: 10, color: '#FFF', marginTop: 15 },
  list: { marginTop: 10, marginBottom: 60 },
  addButton: { backgroundColor: '#FFD700', padding: 10, borderRadius: 10, marginTop: 10 },
  addButtonText: { textAlign: 'center', fontWeight: 'bold', color: '#000' },
});
