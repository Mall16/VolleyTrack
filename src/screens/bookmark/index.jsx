import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Index from '../../components/index';

export default function BookmarkScreen({ data }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Artikel Disimpan</Text>
      {data.length > 0 ? (
        <Index data={data} />
      ) : (
        <Text style={styles.noBookmark}>Belum ada bookmark</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 },
  noBookmark: { color: '#FFF', textAlign: 'center', marginTop: 20 },
});