import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OrderRow({ order, handleEdit, handleDelete }) {
  return (
    <tr className="my-2">
      <td className="font-bold text-left">{order.name}</td>
      <td>{order.cate}</td>
      <td className="color-p">{order.quantity}</td>
      <td className="color-p">{order.tax_rate}</td>
      <td className="color-p">{order.amount}</td>
      <td className="color-g">
        <label className="px-2 py-0.5 rounded-sm coupon-state">
          {order.coupon}
        </label>
      </td>
      <td className="color-p">
        <button className="font-icon-wrapper" onClick={handleDelete}>
          <FontAwesomeIcon className="pr-1 fa-icon color-delete opacity-20" icon="trash" />
        </button>
        <button onClick={handleEdit}>Edit</button>
      </td>
      <td className="color-g"><input className="check" type="checkbox" /></td>
    </tr>
  );
}