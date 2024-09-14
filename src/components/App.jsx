import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    unit: "Bungkus",
    price: 40000,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    unit: "Kg",
    price: 100000,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    unit: "Liter",
    price: 15000,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("groceryItems");
    return savedItems ? JSON.parse(savedItems) : groceryItems;
  });

  console.log(items);

  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}
