'use client';

import React from 'react';
import { FixedSizeList as List } from 'react-window';

export default function OptimizationTable() {
  const obj = {
    name: '홍길동',
    age: '20',
  };
  const dummyData = Array(1000).fill(obj);

  return (
    <section className="mb-24">
      <header className="flex gap-4">
        <h3>Name</h3>
        <h3>Age</h3>
      </header>
      <List
        height={150}
        itemCount={dummyData.length}
        itemSize={35}
        width="100%"
      >
        {({ index, style }) => {
          const data = dummyData[index];
          return (
            <article style={style} className="flex gap-4">
              <p>{data.name}</p>
              <p>{data.age}</p>
            </article>
          );
        }}
      </List>
    </section>
  );
}
