import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { displayNotification } from '../../utils/notification'; // ✅ Import notifikasi

const FormScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const editData = route.params?.editData;

  const [title, setTitle] = useState(editData?.title || '');
  const [image, setImage] = useState(editData?.image || '');
  const [category, setCategory] = useState(editData?.category || '');
  const [description, setDescription] = useState(editData?.description || '');

  const handleSubmit = async () => {
    if (title && image && category && description) {
      try {
        const artikelRef = collection(db, 'artikel');
        if (editData) {
          const docRef = doc(db, 'artikel', editData.id);
          await updateDoc(docRef, { title, image, category, description });
          Alert.alert('Sukses', 'Artikel berhasil diedit!');
        } else {
          await addDoc(artikelRef, { title, image, category, description });
          Alert.alert('Sukses', 'Artikel berhasil ditambahkan!');
          await displayNotification('Artikel Ditambahkan', `"${title}" berhasil disimpan.`); // ✅ Notifikasi ditampilkan
        }
        navigation.goBack();
      } catch (error) {
        Alert.alert('Error', 'Gagal menyimpan data');
        console.log(error);
      }
    } else {
      Alert.alert('Error', 'Mohon isi semua field');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{editData ? 'Edit Artikel' : 'Form Tambah Artikel'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Judul"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="URL Gambar"
        placeholderTextColor="#888"
        value={image}
        onChangeText={setImage}
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
      <Button title={editData ? 'Simpan Perubahan' : 'Tambah'} color="#FFD700" onPress={handleSubmit} />
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
