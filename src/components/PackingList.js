import Item from "./Item";
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearAll,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <button onClick={onClearAll}>Clear All</button>
    </div>
  );
}
