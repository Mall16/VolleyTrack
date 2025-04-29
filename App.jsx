import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import data from './src/data';
import Index from './src/components';
import ListHorizontal from './src/components/ListHorizontal';
import ItemLarge from './src/components/ItemLarge';
import BookmarkScreen from './src/screens/bookmark';
import ProfileScreen from './src/screens/profile';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [search, setSearch] = useState('');
  const [bookmarked, setBookmarked] = useState([]);
  const [selectedTab, setSelectedTab] = useState('Home');

  const toggleBookmark = (item) => {
    const isBookmarked = bookmarked.some((b) => b.title === item.title);
    if (isBookmarked) {
      setBookmarked(bookmarked.filter((b) => b.title !== item.title));
    } else {
      setBookmarked([...bookmarked, item]);
    }
  };

  const filteredData = data.filter((item) => {
    const categoryMatch =
      selectedCategory === 'Semua' || item.category === selectedCategory;
    const searchMatch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const renderContent = () => {
    if (selectedTab === 'Bookmark') {
      return <BookmarkScreen data={bookmarked} toggleBookmark={toggleBookmark} />;
    } else if (selectedTab === 'Profile') {
      return <ProfileScreen />;
    } else {
      const featured = filteredData[0];
      const remaining = filteredData.slice(1);

      return (
        <>
          <TextInput
            style={styles.searchBar}
            placeholder="Cari Statistik atau Tips"
            placeholderTextColor="#AAA"
            value={search}
            onChangeText={setSearch}
          />
          <ListHorizontal
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <ScrollView style={styles.list}>
            {featured && (
              <ItemLarge
                item={featured}
                toggleBookmark={toggleBookmark}
                bookmarked={bookmarked}
              />
            )}
            <Index
              data={remaining}
              toggleBookmark={toggleBookmark}
              bookmarked={bookmarked}
            />
          </ScrollView>
        </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>VolleyTrack</Text>
      {renderContent()}
      <View style={styles.bottomTabs}>
        <TouchableOpacity onPress={() => setSelectedTab('Home')}>
          <Text style={selectedTab === 'Home' ? styles.tabActive : styles.tab}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Bookmark')}>
          <Text
            style={selectedTab === 'Bookmark' ? styles.tabActive : styles.tab}>
            Bookmark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Profile')}>
          <Text
            style={selectedTab === 'Profile' ? styles.tabActive : styles.tab}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginTop: 15,
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 10,
    color: '#FFF',
    marginTop: 15,
  },
  list: {
    marginTop: 10,
    marginBottom: 60,
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#111',
    borderTopWidth: 1,
    borderColor: '#222',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    color: '#888',
    fontSize: 16,
  },
  tabActive: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 16,
  },
});