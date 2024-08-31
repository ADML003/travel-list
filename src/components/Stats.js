export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Nothing to pack yet</em>
      </footer>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Congrats! You are all set for your trip!"
          : `You have ${numItems} items in your list, and you already packed
          ${numPackedItems} ${percentage}%`}
      </em>
    </footer>
  );
}
