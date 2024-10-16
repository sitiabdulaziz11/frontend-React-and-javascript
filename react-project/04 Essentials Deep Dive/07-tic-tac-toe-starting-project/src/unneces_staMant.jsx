function ItemList({ items }) {
    const [filter, setFilter] = useState("");
  
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  
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
  