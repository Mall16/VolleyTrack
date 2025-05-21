import React from 'react';
import ItemSmall from "./ItemSmall";

export default function Index({ data, toggleBookmark, bookmarked }) {
  return (
    <>
      {data.map((item, index) => (
        <ItemSmall
          key={index}
          item={item}
          toggleBookmark={toggleBookmark}
          bookmarked={bookmarked}
        />
      ))}
    </>
  );
}
