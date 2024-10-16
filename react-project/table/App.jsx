// src/App.js
import React from 'react';
import TableComponent from './TableComponent';

const data = [
  { name: 'John', age: 28, city: 'New York' },
  { name: 'Jane', age: 32, city: 'Chicago' },
  { name: 'Mike', age: 36, city: 'Los Angeles' },
];

function App() {
  return (
    <div className="App">
      <h1>Simple React Table</h1>
      <TableComponent data={data} />
    </div>
  );
}

export default App;
