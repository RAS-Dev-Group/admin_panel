import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SupplierRow({ supplier, handleDelete, handleEdit }) {
  return (
    <tr className="my-2">
      <td className="font-bold text-left">
        <img className="mt-2 mb-1" src={supplier.image} alt="img" />
        <label>{supplier.name}</label>
      </td>
      <td>{supplier.date}</td>
      <td className="color-p">{supplier.supplier}</td>
      <td className="color-p">{supplier.quantity}</td>
      <td className="color-g">{supplier.status ? 'X' : ''}</td>
      <td className="color-p">
        <button
          className="ml-auto font-icon-wrapper"
          onClick={() => handleDelete(supplier.id)}
        >
          <FontAwesomeIcon
            className="pr-1 fa-icon color-delete opacity-20"
            icon="trash"
          />
        </button>
        <button className="ml-1" onClick={handleEdit}>
          Edit
        </button>
      </td>
    </tr>
  )
}