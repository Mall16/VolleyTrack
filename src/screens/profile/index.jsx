import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function ProfileScreen() {
  const [articles, setArticles] = useState([]);
  const navigation = useNavigation();

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'artikel'));
      const list = [];
      querySnapshot.forEach((docSnap) => {
        list.push({ id: docSnap.id, ...docSnap.data() });
      });
      setArticles(list);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'artikel', id));
      Alert.alert('Sukses', 'Artikel berhasil dihapus');
      fetchArticles();
    } catch (error) {
      Alert.alert('Error', 'Gagal menghapus artikel');
    }
  };

  const handleEdit = (item) => {
    navigation.navigate('Form', { editData: item });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchArticles);
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
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

      <Text style={styles.articleTitle}>Artikel</Text>
      {articles.map((item) => (
        <View key={item.id} style={styles.articleCard}>
          <Image source={{ uri: item.image }} style={styles.articleImage} />
          <View style={styles.articleContent}>
            <Text style={styles.articleHeader}>{item.title}</Text>
            <Text style={styles.articleCategory}>Kategori: {item.category}</Text>
            <Text style={styles.articleDescription}>{item.description}</Text>
            <View style={styles.buttonRow}>
              <Button title="Edit" color="#FFD700" onPress={() => handleEdit(item)} />
              <View style={{ width: 10 }} />
              <Button title="Delete" color="#FF4444" onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
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
  articleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  articleCard: {
    backgroundColor: '#111',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  articleImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  articleContent: {
    flex: 1,
  },
  articleHeader: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  articleCategory: {
    color: '#FFF',
    fontSize: 14,
    marginVertical: 2,
  },
  articleDescription: {
    color: '#CCC',
    fontSize: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
