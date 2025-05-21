import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="bounceIn"
        duration={1000}
        source={{ uri: 'https://ui-avatars.com/api/?name=HIKMAL+FADHILAH' }}
        style={styles.avatar}
      />
      <Animatable.Text animation="fadeInDown" delay={300} style={styles.name}>
        Hikmal Fadhilah
      </Animatable.Text>
      <Animatable.Text animation="fadeInUp" delay={500} style={styles.detail}>
        NIM: 2218104
      </Animatable.Text>
      <Animatable.Text animation="fadeInUp" delay={700} style={styles.email}>
        Email: 2218104@scholar.um.ac.id
      </Animatable.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  detail: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 5,
  },
});
