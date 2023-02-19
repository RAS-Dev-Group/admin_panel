export default function InvoiceStatusLabel({ status }) {
  if (status === 'PENDING') {
    return <label className="py-0.5 status-pending">{status}</label>
  } else if (status === 'PAID') {
    return <label className="py-0.5 status-paid">{status}</label>
  } else if (status === 'DECLINED') {
    return <label className="py-0.5 status-decline">{status}</label>
  } else {
    return <label></label>; // i don't know this state ; nothing will be shown
  }
}