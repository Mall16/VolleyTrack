import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://ui-avatars.com/api/?name=HIKMAL+FADHILAH' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Hikmal Fadhilah</Text>
      <Text style={styles.detail}>NIM: 2218104</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 50 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#FFD700' },
  detail: { fontSize: 16, color: '#FFF', marginTop: 5 },
});