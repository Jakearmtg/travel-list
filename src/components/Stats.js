function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start addind some itens to your packing list 🚀</p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percPacked === 100
          ? "You got everything! Ready to go 🛫"
          : `🧳You have ${numItems} items on your list, and you already packed
          ${numPacked} (${percPacked}%)`}
      </em>
    </footer>
  );
}

export default Stats;
