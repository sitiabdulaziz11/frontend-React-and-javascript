import React, { useState, useEffect } from 'react';
function ItemList({ items }) {
  const [filter, setFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState(items); // Unnecessary state
  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, items]);
  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default ItemList;
