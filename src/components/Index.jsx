import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ItemSmall from './ItemSmall';

export default function Index({ data }) {
  return (
    <View>
      <View style={styles.largeCard}>
        {data[0]?.image ? (
          <Image source={{ uri: data[0].image }} style={styles.imageLarge} />
        ) : (
          <Text style={styles.imageError}>Gambar tidak tersedia</Text>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{data[0].title}</Text>
          <Text style={styles.cardDescription}>{data[0].description}</Text>
          <TouchableOpacity onPress={() => console.log(`${data[0].title} Clicked!`)}>
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>

      {data.slice(1).map((item, index) => (
        <ItemSmall key={index} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  largeCard: { backgroundColor: '#121212', borderRadius: 10, marginBottom: 20, padding: 10 },
  imageLarge: { width: '100%', height: 200, borderRadius: 10 },
  imageError: { textAlign: 'center', color: '#FFF', fontSize: 14, padding: 20 },
  textContainer: { padding: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
  cardDescription: { fontSize: 14, color: '#BBB', marginTop: 5 },
  readMoreText: { color: '#FFD700', fontSize: 14, fontWeight: 'bold', marginTop: 5 },
});
