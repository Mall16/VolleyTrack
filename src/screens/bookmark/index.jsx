import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Index from '../../components/index';

export default function BookmarkScreen({ data = [] }) {
  return (
    <ScrollView style={styles.container}>
      <Animatable.Text
        animation="fadeInDown"
        duration={600}
        style={styles.title}
      >
        Artikel Disimpan
      </Animatable.Text>

      {Array.isArray(data) && data.length > 0 ? (
        <Animatable.View animation="fadeInUp" delay={200}>
          <Index data={data} />
        </Animatable.View>
      ) : (
        <Animatable.View
          style={styles.emptyContainer}
          animation="zoomIn"
          delay={400}
        >
          <Text style={styles.noBookmark}>Belum ada bookmark</Text>
        </Animatable.View>
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
