export default function Item({ index, item, onDeleteItem, onToggleItem }) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.quantity}</td>
      <td>{item.unit}</td>
      <td>
        <span style={item.checked ? { textDecoration: "line-through" } : {}}>
          {item.name}
        </span>
      </td>
      <td>{new Intl.NumberFormat("id-ID", {
                style: 'currency',
                currency: 'IDR'
              }).format(item.price)}</td>
      <td>{item.date}</td>
      <td>
        <input
          type="checkbox"
          id="check"
          checked={item.checked}
          onChange={() => onToggleItem(item.id)}
        />
        <button
          className="btn btn-danger btn-ms"
          id="buton"
          onClick={() => onDeleteItem(item.id)}
        >
          &times;
        </button>
      </td>
    </tr>
  );
}
