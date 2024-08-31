import React, { useState } from "react";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  const [checked, setChecked] = useState(item.packed);

  return (
    <li>
      <input
        type="checkbox"
        value={checked}
        onChange={() => {
          setChecked(!checked);
          onToggleItem(item.id);
        }}
      />
      <span
        style={
          checked ? { textDecoration: "line-through", color: "green" } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
