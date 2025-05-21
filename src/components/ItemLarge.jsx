import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ItemLarge({ item, toggleBookmark, bookmarked }) {
  const isBookmarked = bookmarked?.some((b) => b.title === item.title);

  return (
    <View style={styles.card}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.imageLarge} />
      ) : (
        <Text style={styles.imageError}>Gambar tidak tersedia</Text>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => console.log(`${item.title} Clicked!`)}>
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
  card: {
    backgroundColor: '#222',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 15,
    flexDirection: 'row',
  },
  imageLarge: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  imageError: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    padding: 10,
  },
  textContainer: {
    padding: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardDescription: {
    fontSize: 14,
    color: '#BBB',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readMoreText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bookmark: {
    fontSize: 20,
  },
});
