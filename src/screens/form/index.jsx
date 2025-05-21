import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const FormScreen = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title && category && description) {
      Alert.alert('Sukses', 'Data berhasil ditambahkan!');
      setTitle('');
      setCategory('');
      setDescription('');
    } else {
      Alert.alert('Error', 'Mohon isi semua field');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Tambah Artikel</Text>

      <TextInput
        style={styles.input}
        placeholder="Judul"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Kategori"
        placeholderTextColor="#888"
        value={category}
        onChangeText={setCategory}
      />

      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Deskripsi"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <Button title="Tambah" color="#FFD700" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#222',
    color: '#FFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default FormScreen;
