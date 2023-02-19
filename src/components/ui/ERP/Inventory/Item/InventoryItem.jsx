import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InventoryItem({ item, handleEdit, handleDelete }) {
  const options = [

  ];

  return (
    <tr className="my-2">
      <td className="font-bold text-left">{item.name}</td>
      <td>{item.category}</td>
      <td>
        <img className="mx-auto mt-2" src={item.image} alt="img" />
      </td>
      <td className="color1">{item.tag}</td>
      <td>
        <select
          className="filter"
          options={options}
          placeholder="input details"
          value={item.description}
          readOnly={true}
        />
      </td>
      <td className="color1">{item.quantity}</td>
      <td className="color1">{item.sku}</td>
      <td>{item.vendor}</td>
      <td className="color1">
        <button className="ml-auto font-icon-wrapper"
          onClick={() => { handleDelete(item.id) }}>
          <FontAwesomeIcon
            className="pr-1 fa-icon opacity-20"
            icon="trash"
          />
        </button>
        <button onClick={() => { handleEdit(item) }}>
          Edit
        </button>
      </td>
    </tr>
  )
}
