import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '' });

  useEffect(() => {
    fetch('/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setItems([...items, data]);
        setNewItem({ name: '' });
      })
      .catch((error) => console.error('Error adding item:', error));
  };

  return (
    <div className="App">
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        name="name"
        value={newItem.name}
        onChange={handleInputChange}
        placeholder="New Item Name"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default App;


// To start our React application by running "npm start".