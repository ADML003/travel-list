import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Toothbrush", quantity: 1, packed: false },
//   { id: 4, description: "Shirts", quantity: 5, packed: false },
//   { id: 5, description: "Pants", quantity: 3, packed: true },
// ];
function App() {
  const [items, setItems] = useState([]); //! LIFTING THE STATE UP FOR SIBLING SHARING PURPOSE

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearAllItems() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items?"
    );
    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={toggleItem}
        onClearAll={clearAllItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
