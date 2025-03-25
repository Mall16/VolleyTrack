import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import ListHorizontal from './src/components/ListHorizontal';
import Index from './src/components/Index';
import data from './src/data/data';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredData = data.filter(
    (item) =>
      (selectedCategory === 'Semua' || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>VolleyTrack</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Cari Statistik atau Tips"
        placeholderTextColor="#AAA"
        value={search}
        onChangeText={setSearch}
      />
      <ListHorizontal setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <ScrollView style={styles.list}>
        {filteredData.length > 0 ? (
          <Index data={filteredData} />
        ) : (
          <Text style={styles.noResult}>Tidak ada hasil ditemukan</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0A0A', padding: 10 },
  header: { fontSize: 30, fontWeight: 'bold', color: '#FFD700', textAlign: 'center', marginBottom: 15 },
  searchBar: {
    height: 40,
    backgroundColor: '#222',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  list: { marginTop: 10 },
  noResult: { color: '#FFF', textAlign: 'center', marginTop: 20, fontSize: 16 },
});
