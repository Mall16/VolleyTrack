import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import data from './src/data';
import ItemLarge from './src/components/ItemLarge';
import ItemSmall from './src/components/ItemSmall';
import BookmarkScreen from './src/screens/bookmark';
import ProfileScreen from './src/screens/profile';
import FormScreen from './src/screens/form';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{ title: 'Tambah Artikel' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => null }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{ tabBarIcon: () => null }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: () => null }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [bookmarked, setBookmarked] = useState([]);

  const categories = ['Semua', ...new Set(data.map(item => item.category))];

  const filteredData = data.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = filteredData.length > 0 ? filteredData[0] : null;
  const otherArticles = filteredData.slice(1);

  const toggleBookmark = (item) => {
    const isBookmarked = bookmarked.some((b) => b.title === item.title);
    if (isBookmarked) {
      setBookmarked(bookmarked.filter((b) => b.title !== item.title));
    } else {
      setBookmarked([...bookmarked, item]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView style={{ padding: 20 }}>
        <Animatable.Text animation="fadeInDown" duration={800} style={styles.header}>
          VolleyTrack
        </Animatable.Text>

        <Animatable.View animation="fadeInUp" delay={200}>
          <TextInput
            placeholder="Cari Statistik atau Tips"
            placeholderTextColor="#888"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </Animatable.View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
          {categories.map((category, index) => (
            <Animatable.View key={index} animation="zoomIn" delay={index * 100}>
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          ))}
        </ScrollView>

        {featured && (
          <>
            <Animatable.View animation="fadeInLeft" delay={300}>
              <ItemLarge item={featured} toggleBookmark={toggleBookmark} bookmarked={bookmarked} />
            </Animatable.View>
            <Animatable.Text animation="fadeIn" delay={400} style={styles.sectionTitle}>
              Tips & Latihan
            </Animatable.Text>
          </>
        )}

        {otherArticles.map((item, index) => (
          <Animatable.View key={index} animation="fadeInUp" delay={index * 150}>
            <ItemSmall item={item} toggleBookmark={toggleBookmark} bookmarked={bookmarked} />
          </Animatable.View>
        ))}

        <Animatable.View animation="bounceIn" delay={600}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Form')}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>+ Tambah Artikel</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#222',
    color: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
  categoryButton: {
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryButtonActive: {
    backgroundColor: '#FFD700',
  },
  categoryText: {
    color: '#FFF',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#000',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 60,
  },
  addButtonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
