import React, { useState } from 'react';
import { View } from 'react-native';
import ItemSmall from './ItemSmall';

export default function Index({ data }) {
  const [bookmarked, setBookmarked] = useState([]);

  const toggleBookmark = (item) => {
    const isBookmarked = bookmarked.some(b => b.title === item.title);
    if (isBookmarked) {
      setBookmarked(bookmarked.filter(b => b.title !== item.title));
    } else {
      setBookmarked([...bookmarked, item]);
    }
  };

  return (
    <View>
      {data.map((item, index) => (
        <ItemSmall
          key={index}
          item={item}
          toggleBookmark={toggleBookmark}
          bookmarked={bookmarked}
        />
      ))}
    </View>
  );
}
