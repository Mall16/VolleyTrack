import React, { useState } from 'react';
import { 
  StyleSheet, Text, TouchableOpacity, View, Image, 
  ScrollView, TextInput, Modal 
} from 'react-native';

const categories = ['Semua', 'Smash', 'Servis', 'Blok', 'Passing'];

export default function VolleyTrackApp() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [modalVisible, setModalVisible] = useState(false);

  const filteredData = data.filter(
    (item) =>
      (selectedCategory === 'Semua' || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>VolleyTrack</Text>
      
      <TextInput
        style={styles.searchBarFull}
        placeholder="Cari Statistik atau Tips"
        placeholderTextColor="#AAA"
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView style={styles.list}>
        <View style={styles.largeCard}>
          <Image source={{ uri: data[0].image }} style={styles.imageLarge} />
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{data[0].title}</Text>
            <Text style={styles.cardDescription}>{data[0].description}</Text>
            <TouchableOpacity onPress={() => console.log(`${data[0].title} Clicked!`)}>
              <Text style={styles.readMoreText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {filteredData.slice(1).map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.imageSmall} />
            <View style={styles.textContainerRow}>
              <Text style={styles.cardTitleSmall}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <TouchableOpacity onPress={() => console.log(`${item.title} Clicked!`)}>
                <Text style={styles.readMoreText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const data = [
  { 
    title: 'Teknik Smash yang Efektif', 
    image: 'https://plus.unsplash.com/premium_photo-1709247069581-147b09c1eb18?q=80&w=400&auto=format&fit=crop', 
    category: 'Smash',
    description: 'Pelajari teknik smash yang efektif untuk meningkatkan permainan Anda.'
  },
  { 
    title: 'Latihan Servis Akurat', 
    image: 'https://plus.unsplash.com/premium_photo-1708030156436-ed0271ba40c2?q=80&w=400&auto=format&fit=crop', 
    category: 'Servis',
    description: 'Cara meningkatkan akurasi servis secara konsisten.'
  },
  { 
    title: 'Blok yang Kokoh', 
    image: 'https://plus.unsplash.com/premium_photo-1709247069718-9de8366f5dd9?q=80&w=400&auto=format&fit=crop', 
    category: 'Blok',
    description: 'Strategi dasar untuk membangun blok pertahanan yang kuat.'
  },
  { 
    title: 'Teknik Passing yang Baik', 
    image: 'https://plus.unsplash.com/premium_photo-1709247069914-ce86fad67e76?q=80&w=400&auto=format&fit=crop', 
    category: 'Passing',
    description: 'Teknik dasar passing yang membantu mengontrol permainan.'
  },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A', 
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 15,
  },
  searchBarFull: {
    height: 40,
    borderColor: '#444',
    backgroundColor: '#222',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#FFF',
    marginBottom: 15,
  },
  largeCard: {
    backgroundColor: '#121212',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  card: {
    backgroundColor: '#121212',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    flexDirection: 'row',
  },
  imageLarge: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  imageSmall: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  textContainerRow: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardTitleSmall: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardDescription: {
    fontSize: 14,
    color: '#BBB',
    marginTop: 5,
  },
  readMoreText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },

  
});