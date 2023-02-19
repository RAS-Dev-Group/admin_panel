import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InvoiceStatusLabel from "./InvoiceStatus";

export default function InvoiceRow({ item, handleEdit, handleDelete }) {
  return (
    <tr className="my-2">
      <td className="font-bold text-left">{item.item}</td>
      <td>{item.discount}%</td>
      <td className="color-p">{item.coupon}</td>
      <td className="color-p">{item.email}</td>
      <td className="color-p">{item.address}</td>
      <td className="color-p">${item.amount}</td>
      <td className="color-p">${item.tax}</td>
      <td className="color-p">
        <button className="ml-auto font-icon-wrapper" onClick={() => handleDelete(item.id)}>
          <FontAwesomeIcon className="pr-1 fa-icon color-delete opacity-20" icon="trash" />
        </button>
        <button onClick={() => handleEdit(item)}>
          Edit
        </button>
      </td>
      <td>
        <InvoiceStatusLabel status={item.status} />
      </td>
    </tr>
  );
}