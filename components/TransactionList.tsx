"use client";

interface Props {
  transactions: any[];
  onDelete: (id: string) => void;
  onEdit: (txn: any) => void;
  renderActions?: (txn: any) => React.ReactNode; // Add this line
}

export default function TransactionList({
  transactions,
  onDelete,
  onEdit,
  renderActions,
}: Props) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="font-semibold text-xl mb-4">Transactions</h2>
      <ul className="space-y-2">
        {transactions.map((txn) => (
          <li
            key={txn._id}
            className="border p-2 rounded-md flex justify-between items-center hover:shadow-sm"
          >
            <span>
              {txn.date.split("T")[0]} - ₹{txn.amount} - {txn.description}
            </span>
            {renderActions ? (
              renderActions(txn)
            ) : (
              <div className="space-x-2">
                <button
                  onClick={() => onEdit(txn)}
                  className="text-blue-600 underline cursor-pointer hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(txn._id)}
                  className="text-red-600 underline cursor-pointer hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
