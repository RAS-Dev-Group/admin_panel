import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CouponRow({ item, handleEdit, handleDelete }) {
  return (
    <tr className="my-2">
      <td className="text-left color-p">{item.coupon}</td>
      <td >{item.total_num}</td>
      <td >{item.valid_from}</td>
      <td className="color-p">{item.valid_to}</td>
      <td className="color-p">{item.discount}%</td>
      <td className="color-p">
        <button className="ml-auto font-icon-wrapper" onClick={() => handleDelete(item.id)}>
          <FontAwesomeIcon className="pr-1 fa-icon color-delete opacity-20" icon="trash" />
        </button>
        <button onClick={() => handleEdit(item)}>
          Edit
        </button>
      </td>
      <td>
      </td>
    </tr>
  );
}