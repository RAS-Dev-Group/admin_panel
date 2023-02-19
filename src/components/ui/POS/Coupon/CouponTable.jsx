import CouponRow from "./CouponRow";

export default function CouponTables({ coupons, handleEdit, handleDelete }) {
  return (
    <div className="w-11/12 px-12 py-8 mx-auto bg-white rounded-xl">
      <table className="table w-full text-center supplier-table">
        <thead>
          <tr>
            <th className="text-left">Coupon Code</th>
            <th>Total Number</th>
            <th>Valid From</th>
            <th>Valid Till</th>
            <th>Discount Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map(coupon => (<CouponRow
            key={coupon.id}
            item={coupon}
            handleEdit={() => handleEdit(coupon)}
            handleDelete={() => handleDelete(coupon.id)}
          />))}
        </tbody>
      </table>
    </div>
  );
}
