import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ItemSmall({ item, toggleBookmark, bookmarked }) {
  const isBookmarked = bookmarked?.some((b) => b.title === item.title);

  return (
    <View style={styles.card}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.imageSmall} />
      ) : (
        <Text style={styles.imageError}>Gambar tidak tersedia</Text>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View style={styles.row}>
        <TouchableOpacity onPress={() => console.log(s.item.title + " Clicked!")}>
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleBookmark(item)}>
            <Text style={styles.bookmark}>{isBookmarked ? '🔖' : '📑'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#121212', borderRadius: 10, marginBottom: 20, padding: 10, flexDirection: 'row' },
  imageSmall: { width: 100, height: 100, borderRadius: 10 },
  imageError: { color: '#FFF', fontSize: 14, textAlign: 'center', padding: 10 },
  textContainer: { flex: 1, marginLeft: 10 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },
  cardDescription: { fontSize: 14, color: '#BBB', marginTop: 5 },
  readMoreText: { color: '#FFD700', fontSize: 14, fontWeight: 'bold' },
  bookmark: { fontSize: 20, marginLeft: 15 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 },
});