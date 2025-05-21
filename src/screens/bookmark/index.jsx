import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Index from '../../components/index';

export default function BookmarkScreen({ data = [] }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Artikel Disimpan</Text>
      {Array.isArray(data) && data.length > 0 ? (
        <Index data={data} />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.noBookmark}>Belum ada bookmark</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  noBookmark: {
    color: '#FFF',
    fontSize: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
});
